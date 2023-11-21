const config = {
  app: {
    port: process.env.PORT || 3002,
  },
  db: {
    uri: process.env.MONGODB_URL || "mongodb://localhost:27017/ProjectVueJS",
  },
};
module.exports = config;
