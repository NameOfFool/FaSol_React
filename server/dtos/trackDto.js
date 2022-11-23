const ArtistDto = require("./artistDto")
module.exports = class TrackDto {
    id;
    name;
    duration;
    artist;
    constructor(model) {
        this.id = model.id
        this.name = model.name
        this.duration = model.duration
        this.artist = new ArtistDto(model.artist)
    }
}