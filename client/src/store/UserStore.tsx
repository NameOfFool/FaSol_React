import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class UserStore {
    user = {} as IUser
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
            document.location = "/";
        } catch (e) {
            console.log(e)
        }
    }

    async registration(email: string, password: string, login: string) {
        console.log(password)
        try {

            const response = await AuthService.registration(email, password, login);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
            document.location = "/"
            alert("Зайдите на почту и подтвердите её")
        } catch (e) {
            console.log(e)
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            console.log(this);
            localStorage.removeItem('token');
            this.setUser({} as IUser);
            this.setAuth(false);
            document.location = "/";
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:5000/api/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
}