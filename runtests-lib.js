import jest from "jest";
import {resolve as resolvePath} from "path";

const argv = process.argv.slice(2);

argv.push(
  "--config",
  JSON.stringify({
    scriptPreprocessor: resolvePath(__dirname, "transform"),
    testEnvironment: "node",
  })
);

jest.run(argv);
