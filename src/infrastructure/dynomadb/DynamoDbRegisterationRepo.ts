import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { RegisterationModel } from "../../registeration/RegisterationModel";
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
                ":user": userId
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
    async createRegister(registerationModel: RegisterationModel): Promise<RegisterationModel> {
        const params = {
            TableName: this.getTableName(),
            Item: {
                courseId: registerationModel.courseId,
                userId: registerationModel.userId,
                books: [
                    {
                        address: registerationModel.name,
                        date: registerationModel.date,
                        cost: registerationModel.cost,
                        repeatable: registerationModel.repeatable
                    }
                ]
            }
        }

        try {
            const data = await ddbDocClient.send(new PutCommand(params));
            console.log("Success - item", data);
            return registerationModel;
        } catch (err) {
            console.log("Error", err);
            throw new Error(err as string);
        }
    }
}