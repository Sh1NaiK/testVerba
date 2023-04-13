import { Pool } from "pg";
import config from "config";

export type ConnectionOptionsType = {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

const options = config.get<ConnectionOptionsType>("db");

export const pool = new Pool({
  user: options.username,
  host: options.host,
  password: options.password,
  database: options.database,
  port: options.port,
});
