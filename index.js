import getArgs from './helpers/args.js'
import { saveKeyValue,  TOKEN_DICTIONARY} from './services/storage.service.js';
import { printError, printSuccess, printHelp } from './services/log.servic.js'
//const getArgs = require('./helpers/args')
// const {
//     printError, printSuccess
// }= require("./services/log.servic")
const saveToken = async token => {
    if(!token.length){
        printError("Token doesn't exist")
    }
    try{
        await saveKeyValue( TOKEN_DICTIONARY, token)
        printSuccess('Token wes saved')
    }catch(error){
        printError(error.message)
    }
}

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
        return saveToken(args.t)
        // save tokin  
    }
    // result

}

startCLI()
