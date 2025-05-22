import getArgs from './helpers/args.js'
import{ printError, printSuccess, printHelp} from './services/log.servic.js'
//const getArgs = require('./helpers/args')
// const {
//     printError, printSuccess
// }= require("./services/log.servic")

const startCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    // console.log(process.argv)
    if (args.h) {
        printHelp()
        // help
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        // save tokin  
    }
    // result

}

startCLI()
