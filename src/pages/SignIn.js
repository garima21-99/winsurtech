import React, { useState } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { createTheme } from '@mui/material/styles';
import { Email } from '@material-ui/icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Login } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
 root: {
   '& .MuiTextField-root': {
     margin: theme.spacing(1),
     borderBottomLeftRadius: '50% ',
     borderBottomRightRadius: '50% 0px',
   },
   '& .MuiButton-root': {
     margin: theme.spacing(1),
   },
 },
 form: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100vh',
 },
 inputRow: {
   display: 'flex',
   justifyContent: 'center',
   alignItems:'center',
   width: '10vw',
  
 },
 inputCol: {
   flex: 1,
   margin: theme.spacing(1),
 },
   button: {
     float:'right',
       backgroundColor: 'transparent',
       alignItems:'right',
       border: '2px solid #078dc1',
       color: '#078dc1',
       transition: 'background-color 0.2s ease-in-out',
       '&:hover': {
           backgroundColor: '#078dc1',
           color: '#fff',
           cursor: 'pointer'
       }
   }
}));


const theme = createTheme();


const SignIn = () => {
 const classes = useStyles();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const initialValues = {
    email: '',
   
    password: '',
  };


 const handleEmailChange = (event) => {
   setEmail(event.target.value);
 };


 const handlePasswordChange = (event) => {
   setPassword(event.target.value);
 };




 const handleSubmit = (event) => {
   event.preventDefault();
   // handle form submission logic here
 };


 return (
    
   <div className={classes.form}>
          <Formik
        initialValues={{
          ...initialValues
        }}
        validationSchema={Yup.object().shape({
          
          email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
         
          password: Yup.string()
            .required('Please enter your password')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character'
            ),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
          values
        }) => (
            <form className={classes.root} onSubmit={handleSubmit} id="contact_us">
            <Grid container spacing={2} className='contact_us_form'>
            <Grid item xs={12} className={classes.inputRow}>
            <Login style={{ fontSize: '3rem', color: '#3f51b5'}} />
              </Grid>
              <Grid item xs={12} className={classes.inputRow}>
              <Typography variant="h5" align="center" gutterBottom>
              LOGIN
            </Typography>
              </Grid>
              <Grid item xs={12} className={classes.inputRow}>
                
                <TextField
                  required
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={classes.inputCol}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12} className={classes.inputRow}>
                <TextField
                  id="password"
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  name='password'
                  type='password'
                  label="password"
                  variant="outlined"
                  className={classes.inputCol}
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}                />
             
              </Grid>
             
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className={classes.button}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}


        </Formik>

   </div>
 );
};


export default SignIn;







