const ApiError = require("../exceptions/api_errors")
const TrackService = require("../service/trackSerivce")
class TrackController {
    async getAll(req, res, next) {
        try {
            const tracks = await TrackService.getAll();
            return res.json(tracks)
        }
        catch (e) {
            next(e)
        }
    }
}
module.exports = new TrackController();