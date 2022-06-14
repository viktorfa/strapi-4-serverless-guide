module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", ""),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", ""),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
      schema: "public",
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
    // The connection pool can be adjusted, but these minimal limits seem to work well.
    pool: {
      min: 0,
      max: 1,
      idleTimeoutMillis: 500,
    },
  },
});
