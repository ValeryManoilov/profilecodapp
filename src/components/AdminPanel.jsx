import axios from "axios";
import { set } from "mobx";
import { useState, useEffect, useCallback } from "react";
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
    const [flag, setFlag] = useState(true)
    
    const RejectApp = useCallback((TelegramId) => 
        {
        axios.post("https://localhost:7062/admin/rejectapp", {
            telegramId: TelegramId
        },
        {
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        .then((res) => {
            setFlag(!flag)
            console.log(res)}
        )
        .catch((err) => console.log(err))
    }, [])

    const ApproveApp = useCallback((TelegramId) => 
    {
        axios.post("https://localhost:7062/admin/approveapp", {
            telegramId: TelegramId
        },
        {
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        .then((res) => {
            setFlag(!flag)
            console.log(res)
        })
    }, [])


    useEffect(() => {
        axios.get("https://localhost:7062/admin/getwaitapp")
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => console.log(err))
    }, [flag]);

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
                        <ApproveButton onClick={() => ApproveApp(el.telegramId)}>
                            Добавить
                        </ApproveButton>
                        <RejectButton onClick={() => RejectApp(el.telegramId)}>
                            Отклонить
                        </RejectButton>
                    </ApplicationContainer>
                ))
            }
        </AdminPanelContainer>
    )
}

export default AdminPanel;