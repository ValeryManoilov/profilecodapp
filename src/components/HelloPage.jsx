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

export const AdminAuthorizeContainer = styled.div`
`


const validSchemeUser = Yup.object().shape({
    username: Yup.string().max(20, "Too large").min(4, "Too less"),
    email: Yup.string().max(20, "Too large").min(4, "Too less"),
    description: Yup.string().max(20, "Too large").min(4, "Too less"),
    aboutme: Yup.string().max(20, "Too large").min(4, "Too less"),
    group: Yup.string().max(20, "Too large").min(4, "Too less"),
    rating: Yup.string().max(20, "Too large").min(4, "Too less"),
})

const HelloPage = () => {

    const [telegramId, setId] = useState();
    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate();

    // function isAdminFunc(telegramId)
    // {
    //     axios.get("https://localhost:7062/user/isadmin", {
    //         params:
    //         {
    //             telegramId: user.id
    //         },
    //         headers: 
    //         {
    //             "Content-type": "application/json"
    //         }
    //     })
    //     .then((res) => {
    //         setIsAdmin(res.data)
    //     })
    // }

    useEffect(() => {
        
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            
            tg.ready();
            tg.expand();


            if (tg.initDataUnsafe?.user) {
                const user = tg.initDataUnsafe.user;

                setId(user.id)
                console.log(user.id)
                
                axios.get("https://localhost:7062/user/isadmin", {
                    params:
                    {
                        telegramId: telegramId
                    },
                    headers: 
                    {
                        "Content-type": "application/json"
                    }
                })
                .then((res) => {
                    setIsAdmin(res.data)
                })


                axios.get("https://localhost:7062/user/getbyid", {
                    params:
                    {
                        telegramId: telegramId
                    },
                    headers: 
                    {
                        "Content-type": "application/json"
                    }
                })
                .then((res) => {
                    if (!isAdmin)
                    {
                        userStore.set(res.data)
                        navigate("/profile")
                    }
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
        axios.post("https://localhost:7062/user/sendapp", 
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


    function AdminAuth(values)
    {
        axios.post("https://localhost:7062/user/adminauth", {
            userName: values.username,
            password: values.password 
        },
        {
            headers:
            {
                "Content-Type": "application/json"
            }
        }
    )
        .then((res) => 
        {
            console.log(res);
            navigate("/adminpanel")
        })
        .catch((err) => console.log(err));
    }


    const formikUser = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            description: '',
            aboutme: '',
            group: '',
            courseNumber: 0,
        },
        validationSchema: validSchemeUser,
        onSubmit: (values) => {AddUser(values)}
    })

    const formikAdmin = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {AdminAuth(values)}
    })

    return(
        <>
            {
                isAdmin
                ?
                <AdminAuthorizeContainer>
                    <form onSubmit={formikAdmin.handleSubmit}>
                        <InputText>Username</InputText>
                        <Input 
                            placeholder="username"
                            id="username"
                            value={formikAdmin.values.username}
                            onChange={formikAdmin.handleChange}/>
                        <InputText>Password</InputText>
                        <Input 
                            placeholder="password"
                            id="password"
                            value={formikAdmin.values.password}
                            onChange={formikAdmin.handleChange}
                        />
                        <button type="submit">auth</button>
                    </form>
                </AdminAuthorizeContainer> 
                :
                <RegistrationContainer>
                    <RegistrationContent>
                        <Title>
                            Application Form
                        </Title>
                        <InputContainer>
                            <form onSubmit={formikUser.handleSubmit}>
                                <InputText>Name</InputText>
                                <Input 
                                    placeholder="name"
                                    id="username"
                                    value={formikUser.values.username}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>Password</InputText>
                                <Input 
                                    placeholder="password"
                                    id="password"
                                    value={formikUser.values.password}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>Email</InputText>
                                <Input 
                                    placeholder="email"
                                    id="email"
                                    value={formikUser.values.email}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>Description</InputText>
                                <Input 
                                    placeholder="description"
                                    id="description"
                                    value={formikUser.values.description}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>AboutMe</InputText>
                                <Input 
                                    placeholder="about me"
                                    id="aboutme"
                                    value={formikUser.values.aboutme}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>Group</InputText>
                                <Input 
                                    placeholder="group"
                                    id="group"
                                    value={formikUser.values.group}
                                    onChange={formikUser.handleChange}
                                />
                                <InputText>CourseNumber</InputText>
                                <Input 
                                    placeholder="courseNumber"
                                    id="courseNumber"
                                    value={formikUser.values.courseNumber}
                                    onChange={formikUser.handleChange}
                                />
                                <button type="submit">submit</button>
                            </form>
                        </InputContainer>
                    </RegistrationContent>
                </RegistrationContainer>
            }
        </>
    )
}

export default HelloPage;