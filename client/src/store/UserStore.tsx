import {makeAutoObservable} from "mobx";
import {IUser} from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

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
        } catch (e) {
            console.log(e)
        }
    }

    async registration(email: string, password: string) {
        console.log(password)
        try {

            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false)
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:5000/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
}