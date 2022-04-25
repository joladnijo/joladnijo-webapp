export const getBaseUrl = (): string => {
  const { ENVIRONMENT } = process.env;
  if (ENVIRONMENT === 'staging') {
    return 'https://staging.joladnijo.hu';
  } else if (ENVIRONMENT === 'production') {
    return 'https://joladnijo.hu';
  } else return 'http://localhost:3000';
};
