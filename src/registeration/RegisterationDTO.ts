import { RegisterationModel } from "./RegisterationModel";

export interface RegisterationDTO extends Pick<RegisterationModel, "kidName" | "courses" | "frequency"> {
    userEmail: string,
    courseName: string
}