import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {

    constructor() {
        super('api/missions')
        this.router
            .get('', this.getAllMissions)

    }

    async getAllMissions(request, response, next) {


        try {
            const missions = await missionsService.getAllMissions()
            console.log('Getting all missions')

            response.send(missions)


        }
        catch (error) {
            next(error)

        }
    }
}