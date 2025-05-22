import getArgs from './helpers/args.js'
import { getWeather } from './services/api.servic.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { printError, printSuccess, printHelp } from './services/log.servic.js'
//const getArgs = require('./helpers/args')
// const {
//     printError, printSuccess
// }= require("./services/log.servic")
const saveToken = async token => {
    if (!token.length) {
        printError("Token doesn't exist")
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY, token)
        printSuccess('Token wes saved')
    } catch (error) {
        printError(error.message)
    }
}

// const getForcast = async () => {
//     try {
//         const response = getWeather(process.env.CITY ?? 'Samarkand')
//         console.log(response)
//     }
//     catch (error) {
//         if (error?.response?.ststus == 404) {
//             printError('City not found')
//         } else if (error?.response?.ststus == 401) {
//             printError('Invalid tokent')
//         } else {
//             printError(error.message)
//         }

//     }
// }



const startCLI = () => {
    const args = getArgs(process.argv)
    //console.log(process.env)
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

    getWeather('Samarkand')

}

startCLI()
