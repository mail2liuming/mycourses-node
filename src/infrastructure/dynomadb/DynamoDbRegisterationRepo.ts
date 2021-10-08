import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";
import { RegisterationDTO } from "../../registeration/RegisterationDTO";
import { RegisterationModel, transferFromDTO } from "../../registeration/RegisterationModel";
import { RegisterationRepo } from "../../registeration/RegisterationRepo";
import { ddbDocClient } from "./DynamoDbDocClient";

export class DynamoDbRegisterationRepo implements RegisterationRepo {
    getTableName(): string {
        console.log("process.env.CourseTable is : " + process.env.CourseTable)
        return process.env.CourseTable == undefined ? "CourseTable" : process.env.CourseTable;
    }

    async getListByUserId(userId: string): Promise<RegisterationModel[]> {
        const getListParams = {
            TableName: this.getTableName(),
            IndexName: "gsiCourseTable",
            KeyConditionExpression: "userId = :user",
            ExpressionAttributeValues: {
                ":user": `#USER-${userId}`
            },
        };
        try {
            const data = await ddbDocClient.send(new QueryCommand(getListParams));
            console.log("Success - items details", data.Items);
            return data.Items as RegisterationModel[];
        } catch (err) {
            console.log("Error", err);
            throw new Error(err as string);
        }
    }
    async createRegister(registerationDTO: RegisterationDTO): Promise<RegisterationModel> {
        const model = transferFromDTO(registerationDTO);
        const params = {
            TableName: this.getTableName(),
            Item: {
                courseId: `#COURSE-${model.courseId}`,
                userId: `#USER-${model.userId}`,
                name: model.name,
                courses: model.courses,
                frequency: model.frequency
            }
        }

        try {
            const data = await ddbDocClient.send(new PutCommand(params));
            console.log("Success - item", data);
            return model;
        } catch (err) {
            console.log("Error", err);
            throw new Error(err as string);
        }
    }
}