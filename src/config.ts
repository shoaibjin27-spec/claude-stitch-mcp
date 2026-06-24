interface Config {
  apiKey?: string;
  projectId?: string;
  authType: "api_key" | "adc";
  baseUrl: string;
}

function loadConfig(): Config {
  return {
    apiKey: process.env.STITCH_API_KEY,
    projectId: process.env.STITCH_PROJECT_ID,
    authType: (process.env.STITCH_AUTH_TYPE as "api_key" | "adc") || "api_key",
    baseUrl: process.env.STITCH_BASE_URL || "https://stitch.withgoogle.com/api",
  };
}

export { loadConfig, Config };