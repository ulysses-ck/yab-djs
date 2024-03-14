// code to load .env file in dev mode
if (process.env.NODE_ENV !== "production") {
  require("@dotenvx/dotenvx").config();
}
