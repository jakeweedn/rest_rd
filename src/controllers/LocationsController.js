import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {

    constructor() {

        super('api/locations')
        this.router
            .get('', this.getAllLocations)
            .get('/:locationId/missions', this.getMissionsAtLocation)
    }

    async getAllLocations(request, response, next) {

        try {
            const locations = await locationsService.getAllLocations()
            console.log('Getting all locations')

            response.send(locations)

        }

        catch (error) {

            next(error)

        }




    }

    async getMissionsAtLocation(request, response, next) {

        try {
            const locationId = request.params.locationId
            const missions = await missionsService.getMissionsAtLocation(locationId)
            response.send(missions)


        }

        catch (error) {
            next(error)


        }

    }


}