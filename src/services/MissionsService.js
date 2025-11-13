import { dbContext } from "../db/DbContext.js"


class MissionsService {

    async getAllMissions() {
        const missions = await dbContext.Missions.find()

            .populate('rat', '-name -picture')
            .populate('location')



        return missions


    }

    async createMission(missionData) {
        const mission = await dbContext.Missions.create(missionData)

        await mission.populate('rat', 'callsign')
        await mission.populate('location')

        return mission


    }

    //When I get back: Need to import Postman tests again for new Post request in postman.
    // When the data type is ObjectId, I do not type anything in!! Just leave it!


}

export const missionsService = new MissionsService()