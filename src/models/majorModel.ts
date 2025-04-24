import { model, Schema } from "mongoose";
import { Major } from "../types/types";

///Model for Major based on type Major (TS + Mongoose)

const majorSchema = new Schema<Major>({
    uni_id: { type: String, require: true },
    major: { type: String, require: true },
    degree: { type: String, require: true },
    duration: { type: String, require: true },
    credits: { type: String, require: true },
    applicationPeriod: { type: String, require: true },
    language: { type: String, require: true },
    studyField: { type: String, require: true },
    tuition: { type: String, require: true },
    description: { type: String, require: true },
    website: { type: String, require: true }
});

const Majors = model<Major>('majors', majorSchema);

export default Majors;