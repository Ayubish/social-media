'use client'
import { useState } from "react";

const CreatePost = ()=> {
  const [content, setContent] = useState("");

  async function handleCreatePost(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/create`, {
      method: 'POST', 
      body: JSON.stringify({content}),
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'include', 
    });
    const data = await res.json();

     if(!res.ok) {
      alert(`Error: ${data.error}`);
     } else {
          alert("Posted Succesfully!");
      }
     
  }
  
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePost} className="flex flex-col">
        <textarea placeholder="What is on your mind" value={content} onChange={(e)=>setContent(e.target.value)} className="bg-slate-200 w-[90%] h-52 outline-none border rounded-md py-3 px-2 mx-5"/>
        <button type="submit" className="bg-blue-500 text-white px-5 rounded-full self-end">Post</button>
      </form>
      <h1>{content}</h1>
    </div>
  );
}


export default CreatePost;