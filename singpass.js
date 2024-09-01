// app.js
require('dotenv').config();
const http = require('http');
const axios = require('axios');
const qs = require('qs');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/login') {
    // Redirect to SingPass authorization endpoint
    const queryParams = qs.stringify({
      client_id: process.env.SINGPASS_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.SINGPASS_REDIRECT_URI,
      state: 'random_state_string', // Use a random string for CSRF protection
      scope: 'openid profile', // Scopes you need
    });

    const authUrl = `${process.env.SINGPASS_AUTH_URL}?${queryParams}`;
    res.writeHead(302, { Location: authUrl });
    res.end();

  } else if (reqUrl.pathname === '/callback') {
    // Handle the callback from SingPass
    const { code } = reqUrl.query;

    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Authorization code not provided');
      return;
    }

    try {
      // Exchange the authorization code for an access token
      const tokenResponse = await axios.post(process.env.SINGPASS_TOKEN_URL, qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.SINGPASS_REDIRECT_URI,
        client_id: process.env.SINGPASS_CLIENT_ID,
        client_secret: process.env.SINGPASS_CLIENT_SECRET,
      }));

      const accessToken = tokenResponse.data.access_token;

      // Use the access token to fetch user information
      const userInfoResponse = await axios.get(process.env.SINGPASS_USER_INFO_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const userInfo = userInfoResponse.data;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userInfo));

    } catch (error) {
      console.error('Error during SingPass authentication:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('An error occurred during authentication');
    }

  } else {
    // Default route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the SingPass Node.js app! Go to /login to authenticate.');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
