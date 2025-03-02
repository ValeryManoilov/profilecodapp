import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik"
import userStore from "../stores/UserStore";
import { useNavigate } from "react-router-dom";

export const RegistrationContainer = styled.div`

`

export const RegistrationContent = styled.div`
    
`

export const Title = styled.h1`
    
`

export const InputContainer = styled.div`
    
`

export const InputText = styled.h2`
    
`

export const Input = styled.input`
    
`   
const validScheme = Yup.object().shape({
    username: Yup.string().max(20, "Too large").min(4, "Too less"),
    password: Yup.string().max(20, "Too large").min(4, "Too less"),
    email: Yup.string().max(20, "Too large").min(4, "Too less"),
    description: Yup.string().max(20, "Too large").min(4, "Too less"),
    aboutme: Yup.string().max(20, "Too large").min(4, "Too less"),
    group: Yup.string().max(20, "Too large").min(4, "Too less"),
    rating: Yup.string().max(20, "Too large").min(4, "Too less"),
})

const HelloPage = () => {

    const navigate = useNavigate();

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


    function AddUser(values)
    {
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        console.log(user.id)
        axios.post("https://localhost:7062/user/add", 
            {
                telegramId: String(user.id),
                userName: values.username,
                email: values.email,
                password: values.password,
                description: values.description,
                aboutMe: values.aboutme,
                group: values.group,
                courseNumber: values.courseNumber,
            },
            {
                headers: {
                    "Content-Type":"application/json"
                }
            }
        )
        .then((res) => 
        {
            userStore.set(res.data)
            console.log(res.data)
            navigate("/profile")
        })
        .catch((err) => console.log(err))
    };


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            description: '',
            aboutme: '',
            group: '',
            courseNumber: 0,
        },
        validationSchema: validScheme,
        onSubmit: (values) => {AddUser(values)}
    })
    return(
        <RegistrationContainer>
            <RegistrationContent>
                <Title>
                    RegistrationForm
                </Title>
                <InputContainer>
                <form onSubmit={formik.handleSubmit}>
                    <InputText>Name</InputText>
                    <Input 
                        placeholder="name"
                        id="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    <InputText>Password</InputText>
                    <Input 
                        placeholder="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <InputText>Email</InputText>
                    <Input 
                        placeholder="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <InputText>Description</InputText>
                    <Input 
                        placeholder="description"
                        id="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    <InputText>AboutMe</InputText>
                    <Input 
                        placeholder="about me"
                        id="aboutme"
                        value={formik.values.aboutme}
                        onChange={formik.handleChange}
                    />
                    <InputText>Group</InputText>
                    <Input 
                        placeholder="group"
                        id="group"
                        value={formik.values.group}
                        onChange={formik.handleChange}
                    />
                    <InputText>CourseNumber</InputText>
                    <Input 
                        placeholder="courseNumber"
                        id="courseNumber"
                        value={formik.values.courseNumber}
                        onChange={formik.handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
                </InputContainer>
            </RegistrationContent>
        </RegistrationContainer>
    )
}

export default HelloPage;