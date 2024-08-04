import React from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
      <Navbar.Toggle />

      <Link to='/'>
        <span>Shaheryar's</span> Blog
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
        <Button className='lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        
      </div>
      
    </Navbar>
  )
}

