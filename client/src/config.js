const config = {
  API_HOST: "",
};

if (process.env.NODE_ENV === "development") {
  config.API_HOST = "http://localhost:3001";
}

if (process.env.NODE_ENV === "production") {
  config.API_HOST = "http://localhost:3001";
}

export default config;
