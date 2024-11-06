import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import loadingGif from "../assets/Images/loading.gif"

const MainContainer = styled.div`
background: "none";
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
backdrop-filter: blur(3px);
display:flex;
align-items: center;
justify-content: center;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;



width: 45vw;
height:65vh;
display: flex;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-right: 2px solid ${props => props.theme.text};
    border-top:2px solid ${props => props.theme.text};
    border-bottom:2px solid ${props => props.theme.text};
background:rgb(251, 246, 244);
z-index:5;

`

const FormOuter = styled.div`
height:100%;
width:100%;
display: grid;
grid-template-columns: 50% 50%;


`

const Form = styled(motion.div)`
height:100%;
width:100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

`

const InnerBox = styled(motion.div)`

width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
transition: height 0.5s ease, width 1s ease 0.5s;

margin-top:-2px;
border-left: 2px solid ${props => props.theme.body};
border-top: 2px solid ${props => props.theme.body};
border-bottom: 2px solid ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
background: #006ea9;
height:100%;
width:100%;

`

const Text = styled.div`
color: ${props => props.theme.body};
font-size: 3.5vh;
`

const FormBody = styled.div`
display:flex;
justify-content:space-evenly;
flex-direction: column;
height:80%;
width:80%

`

const FormFooter = styled.div`

`

const CloseButton = styled(motion.h3)`
cursor:pointer;
position:absolute;
right: 1.5rem;
z-index:4;
top: 1rem;
`

const Submit = styled.h2`
display: inline-block;
cursor: pointer;
z-index: 1;
transform: scale(1);
bottom:2rem;
transition: transform 0.5s ease-in-out;
&::after {
  content: '';
  position: absolute;
  height: 3px;
  left: 0;
  bottom: 0;
  width: 0;
  background: #006ea9;
  transition: width 0.2s;
}
&:hover::after {
  background-color: #006ea9;
  width: 100%;
}
&:hover {
  transform: scale(1.2);
}
&:active { 
  transform: scale(1.0); 
}
`

const LoadingIcon = styled.img`
position:sticky;
z-index:6;
transform: scale(0.5);

`

const Close = styled.h3`
display: inline-block;
cursor: pointer;
z-index: 1;
transform: scale(1);
margin-bottom: 0.8em;
margin-right:0.8em;
transition: transform 0.5s ease-in-out;
&::after {
  content: '';
  position: absolute;
  height: 3px;
  left: 0;
  bottom: 0;
  width: 0;
  background: #006ea9;
  transition: width 0.2s;
}
&:hover::after {
  background-color: #006ea9;
  width: 100%;
}
&:hover {
  transform: scale(1.2);
}
&:active { 
  transform: scale(1.0); 
}
`

const Contact = (props) => {
  localStorage.setItem('formSubmitted', false)

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [open, setOpen] = React.useState(false);
  
  const handleCloseForm = () => {
    props.closeForm()
  }

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    handleCloseForm()
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (formData.phone) {
      if(!/^\d{10}$/.test(formData.phone)){
        formErrors.phone = "Phone number must be 10 digits.";
        isValid = false;
      }
    }

    setErrors(formErrors);
    return isValid;
  };

  const sendEmail = async (e) => {

    const serviceId = "service_84d6g7j"
    const templateId = "template_vtig6qt"
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        message: formData.message
      });

      handleClickToOpen()
    } catch (error) {
      console.log(error);
    } finally {

      setLoading(false);
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      sendEmail()
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      console.log("Form validation failed");
    }
  };


  return (
    <MainContainer>
      {loading?<LoadingIcon src={loadingGif} alt="Loading..."/>:null}
      <Box
        key="mainBox"
        initial={{ height: 0 }}
        animate={{ height: '55vh' }}
        exit={{ height: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 0 }}

      >
        <CloseButton
          key="closeButton"
          onClick={handleCloseForm}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          x
        </CloseButton>
        <FormOuter>
          <InnerBox
            key="innerBox1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}

          >
            <Text>
              <h3>Lets connect!</h3>
            </Text>

          </InnerBox>
          <Form
            key="innerBox2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FormBody>
              <TextField
                name="name"
                id="standard-basic"
                label="Name"
                variant="standard"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                name="email"
                id="standard-basic"
                label="Email-Id"
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                name="phone"
                id="standard-basic"
                label="Contact number"
                variant="standard"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                name="message"
                id="standard-basic"
                label="Message"
                multiline
                maxRows={4}
                variant="standard"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                placeholder="Hi! Lets connect."
              />
            </FormBody>
            <FormFooter>
              <Submit
                onClick={onFormSubmit}
                aria-disabled={Object.values(errors).some((error) => error)}
              >
                Submit
              </Submit>
            </FormFooter>
          </Form>
        </FormOuter>
      </Box>

      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Thank You!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I will get back to you as soon as possible!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Close
            onClick={handleToClose}
          >
            Close
          </Close>
        </DialogActions>
      </Dialog>

    </MainContainer>


  );
};

export default Contact;
