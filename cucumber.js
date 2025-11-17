module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["tests/support/world.ts", "tests/steps/*.ts"],
    paths: ["tests/features/*.feature"],
    format: ["progress"]
  }
};