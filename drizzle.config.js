/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://content-generator_owner:3lkw4mUpNTuG@ep-dark-bush-a22aa5qq.eu-central-1.aws.neon.tech/content-generator?sslmode=require",
  },
};
