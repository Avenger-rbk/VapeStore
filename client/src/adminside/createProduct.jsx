import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from 'sweetalert2'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Avangers
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [state, setState] = useState({
    uptodate : { imageUrl: "",
    title: "",
    stock: "",
    description: "",
    prise: "",}
  });
  const handleChange = (e) => {

  
    switch (e.target.name) {
        case "imageUrl":
          setState({
            uptodate: {
              imageUrl: e.target.value,
              title: state.uptodate.title,
              stock: state.uptodate.stock,
              description: state.uptodate.description,
              prise: state.uptodate.prise
            },
          });
          break;
        case "title":
          setState({
            uptodate: {
              imageUrl: state.uptodate.imageUrl,
              title: e.target.value,
              stock: state.uptodate.stock,
              description: state.uptodate.description,
              prise: state.uptodate.prise
            },
          });
          break;
        case "stock":
          setState({
            uptodate: {
              imageUrl: state.uptodate.imageUrl,
              title: state.uptodate.title,
              stock: e.target.value,
              description: state.uptodate.description,
              prise: state.uptodate.prise
            },
          });
          break;
        case "description":
          setState({
            uptodate: {
              imageUrl: state.uptodate.imageUrl,
              title: state.uptodate.title,
              stock: state.uptodate.stock,
              description: e.target.value,
              prise: state.uptodate.prise
            },
          });
          break;
          case "prise":
              setState({
                uptodate: {
                  imageUrl: state.uptodate.imageUrl,
                  title: state.uptodate.title,
                  stock: state.uptodate.stock,
                  description: state.uptodate.description,
                  prise: e.target.value
                },
              });
              break;
      }
      console.log(state.uptodate)
  };
  
  const handleSubmit = () => {
      console.log(state.uptodate);
    axios
      .post("/api/vapeStore/add", state.uptodate)
      .then((response) => {
         
let timerInterval
Swal.fire({
  title: 'Product Added',
  html: 'Check the user list ',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
     window.location.reload()  
      })
      .catch((error) => {
        alert("error");
      });
    
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="imageUrl"
                label="Image Url"
                name="imageUrl"
                autoComplete="imageUrl"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="title"
                label="Title"
                type="title"
                id="title"
                autoComplete="title"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                type="description"
                id="description"
                autoComplete="current-password"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              type="number"
                autoComplete="prise"
                name="prise"
                variant="outlined"
                required
                fullWidth
                id="prise"
                label="Prise"
                autoFocus
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"

                required
                fullWidth
                id="stock"
                label="Stock"
                name="stock"
                autoComplete="stock"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
