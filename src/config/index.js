const { parseEnv } = require("./util");
const dotenv = require("dotenv");

const path = 'src/config/.env';
dotenv.config({ path });

const config = {
  pg: {
    database_url: parseEnv("DATABASE_URL")
  }
};

module.exports = config;