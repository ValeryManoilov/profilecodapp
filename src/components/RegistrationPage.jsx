import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik"
import userStore from "../stores/UserStore";
import { useNavigate } from "react-router-dom";
import eight from "../assets/8.jpg"

export const RegistrationContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    @media (max-width: 768px){
        width: 100%;
        background-color: #2384E3;
    }
    @media (max-width: 1024px){
        width: 80%;
    }
`

export const RegistrationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-color: #FFFFFF;
    gap: 1em;
`

export const Title = styled.h1`
    padding: 0;
    margin: 0;
`

export const Description = styled.p`
    padding: 0;
    margin: 0;
    color: black;
    opacity: 0.7;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const UserForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
`

export const InputItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const InputText = styled.h2`
    padding: 0;
    margin: 0;
`

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #2384E3;
    padding: 0.5em;
    width: 100%;
    font-size: 1.25em;
`

export const AdminAuthorizeContainer = styled.div`
`

export const SendAppButton = styled.button`
    padding: 0.5em 1em;
    font-size: 1em;
    box-sizing: border-box;
    flex-grow: 0;
    border: 1px solid #2384E3;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 1em;
    background-color: #FFFFFF;

    &:hover{
        background-color: #2384E3;
        color: #FFFFFF;
    }
`


const validSchemeUser = Yup.object().shape({
    username: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
    email: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
    description: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
    aboutme: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
    group: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
    rating: Yup.string().max(20, "Too large").min(4, "Too less").required("Поле обязательно!"),
})

const RegistrationPage = () => {

    const [telegramId, setId] = useState();
    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (window.Telegram?.WebApp) {
                const tg = window.Telegram.WebApp;
                
                tg.ready();
                tg.expand();
    
    
                if (tg.initDataUnsafe?.user) {
                    const user = tg.initDataUnsafe.user;
    
                    setId(user.id)
                    
                    var response = await axios.get("https://localhost:7062/user/isadmin", {
                        params: { telegramId: user.id }
                    })

                    setIsAdmin(response.data)

                    if (!response.data)
                    {
                        await axios.get("https://localhost:7062/user/getappbyid", {
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
                            switch(res.data.approveStady)
                            {
                                case("Wait"):
                                    navigate("/waitapp");
                                    break;
                                case("Reject"):
                                    navigate("/rejectapp");
                                    break;
                                case("Approve"):
                                    userStore.set(res.data);
                                    navigate("/profile");
                                    break;
                                default:
                                    break;
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    }
                }
                else {
                    console.error('User data not available');
                }
            }
            else {
                console.error('Telegram WebApp not detected');
            }
        }

        fetchData()
    }, [])


    function AddUser(values)
    {
        axios.post("https://localhost:7062/user/sendapp", 
            {
                userName: values.username,
                email: values.email,
                password: values.password,
                course: values.course,
                group: values.group,
                telegramId: telegramId,
                aboutMe: values.aboutme,
                description: values.description,
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
            course: '',
        },
        validationSchema: validSchemeUser,
        onSubmit: (values) => {
            AddUser(values)
        }
    })

    const formikAdmin = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            AdminAuth(values)
        }
    })

    return(
        <>
            {
                isAdmin
                ?
                <RegistrationContainer>
                    <Title>Вход в админ-панель</Title>
                    <form onSubmit={formikAdmin.handleSubmit}>
                        <InputText>Логин</InputText>
                        <Input 
                            placeholder="username"
                            id="username"
                            value={formikAdmin.values.username}
                            onChange={formikAdmin.handleChange}/>
                        <InputText>Пароль</InputText>
                        <Input 
                            placeholder="password"
                            id="password"
                            value={formikAdmin.values.password}
                            onChange={formikAdmin.handleChange}
                        />
                        <button type="submit">auth</button>
                    </form>
                </RegistrationContainer> 
                :
                <RegistrationContainer>
                    <RegistrationContent>
                        <Title>
                            Форма заявки
                        </Title>
                        <Description>
                            Вступайте в нашу команду! Заполните форму и ожидайте ее одобрения 
                        </Description>
                        <InputContainer>
                            <UserForm onSubmit={formikUser.handleSubmit}>
                                <InputItems>
                                    <InputText>Логин</InputText>
                                    <Input 
                                        placeholder="Логин"
                                        id="username"
                                        value={formikUser.values.username}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.username && formikUser.touched.username 
                                    && (<div>{formikUser.errors.username}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Пароль</InputText>
                                    <Input 
                                        placeholder="Пароль"
                                        id="password"
                                        value={formikUser.values.password}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.password && formikUser.touched.password 
                                    && (<div>{formikUser.errors.password}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Почта</InputText>
                                    <Input 
                                        placeholder="Почта"
                                        id="email"
                                        value={formikUser.values.email}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.email && formikUser.touched.email 
                                    && (<div>{formikUser.errors.email}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Краткое описание</InputText>
                                    <Input 
                                        placeholder="Краткое описание"
                                        id="description"
                                        value={formikUser.values.description}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.description && formikUser.touched.description 
                                    && (<div>{formikUser.errors.description}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Подробное описание</InputText>
                                    <Input 
                                        placeholder="Подробное описание"
                                        id="aboutme"
                                        value={formikUser.values.aboutme}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.aboutme && formikUser.touched.aboutme 
                                    && (<div>{formikUser.errors.aboutme}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Группа</InputText>
                                    <Input 
                                        placeholder="Группа"
                                        id="group"
                                        value={formikUser.values.group}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.group && formikUser.touched.group 
                                    && (<div>{formikUser.errors.group}</div>)}
                                </InputItems>
                                <InputItems>
                                    <InputText>Номер курса</InputText>
                                    <Input 
                                        placeholder="Номер курса"
                                        id="course"
                                        value={formikUser.values.course}
                                        onChange={formikUser.handleChange}
                                    />
                                    {formikUser.errors.course && formikUser.touched.course 
                                    && (<div>{formikUser.errors.course}</div>)}
                                </InputItems>
                                <SendAppButton type="submit">Создать</SendAppButton>
                            </UserForm>
                        </InputContainer>
                    </RegistrationContent>
                </RegistrationContainer>
            }
        </>
    )
}

export default RegistrationPage;