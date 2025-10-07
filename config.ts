import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  dbString: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  dbString: process.env.DB_STRING || "mongodb://localhost:27017",
};

export default config;