import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
    console.log(dedent, chalk.bgCyan(" HELP ") + `
  -s [CITY]     => set city
  -h            => show help
  -t [API_KEY]  => save API key
    `);
};

export {
    printError,
    printSuccess,
    printHelp
};
