import sqlite3 from "sqlite3";
import { open } from "sqlite";
import config from "../config";

const db = open({
  filename: config.database.filename,
  driver: sqlite3.Database,
});
