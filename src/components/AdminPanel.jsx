import axios from "axios";
import { useState } from "react";

function AdminPanel()
{
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("https://localhost:7062/admin/getall")
        .then((res) => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
            {
                users.map((el, id) => (
                    <div id={id}>{el.username}</div>
                ))
            }
        </>
    )
}

export default AdminPanel;