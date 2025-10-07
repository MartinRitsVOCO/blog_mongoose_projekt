import dotenv from "dotenv";
dotenv.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    dbString: process.env.DB_STRING || "mongodb://localhost:27017",
};
export default config;
//# sourceMappingURL=config.js.map