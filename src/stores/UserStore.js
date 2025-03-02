import { makeAutoObservable } from "mobx"

class UserStore
{
    user = {
        telegramId: "",
        username: "",
        email: "",
        group: "",
        description: "",
        aboutMe: "",
        courseNumber: 0,
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
            courseNumber: userdata.courseNumber,
        }
    }
}

const userStore = new UserStore()
export default userStore;