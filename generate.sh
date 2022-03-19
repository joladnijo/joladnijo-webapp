rm -rf backend-sdk
mkdir backend-sdk
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 generate \
 -i https://raw.githubusercontent.com/joladnijo/joladnijo-backend/31-generate-open-api-json-output/openapi-schema.json \
 -l typescript-fetch \
 -o /local/backend-sdk
