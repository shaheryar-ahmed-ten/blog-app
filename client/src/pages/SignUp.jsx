
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Alert } from "flowbite-react";

export default function SignUp() {

  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState('')
  const navigate = useNavigate()
  function handleChange(e){
    setFormData({...formData,[e.target.id]:e.target.value})
    console.log(formData)
  }

  async function handleSubmit(e){
    e.preventDefault();

    const res = await fetch("blog-app-server-roan.vercel.app/api/auth/sign-up",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'POST',
      body:JSON.stringify(formData)
    })
    console.log("res.status",res.status)

    const data = await res.json()
    console.log("data",data)
    if(res.status == 200){
      navigate("/")
    }else{
      setErrorMessage(data.message)
    }
    console.log("res",res)

  }

  return (
    <div className="flex justify-center items-center">

    <form className="flex max-w-md flex-col gap-4 w-96 mt-10" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your username" />
        </div>
        <TextInput id="username" type="text" placeholder="xyz" required shadow onChange={handleChange}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email"/>
        </div>
        <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow  onChange={handleChange}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" type="password" required shadow  onChange={handleChange}/>
      </div>
      <Button type="submit">Register new account</Button>
      <div className="mb-2 block">
        Do you already have an account? <Link to='/sign-in' ><span className="text-blue-500 underline">Sign In</span></Link>
      </div>
      {errorMessage && (
        <Alert color="failure">
        <span className="font-medium">Info alert!</span>{errorMessage}
      </Alert>
      )}
    </form>
    </div>

  );
}
