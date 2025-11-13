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

    async updateMission(missionId) {

        const missionToUpdate = await dbContext.Missions.findById(missionId)

        if (!missionToUpdate) {

            throw new Error("There is no mission there. Bad id")
        }

        missionToUpdate.completed = true

        await missionToUpdate.save()

        return missionToUpdate

        //Note: Leave the missionId parameter in the request. I know it seems weird, but I am not the one selecting which specific mission to update to completed, that's Boise Codeworks's job. 

        // Note: I decided to write this in short hand without a missionData parameter It still worked. The drawback is that I cannot change it back to false in postman. But this isn't a huge issue in this case because once a misison is completed, it's completed! It can't become incomplete. 


    }

    async getMissionsByRatId(ratId) {

        const missions = await dbContext.Missions.find({ ratId: ratId })

            .populate('location')


        return missions

    }

}

export const missionsService = new MissionsService()