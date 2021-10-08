
import { DynamoDbRegisterationRepo } from "../infrastructure/dynomadb/DynamoDbRegisterationRepo";
import { RegisterationDTO } from "./RegisterationDTO";
import { RegisterationModel } from "./RegisterationModel";
import { RegisterationRepo } from "./RegisterationRepo";

export class RegisterationService {
    repo: RegisterationRepo = new DynamoDbRegisterationRepo()
    public async listById(userId: string): Promise<Array<RegisterationModel>> {
        return this.repo.getListByUserId(userId);
    }

    public async registerCourse(registeration: RegisterationDTO): Promise<RegisterationModel> {
        return this.repo.createRegister(registeration);
    }
}