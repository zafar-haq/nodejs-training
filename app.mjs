// console.log("testing");
// const practice = require('./my_modules/practice.js');

import { log, checkHelloWorld, p_module } from './my_modules/practice.mjs';

log("hello");
checkHelloWorld('Hello World');
p_module.getDate();
p_module.getUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

p_module.myDisplay().then((value) => {
    console.log(value);
});