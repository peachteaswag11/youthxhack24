mkdir singpass-node
cd singpass-node
npm init -y
npm install axios qs dotenv http

# .env
SINGPASS_CLIENT_ID=your_client_id
SINGPASS_CLIENT_SECRET=your_client_secret
SINGPASS_REDIRECT_URI=http://localhost:3000/callback
SINGPASS_AUTH_URL=https://www.singpass.gov.sg/oauth2/authorize
SINGPASS_TOKEN_URL=https://www.singpass.gov.sg/oauth2/token
SINGPASS_USER_INFO_URL=https://www.singpass.gov.sg/oauth2/userinfo
PORT=3000
