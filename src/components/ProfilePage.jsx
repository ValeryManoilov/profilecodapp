import userStore from "../stores/UserStore"
import { useEffect } from "react";
import axios from "axios";


function ProfilePage()
{
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            
            tg.ready();
            tg.expand();

            if (tg.initDataUnsafe?.user) {
                const user = tg.initDataUnsafe.user;
                axios.get("https://localhost:7062/user/getbyid", {
                    params:
                    {
                        telegramId: user.id
                    },
                    headers: 
                    {
                        "Content-type": "application/json"
                    }
                })
                .then((res) => {
                    userStore.set(res.data)
                    navigate("/profile")
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                console.error('User data not available');
            }
        }
        else {
            console.error('Telegram WebApp not detected');
        }

    }, [])

    const user = userStore.get();

    console.log(user)

    return(
        <>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.aboutMe}</p>
            <p>{user.description}</p>
            <p>{user.courseNumber}</p>
            <p>{user.group}</p>
            <p>{user.telegramId}</p>
        </>
    )
}

export default ProfilePage