/**Daniel Palmer
 * Web Application Development (CPRG-210-A)
 * Assignemt 8 - 13
 * 2021-11-26
 * 
 * Returns the the day and current time
*/

const dayjs = require("dayjs")
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);
 
exports.CurrentDate = ()=>{
    return dayjs().format('dddd MMMM Do, YYYY, [its] h:mm:ss a');
};


