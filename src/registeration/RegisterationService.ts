
import { DynamoDbRegisterationRepo } from "../infrastructure/dynomadb/DynamoDbRegisterationRepo";
import { RegisterationDTO } from "./RegisterationDTO";
import { RegisterationModel } from "./RegisterationModel";
import { RegisterationRepo } from "./RegisterationRepo";

export class RegisterationService {
    private repo: RegisterationRepo;
    constructor(repo: RegisterationRepo) {
        this.repo = repo;
    }

    public async listById(userId: string): Promise<Array<RegisterationModel>> {
        return this.repo.getListByUserId(userId);
    }

    public async registerCourse(registeration: RegisterationDTO): Promise<RegisterationModel> {
        return this.repo.createRegister(registeration);
    }
}