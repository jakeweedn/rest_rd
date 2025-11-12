import { dbContext } from "../db/DbContext.js"


class RatsService {

    async getAllRats() {
        const rats = await dbContext.Rats.find()
        return rats


    }


}

export const ratsService = new RatsService()