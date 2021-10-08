# mycourses

# dynamodb

npm install -g dynamodb-admin
docker run -p 8090:8000 amazon/dynamodb-local
DYNAMO_ENDPOINT=http://localhost:8090 dynamodb-admin

aws dynamodb create-table --cli-input-json file://local/create-local-table.json --endpoint-url http://localhost:8090

# sam

sam build
sam deploy

# reference

https://evilmartians.com/chronicles/serverless-typescript-a-complete-setup-for-aws-sam-lambda

https://github.com/aaronshaf/dynamodb-admin

https://github.com/vendia/serverless-express
