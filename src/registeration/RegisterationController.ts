import { Body, Controller, Get, Path, Post, Route } from "@tsoa/runtime";
import { RegisterationDTO } from "./RegisterationDTO";
import { RegisterationModel } from "./RegisterationModel";
import { RegisterationService } from "./RegisterationService";

@Route('registeration')
export class RegisterationController extends Controller {
    registerationService = new RegisterationService()

    @Get('listby/{id}')
    public async getRegisteredCoursed(@Path() id: string): Promise<Array<RegisterationModel>> {
        return this.registerationService.listById(id);
    }

    @Post('create')
    public async saveRegisteration(@Body() registeration: RegisterationDTO) {
        return this.registerationService.registerCourse(registeration)
    }
}