import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import Navbarprod from "../navbar/navbarprod.jsx";
import axios from "axios";
import { Alert, AlertTitle } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function Orders(props) {
  const classes = useStyles();
  var list = [];
  var email;
  var title;
  var imageUrl;
  var prise;
  var order = JSON.parse(localStorage.getItem("order"));
  var tottale = 0
  const [state, setState] = useState({
    email: email,
    imageUrl: imageUrl,
    title: title,
    stock: 0,
    prise: prise,
  });
  const handleClick = () => {
var arrOfArray = JSON.parse(localStorage.getItem("order"))
    console.log(JSON.parse(localStorage.getItem("order")))
     arrOfArray.map((e,i)=>{
       var onePruduct = { 
        email: localStorage.getItem("user"),
        imageUrl: e[2],
        title: e[0],
        stock: 0,
        prise: e[1],
       }
       console.log("send ==> " , onePruduct)
           axios
      .post(`/api/vapeStore/order`, onePruduct)
      .then((res) => {
        console.log("seccess")
        localStorage.removeItem("order");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
     })
 
  };

  if (order === null) {
    return (
      <div className="card">
        <div className={classes.root}>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        You have No order
      </Alert>
    </div>
     
       
      </div>
    );
  } else {
    order.map((e, i) => {
      var a = e[1] * 1 
      tottale = tottale + a 
      list.push(      <div key = {i}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={e[2]} id="prodImage" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                { e[0]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {e[1]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card></div>
      );
      console.log(order);
  
      (email = e[3]), (imageUrl = e[2]), (title = e[0]), (prise = e[1]);
    });
    return (
      <div className="orders">
        {list}
       Total price {tottale} £ 
        
        <Button 
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}>confirm</Button>
      </div>
    );
  }
}


   

