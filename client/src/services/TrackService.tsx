import $api from "../http";
import { AxiosResponse } from "axios"
import { TrackResponse } from "../models/response/TrackResponse";
export default class TrackService {
    static async getAll(): Promise<AxiosResponse<TrackResponse[]>> {
        return $api.get<TrackResponse[]>("/tracks");
    }
}