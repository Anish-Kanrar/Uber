const https = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = https.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
