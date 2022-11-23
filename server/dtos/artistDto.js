module.exports = class ArtistDto {
    id;
    name;
    constructor(model) {
        this.id = model.id;
        this.name = model.name;
    }
}