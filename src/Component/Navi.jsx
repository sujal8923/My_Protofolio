import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Navi() {
  return (
    <Navbar className="text-neutral-300 ">
    <Container className='text-neutral-300' >
      <Navbar.Brand href="#home" className='text-white  font-bold font-sans  ' style={{fontSize:"50px"}}>Ֆ</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='text-neutral-300 flex gap-3 fs-5'>
          <a href="https://www.linkedin.com/in/sujal-saxena-384701288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-white'>
          <FaLinkedinIn/>

          </a>
          <a href="https://github.com/sujal8923" className='text-white'>
          <FaGithub/>

          </a>

        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navi