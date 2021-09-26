import { Controller, Get, Route } from "tsoa";

@Route("metrics")
export class MetricsController extends Controller {
    @Get("health")
    public async health(): Promise<String> {
        this.setStatus(200);
        return "OK";
    }
}