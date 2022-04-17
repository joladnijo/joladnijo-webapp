export const getBackendBaseUrl = () => {
  const { ENVIRONMENT } = process.env;
  if (ENVIRONMENT === 'staging') {
    return 'https://api.staging.joladnijo.hu';
  } else if (ENVIRONMENT === 'production') {
    return 'https://api.joladnijo.jmsz.hu';
  } else return 'http://localhost:8000';
};
