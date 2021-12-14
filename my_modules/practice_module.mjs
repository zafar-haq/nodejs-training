

export var getDate = function(){
    console.log(new Date());
}

const readUser = function(){
    return {name:'zafar'};
}

//promises

export const getUser = function(){

    return new Promise((resolve, reject) => {
        const user = readUser();
        if(user !== null && user !== NaN){
            resolve(user);
        }else{
            reject('user was not found.');
        }
    });
}

//async and await

export async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("hello");}, 2000);
    });
    console.log(await myPromise);
    return "how are you?";
  }