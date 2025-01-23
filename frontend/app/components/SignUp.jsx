import React, { use, useState } from 'react'
 
export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState("no err")
  //const [formData, setFormData] = useState({username: "dsafad", email: "jdsnd@gmail.com", password: "hdgbhd"});

  /////dfsojkfg//
  const handleSubmit = async(e) =>{
    try{
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },  // body data type must match "Content-Type" header
            body: JSON.stringify({username: 'Johno', email: "yeheohn@gmail.com", password: "john12334"}),
        });
            const data = await res.json();
            console.log(data)
    } catch (error) {
        console.error('Error:', error);
    }
}
////////
 
  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      })
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }
 
  return (
    <div>

    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="username"/>
      <input type="email" name="email" placeholder="email"/>
      <input type="text" name="password" placeholder="password"/>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
    <button onClick={handleSubmit}>Send itttttt</button>
    </div>
  )
}