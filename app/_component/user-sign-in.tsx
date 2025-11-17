"use client"

import { authClient } from "@/app/lib/auth-client";
import { useState, FormEvent } from "react";

export default function UserSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        
        const { data, error } = await authClient.signUp.email({
            email, // now these variables exist in scope
            password,
            name,
            // image is optional, so you can omit it
            callbackURL: "/dashboard"
        }, {
            onRequest: (ctx) => {
                setIsLoading(true);
            },
            onSuccess: (ctx) => {
                setIsLoading(false);
                // redirect to dashboard
                window.location.href = "/dashboard";
            },
            onError: (ctx) => {
                setIsLoading(false);
                alert(ctx.error.message);
            },
        });
    };

    return (
        <form onSubmit={handleSignUp} 
        className="space-y-4 border p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 flex-y-4 ">
            <div  className="space-x-4 flex">
                <label htmlFor="name">Name</label>
                <input
                    className="border"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            
            <div  className="space-x-4  ">
                <label htmlFor="email">Email</label>
                <input
                    className="border"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            
            <div  className="space-x-4  ">
                <label htmlFor="password">Password</label>
                <input
                    className="border"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                />
            </div>
            
            <button type="submit" disabled={isLoading} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50">
                {isLoading ? "Signing up..." : "Sign Up"}
            </button>
        </form>
    );
}