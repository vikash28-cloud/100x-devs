import axios from "axios"

export const Logout=()=>{
async function handleLogout(){
    await axios.get('http://localhost:8000/logout',{withCredentials:true})
    window.location.href="/"
}
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}