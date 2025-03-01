import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik"

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

    const [username, setName] = useState("test")
    
    
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp)
        {
            let tg = window.Telegram.WebApp;
            console.log(tg)
            const user = tg.initDataUnsafe.user;
            tg.expand();
            if (user)
            {
                setName(user.id)
            }
        }
    }, [])

    function AddUser(values)
    {
        axios.post("https://localhost:7062/user/add", 
            {
                userName: values.username,
                email: values.email,
                password: values.password,
                description: values.description,
                aboutMe: values.aboutme,
                group: values.group,
                rating: values.rating,
            },
            {
                headers: {
                    "Content-Type":"application/json"
                }
            }
        )
        .then((res) => console.log(res.data))
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
            rating: '',
        },
        validationSchema: validScheme,
        onSubmit: (values) => {AddUser(values)}
    })
    return(
        <RegistrationContainer>
            <RegistrationContent>
                <p>{username}</p>
                {/* <Title>
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
                    <InputText>Rating</InputText>
                    <Input 
                        placeholder="rating"
                        id="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
                </InputContainer> */}
            </RegistrationContent>
        </RegistrationContainer>
    )
}

export default HelloPage;