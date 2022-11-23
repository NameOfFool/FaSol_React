import { IArtist } from "./IArtist";

export interface ITrack {
    id: number;
    name: string;
    duration: string;
    artist: IArtist;
}