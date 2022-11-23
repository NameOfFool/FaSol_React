const { TrackModel, ArtistModel } = require("../models/models")
const TrackDto = require("../dtos/trackDto")
class TrackService {
    async getAll() {

        const tracks = await TrackModel.findAll({ include: ArtistModel, raw: true, nest: true });
        let tracksDto = [];
        tracks.every((track) => {
            console.log(track.artist)
            const trackDto = new TrackDto(track)
            tracksDto.push(trackDto);
        })

        return tracksDto;
    }
}
module.exports = new TrackService()