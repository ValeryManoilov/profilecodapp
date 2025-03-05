import { makeAutoObservable } from "mobx"

class UserStore
{
    user = {
        telegramId: "",
        username: "",
        password: "",
        email: "",
        group: "",
        description: "",
        aboutMe: "",
        course: '',
    }

    constructor()
    {
        makeAutoObservable(this)
    }

    get()
    {
        return this.user
    }

    set(userdata)
    {
        this.user = {
            telegramId: userdata.telegramId,
            username: userdata.username,
            email: userdata.email,
            group: userdata.group,
            description: userdata.description,
            aboutMe: userdata.aboutMe,
            course: userdata.course,
        }
    }
}

const userStore = new UserStore()
export default userStore;