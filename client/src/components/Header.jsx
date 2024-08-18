import React from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {
  const navigate = useNavigate()
  function navigateToSignIn(){
    navigate("sign-in")
  }
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
      <Navbar.Toggle />

      <Link to='/'>
        <span
          className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'
        >Shaheryar's</span> Blog
      </Link>

      <Navbar.Collapse>
        <Navbar.Link active={path === '/'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>

      <div className='flex'>
        <Button className='mr-2' color='gray' pill>
          <FaMoon />
        </Button>
        <TextInput
            className='hidden lg:inline'
            name='seach'
            placeholder='Search ...'
            rightIcon={AiOutlineSearch}
            color='gray'
          />
        <Button className='lg:hidden mr-2' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <Button className='ml-2' color='gray' onClick={navigateToSignIn}>
          Sign In
        </Button>
        
      </div>
      
    </Navbar>
  )
}

