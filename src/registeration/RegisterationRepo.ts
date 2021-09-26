import { RegisterationModel } from "./RegisterationModel";

export interface RegisterationRepo {
    getListByUserId(userId: string): Promise<Array<RegisterationModel>>;

    createRegister(registerationModel: RegisterationModel): Promise<RegisterationModel>;
};