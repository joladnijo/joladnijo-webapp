rm -rf backend-sdk
mkdir backend-sdk
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
 -i https://raw.githubusercontent.com/joladnijo/joladnijo-backend/31-generate-open-api-json-output/openapi-schema.json \
 -g typescript-node \
 -o /local/backend-sdk

TARGET="backend-sdk/"

SED_COMMAND='1s;^;// @ts-nocheck\n;'
if [ "$(uname)" != "Darwin" ]; then
  sed -i "$SED_COMMAND" $TARGET**/*.ts
else
  sed -i '' "$SED_COMMAND" $TARGET**/*.ts
fi
