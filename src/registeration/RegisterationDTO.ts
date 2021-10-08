import { RegisterationModel } from "./RegisterationModel";

export interface RegisterationDTO extends Pick<RegisterationModel, "courses" | "frequency"> {
    userEmail: string,
    courseName: string
}