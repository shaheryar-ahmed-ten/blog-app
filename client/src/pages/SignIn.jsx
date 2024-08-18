
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function SignIn() {

  const [formData,setFormData] = useState({})

  function handleChange(e){
    console.log(":- formData",formData)
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log("formData",formData);

    const res = await fetch("http://localhost:3000/api/auth/login",{
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
      <form className="flex max-w-md flex-col gap-4 w-96 mt-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@flowbite.com" required onChange={handleChange} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required onChange={handleChange}/>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
