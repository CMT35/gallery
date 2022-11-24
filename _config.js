var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://CMT8075:test1234@first-ip1.j2hfk3i.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://CMT8075:test1234@first-ip1.j2hfk3i.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://CMT8075:test1234@first-ip1.j2hfk3i.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
