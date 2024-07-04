import jsfroce from 'jsforce';

export default defineEventHandler(async (event) => {
  const sf = new jsfroce.Connection({
    loginUrl: process.env.SF_LOGIN_URL,
    accessToken: process.env.SF_ACCESS_TOKEN
  });

  const d = await sf.query('SELECT Id, Name FROM Account LIMIT 1');

  return {
    hello: d
  }
});