import { Schema } from "mongoose";


export const MissionSchema = new Schema(
    {

        codename: { type: String, required: true },
        objective: { type: String, required: true },
        year: { type: String, required: true },

        locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
        ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },

        completed: { type: Boolean, default: false, required: true }, //yes, keep this on schema even though not in data, later I will come up with way to mark complete when rat has finished the mission 
    },

    {
        toJSON: { virtuals: true }


    }


)

MissionSchema.virtual('location', {

    localField: 'locationId',
    foreignField: '_id',
    ref: 'Location',
    justOne: true



})

MissionSchema.virtual('rat', {

    localField: 'ratId',
    foreignField: '_id',
    ref: 'Rat',
    justOne: true


})







//Back from lunch: 
// Complete Schema, register in DB Context, is a collection added in Mongo DB? If so, under what database?

// How do I type an array of strings again? Didn't see anything in reference? 
// Complete Schemas, register in DB context

