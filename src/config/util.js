  /**
   * Retrieves environment variable and throws if missing without default
   *
   * @param name name of environment variable
   * @param defaultVal
   */
  function parseEnv(name, defaultVal) {
    let env = process.env[name];
    if (!env) {
      if (isNullOrUndefined(defaultVal)) {
        throw new Error(`Missing environment variable for ${name}`);
      }
      env = defaultVal;
    }
  
    return env;
  }

  function isNullOrUndefined(value) {
    return value === undefined || value === null;
  }
  
  module.exports = {
    parseEnv
  };