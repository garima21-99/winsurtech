import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, getIn } from 'formik';

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    TextField,
    Button
  } from '@material-ui/core';
  
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
      height: '100%'
    },
    actions: {
      justifyContent: 'flex-end',
      padding: theme.spacing(2)
    }
  }));

const SignUp=()=>{
    const classes = useStyles();


  const initialValues = {
    name: '',
    email: '',
   
    password: '',
    confirmPassword: ''
  };
    return(
        <>
       
         <Card className={clsx(classes.root)}>
      
      <Divider />
      <Formik
        initialValues={{
          ...initialValues
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          
          email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
         
          password: Yup.string()
            .required('Please enter your password')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character'
            ),
          confirmPassword: Yup.string()
            .required('Please enter the password again')
            .oneOf([Yup.ref('password'), null], "Passwords didn't match")
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
            <div className='container signup'>
                <CardHeader className='text-center' title="Sign Up" />
            <div className='d-flex justify-content-center'>
            

          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    required
                    helperText={touched.name && errors.name}
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.name}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    required
                    helperText={touched.email && errors.email}
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    value={values.email}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

               
              
               
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    required
                    helperText={touched.password && errors.password}
                    label="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    fullWidth
                    required
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    label="Confirm Password"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.confirmPassword}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <Button
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained">
                Submit
              </Button>
            </CardActions>
          </form>
          </div>
          </div>
        )}
      </Formik>
    </Card>
        </>
    )
}
SignUp.propTypes = {
    className: PropTypes.string
  };


export default SignUp