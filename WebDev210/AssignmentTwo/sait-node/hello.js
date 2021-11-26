const builtins = require("module").builtinModules;


function message(message){
    console.log(message);
}

message(builtins[0]);