export default () => ({
    port: 3000,
    database: {
        host: process.env.POSTGRES_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
        logging: process.env.POSTGRES_LOGGING === 'true',
        logger: process.env.POSTGRES_LOGGER,
    }
});