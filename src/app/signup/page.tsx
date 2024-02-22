"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {
        console.log("Signup success",user)
    }

    return (
        <div className='flex flex-col'>
            <h1>Sign Up</h1>
            <div className='p-4 mt-4'>
                <hr />
                <label htmlFor='username'>username</label>
                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='username'
                    className='p-4 text-black'
                />
            </div>

            <div className='p-4 mt-4'>
                <hr />
                <label htmlFor='email'>email</label>
                <input
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder='email'
                    className='p-4 text-black'
                />
            </div>

            <div className='p-4 mt-4'>
                <hr />
                <label htmlFor='password'>email</label>
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='password'
                    className='p-4 text-black'
                />
            </div>

            <button onClick={onSignup}>
                Signup
            </button>
        </div>
    )
}

