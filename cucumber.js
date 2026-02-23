module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["tests/support/*.ts", "tests/steps/*.ts"],
    paths: ["tests/features/*.feature"],
    format: ["progress", "allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results"
    }
  }
};
