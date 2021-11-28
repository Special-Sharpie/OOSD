/**Daniel Palmer
 * Web Application Development (CPRG-210-A)
 * Assignemt 8 - 13
 * 2021-11-26
 * 
 * Returns the the day and current time
 * This is used in place of the "choose different filename for the homepage"
 * It loads, and refreshes the date and time every time the page loads
*/

const dayjs = require("dayjs")
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);
 
exports.CurrentDate = ()=>{
    return dayjs().format('dddd MMMM Do, YYYY, [its] h:mm:ss a');
};


