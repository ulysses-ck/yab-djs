// run dotenvx only if not in production
if (process.env.NODE_ENV !== 'production') {
  require('@dotenvx/dotenvx').config();
}
