import axios from "axios";
import { useState } from "react"

export const Signin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSignin() {
        const res = await axios.post("http://localhost:8000/signin", { email, password }, { withCredentials: true })

        console.log(res.data);
        alert("signin successfully");
        window.location.href = "/users"

    }
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" /> <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" /> <br />

            <button onClick={handleSignin}>signin</button>
        </div>
    )
}