# mycourses

# dynamodb

docker run -p 8090:8000 amazon/dynamodb-local
DYNAMO_ENDPOINT=http://localhost:8090 dynamodb-admin

aws dynamodb create-table --cli-input-json file://local/create-local-table.json --endpoint-url http://localhost:8090
