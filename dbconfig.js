const config = {
    user: 'oberon',
    password: 'obss@123',
    server: '65.1.200.3',
    database: 'oberon',
    port: 1433,
    options: {
        trustedconnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }
}

module.exports = config;