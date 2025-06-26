
"use client" // client side component

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Signup() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

  return (
    
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <input
          className="bg-white text-slate-950 p-1 m-2"
          type="text"
          placeholder="username"
          onChange={(e) => {
                setUsername(e.target.value)
          }}
        />
        <input
          className="bg-white text-slate-950 p-1 m-2"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value)
        }}
        />

        <button className="bg-blue-500 text-white p-2 m-2 rounded-md px-7" onClick={() => {
            axios.post('http://localhost:3000/api/v1/signup', {
                username, 
                password
            })

            // after sign up, go to signin page
            // router from next/navigation
            router.push("/signin")
        }}>
          Sign Up
        </button>
      </div>
    
  )
}
