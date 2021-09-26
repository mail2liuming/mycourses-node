import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

export const REGION = "us-east-1";
export const ddbClient = new DynamoDBClient({ "region": REGION, "endpoint": "http://localhost:8090" });
export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
