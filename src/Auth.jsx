import React, { useState } from "react";
import { signUpUser, signInUser, signOutUser } from "../UserAuth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await signInUser(email, password);
                alert("Signed in successfully!");
            } else {
                await signUpUser(email, password, username);
                alert("Account created successfully!");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                )}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}
            </button>
            <button onClick={signOutUser}>Sign Out</button>
        </div>
    );
};

export default Auth;
