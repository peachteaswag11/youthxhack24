require('dotenv').config();
const http = require('http');
const axios = require('axios');
const qs = require('qs');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/login') {
    // Redirect to authorization endpoint (placeholder URL)
    const queryParams = qs.stringify({
      client_id: process.env.AUTH_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.REDIRECT_URI,
      state: 'random_state_string',
      scope: 'openid profile',
    });

    const authUrl = `${process.env.AUTH_URL}?${queryParams}`;
    res.writeHead(302, { Location: authUrl });
    res.end();

  } else if (reqUrl.pathname === '/callback') {
    const { code } = reqUrl.query;

    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Authorization code not provided');
      return;
    }

    try {
      // Exchange the authorization code for an access token (placeholder URL)
      const tokenResponse = await axios.post(process.env.TOKEN_URL, qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.AUTH_CLIENT_ID,
        client_secret: process.env.AUTH_CLIENT_SECRET,
      }));

      const accessToken = tokenResponse.data.access_token;

      // Use the access token to fetch user information (placeholder URL)
      const userInfoResponse = await axios.get(process.env.USER_INFO_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const userInfo = userInfoResponse.data;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userInfo));

    } catch (error) {
      console.error('Error during authentication:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('An error occurred during authentication');
    }

  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the authentication app! Go to /login to authenticate.');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
