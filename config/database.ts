import path from 'path';

export default ({ env }) => {
  const connectionString = env('DATABASE_URL');

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString,
        ssl: connectionString ? { rejectUnauthorized: false } : false,
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };
};
