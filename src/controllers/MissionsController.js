import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class MissionsController extends BaseController {

    constructor() {
        super('api/missions')
        this.router
            .get('', this.getAllMissions)
            .post('', this.createMission)
            .put('/:missionId', this.updateMission)

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


    async createMission(request, response, next) {

        try {
            const missionData = request.body
            // const userInfo = request.userInfo

            // missionData.handlerId = userInfo.id

            const createdMission = await missionsService.createMission(missionData)

            response.send(createdMission)


        }

        catch (error) {
            next(error)
        }
    }

    async updateMission(request, response, next) {


        try {
            const missionId = request.params.missionId
            // const missionData = request.body

            const missionToUpdate = await missionsService.updateMission(missionId)

            response.send(missionToUpdate)


        }

        catch (error) {
            next(error)



        }
    }
}