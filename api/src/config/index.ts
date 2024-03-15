const config = {
  server: {
    port: 4000,
  },
  database: {
    filename: "src/database/database.db",
    migrationsPath: "src/database/migrations",
    seedFilePath: "src/database/seeds/001_create_database.sql",
  },
};

export default config;
