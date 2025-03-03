import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const AdminPanelContainer = styled.div`
    
`

export const AdminPanelTitle = styled.h1`
    
`

export const ApplicationContainer = styled.div`
    
`

export const Application = styled.div`
    
`

export const Button = styled.button`
`

export const ApproveButton = styled(Button)`
`
export const RejectButton = styled(Button)`
`

export const Title = styled.h1`
`

export const ApplicationTitle = styled.h2`
`


function AdminPanel()
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7062/admin/getwaitapp")
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => console.log(err))
    }, []);

    function RejectApp(telegramId)
    {
        console.log(telegramId)
        axios.post("https://localhost:7062/admin/rejectapp", {
            telegramId: String(telegramId)
        },
        {
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        .then((res) => console.log(res))
    }

    function ApproveApp(telegramId)
    {
        console.log(telegramId)
        axios.post("https://localhost:7062/admin/approveapp", {
            telegramId: String(telegramId)
        },
        {
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        .then((res) => console.log(res))
    }

    return(
        <AdminPanelContainer>
            <Title>
                Панель администратора
            </Title>
            <ApplicationTitle>
                Заявки на добавление
            </ApplicationTitle>
            {
                users.map((el) => (
                    <ApplicationContainer id={el.telegramId}>
                        {el.userName}
                        <ApproveButton onClick={() => ApproveApp(el.telegramId)}/>
                        <RejectButton onClick={() => RejectApp(el.telegramId)}/>
                    </ApplicationContainer>
                ))
            }
        </AdminPanelContainer>
    )
}

export default AdminPanel;