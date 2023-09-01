/**
 * env variables initialization module
 * @remark
 * @module
 */

/**
 * Getting an env variable
 * @throwable
 */
const getEnvVar = (key) => {
  /* eslint-disable no-underscore-dangle */
  const env = window._env_;
  if (env) {
    return JSON.parse(env)[key];
  }
  if (process.env[key] === undefined) {
    // throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};

/** API entrypoint */
export const API_URL = getEnvVar("REACT_APP_API_URL");

/** Program launch mode */
export const NODE_ENV = getEnvVar("NODE_ENV");
/** Development Mode */
export const isDevEnv = NODE_ENV === "development";
/** Production mode */
export const isProdEnv = NODE_ENV === "production";
