/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs//schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://cars_owner:QimyvS2PDlu7@ep-steep-shape-a2cmzjpa.eu-central-1.aws.neon.tech/car-marketplace?sslmode=require',
    }
  };