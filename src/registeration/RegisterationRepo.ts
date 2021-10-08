import { RegisterationDTO } from "./RegisterationDTO";
import { RegisterationModel } from "./RegisterationModel";

export interface RegisterationRepo {
    getListByUserId(userId: string): Promise<Array<RegisterationModel>>;

    createRegister(registerationModel: RegisterationDTO): Promise<RegisterationModel>;
};