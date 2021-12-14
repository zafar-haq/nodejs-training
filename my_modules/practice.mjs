
var log = function (comment){
    console.log(comment);
}

var checkHelloWorld = function (comment){
    if(comment === 'Hello World'){
        console.log(true);
    }else{
        console.log(false);
    }
}


// module.exports.log = log;
// module.exports.checkHelloWorld = checkHelloWorld;


const _log = log;
export { _log as log };
const _checkHelloWorld = checkHelloWorld;
export { _checkHelloWorld as checkHelloWorld };
export * as p_module from './practice_module.mjs'; //exported a module from here directly without even importing