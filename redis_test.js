const Redis = require("ioredis");
require("dotenv").config()
const { HOST, PORT, PASSWORD } = process.env;
// const redis = new Redis(`redis://:${PASSWORD}@${HOST}:${PORT}`); 
const redis = new Redis(`redis://:@${HOST}:${PORT}`);

redis: redis.set("dada", "Okkkkkkkk");
console.log("done");

redis.quit();
