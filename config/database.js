module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ID339008_autoscout.db.webhosting.be'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ID339008_autoscout'),
      user: env('DATABASE_USERNAME', 'ID339008_autoscout'),
      password: env('DATABASE_PASSWORD', 'sS2y3tSckYJD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
