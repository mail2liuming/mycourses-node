import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

export const REGION = process.env.Local ? "us-east-1" : process.env.REGION;
export const ddbClient = process.env.ENV == "LOCAL" ?
    new DynamoDBClient({ "region": REGION, "endpoint": "http://localhost:8090" }) :
    new DynamoDBClient({ "region": REGION });
export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
