TARGET="backend-sdk"

rm -rf $TARGET
mkdir $TARGET
docker run --rm -v ${PWD}:/local -u $(id -u ${USER}):$(id -g ${USER}) \
  openapitools/openapi-generator-cli generate \
 -i https://raw.githubusercontent.com/joladnijo/joladnijo-backend/main/openapi-schema.json \
 -g typescript-fetch \
 --additional-properties=supportsES6=true,npmVersion=8.5.0,typescriptThreePlus=true,withoutRuntimeChecks=true,useSingleRequestParameter=false \
 -o /local/$TARGET


SED_COMMAND='1s;^;// @ts-nocheck\n;'
if [ "$(uname)" != "Darwin" ]; then
  sed -i "$SED_COMMAND" $TARGET**/*.ts
else
  sed -i '' "$SED_COMMAND" $TARGET**/*.ts
fi
