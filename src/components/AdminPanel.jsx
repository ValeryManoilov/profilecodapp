import axios from "axios";
import { set } from "mobx";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

export const AdminPanelContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
`

export const AdminPanelContent = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
`
 
export const AdminPanelTitle = styled.h1`
    padding: 0;
    margin: 0;
`

export const ApplicationContainer = styled.div`
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    border: 2px solid #2384E3;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 1em;
`

export const DataContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

export const DataText = styled.p`
    font-size: 1em;
`

export const Applications = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
    width: 90%;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 2em;
`

export const Button = styled.button`
    padding: 0.5em 1em;
    font-size: 1em;
    border: none;
    cursor: pointer;

    transition: all 0.5s;
    &:hover{
        background-color: #2384E3;
        color: #FFFFFF;
    }

    border-radius: 1em;
`

export const ApproveButton = styled(Button)`
    background-color: #17be17;

    
`

export const RejectButton = styled(Button)`
    background-color: #dd3939;
`

export const Title = styled.h1`
    margin: 0;
    padding: 0;
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
            <AdminPanelContent>
                <Title>
                    Панель администратора
                </Title>
                <ApplicationTitle>
                    Заявки на добавление
                </ApplicationTitle>
                <Applications>
                    {
                        users.map((el) => (
                            <ApplicationContainer>
                                <DataContainer>
                                    <DataText>Username: {el.username}</DataText>
                                    <DataText>Email: {el.email}</DataText>
                                    <DataText>Group: {el.group}</DataText>
                                    <DataText>Description: {el.description}</DataText>
                                    <DataText>About Me: {el.aboutMe}</DataText>
                                    <DataText>Course: {el.course}</DataText>
                                </DataContainer>
                                <ButtonsContainer>
                                    <ApproveButton onClick={() => ApproveApp(el.telegramId)}>
                                        Добавить
                                    </ApproveButton>
                                    <RejectButton onClick={() => RejectApp(el.telegramId)}>
                                        Отклонить
                                    </RejectButton>
                                </ButtonsContainer>
                            </ApplicationContainer>
                        ))
                    }
                </Applications>
            </AdminPanelContent>
        </AdminPanelContainer>
    )
}

export default AdminPanel;