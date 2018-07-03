exports.dbConfig = {
    user: "itspv",
    password: "supervisor",
    server: "223.25.99.220",
    //server: "192.168.18.200", 
    // database: "kinosentraacc",
    port: 1433,
    pool: {
        // max: 9999,
        min: 10,
        idleTimeoutMillis: 3000
    }
};

exports.webPort = 9000;

exports.httpMsgsFormat = "JSON";
// exports.httpMsgsFormat = "XML";
// exports.httpMsgsFormat = "HTML";

