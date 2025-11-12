import { dbContext } from "../db/DbContext.js"


class LocationsService {


    async getAllLocations() {
        const locations = await dbContext.Locations.find()
        return locations

    }
}

export const locationsService = new LocationsService()