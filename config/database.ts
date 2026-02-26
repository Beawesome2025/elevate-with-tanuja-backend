import path from 'path';

export default ({ env }) => {
  const connectionString = env('DATABASE_URL');

  return {
    connection: {
      client: 'postgres',
      connection: connectionString
        ? {
            connectionString,
            ssl: { rejectUnauthorized: false },
          }
        : {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'neondb'), // Force it to neondb
            user: env('DATABASE_USERNAME', 'neondb_owner'),
            password: env('DATABASE_PASSWORD'),
            ssl: { rejectUnauthorized: false },
          },
      debug: false,
    },
  };
};
