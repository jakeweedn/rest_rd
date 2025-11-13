import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {

    constructor() {
        super('api/rats')
        this.router
            .get('', this.getAllRats)
            .get('/:ratId/missions', this.getMissionsForOneRat)

    }

    async getAllRats(request, response, next) {

        try {
            const rats = await ratsService.getAllRats()
            console.log('Getting all houses') //have to respin server to get these to show up... 

            response.send(rats)




        }

        catch (error) {
            next(error)

        }

    }

    async getMissionsForOneRat(request, response, next) {


        try {
            const ratId = request.params.ratId
            const missions = await missionsService.getMissionsByRatId(ratId)
            response.send(missions)


        }

        catch (error) {
            next(error)



        }
    }

}