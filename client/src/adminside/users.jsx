import React , { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios"
import Swal from 'sweetalert2'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [state, setState] = useState({
      data: []
  });
 const componentDidMount=()=>{fetchData()}
 const  fetchData=()=> {
    axios.get("/api/vapeStore/users").then((res) => {
      setState({ data: res.data });
    });
  }
  const handelDelete = (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your user has been deleted.',
          'success',
          
        ).then(() => {location.reload()})
        axios
        .delete(`/api/vapeStore/remove/${user._id}`)
        .then((result) => {
          console.log(result);
          console.log(result.statusText);
     
        })
        .catch((err) => {
          console.log(err);
        });
        
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your user is safe :)',
          'error'
        )
      }
    })
    
   
  };
  const bull = <span className={classes.bullet}>•</span>;
componentDidMount()
  return (
      <div>
          {state.data.map((user, i)=>{return(
    <Card className={classes.root} variant="outlined" key={i}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User
        </Typography>
        <Typography variant="h5" component="h2">
          Username : {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Last Name : {user.lastlastName}
        </Typography>
        <Typography variant="body2" component="p">
          Email : {user.email}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handelDelete(user)}>Remove</Button>
      </CardActions>
    </Card>)})}</div>
  );
}