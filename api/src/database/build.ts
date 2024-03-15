import * as fs from "fs";
import * as sqlite3 from "sqlite3";
import config from "../config";

const dbFilePath = config.database.filename;
const db = new sqlite3.Database(dbFilePath);

const createTablesQuery = fs.readFileSync(
  config.database.seedFilePath,
  "utf-8"
);

db.serialize(() => {
  db.run(createTablesQuery, (err) => {
    if (err) {
      console.error("Error:", err.message);
      return;
    }

    console.log("Tables created successfully!");
  });
});

db.close();
