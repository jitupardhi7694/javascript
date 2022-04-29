// let complete = true; //false

// let prom = new Promise((resolve, reject) => {
//     if (complete) {
//         resolve("i am successsful...")
//     } else {
//         reject("i am failed....") ///run in false condition
//     }
// });

// console.log(prom);


// function prom(complete) {
//     return new Promise((resolve, reject) => {
//         console.log("please wait promise loading....")
//         setTimeout(() => {
//             if (complete) {
//                 resolve("i am successsful...")
//             } else {
//                 reject("i am failed....") ///run in false condition
//             }
//         }, 2000);
//     });

// }

// first type  /////

// let onfufff).then(onfulfilment).catch(onrejected);


// second type //

// prom(true)
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((result) => {
//         console.log(result)
//     });


// two number using add , div mul , sub/////

function prom(a, b) {
    return new Promise((resolve, reject) => {
        console.log("please wait promise loading....")
        setTimeout(() => {
            let c = a * b; // * , + , - , %
            if (a, b) {
                resolve(`your answer : ${c}`)
            } else {
                reject("failed to  calculate....") ///run in false condition
            }
        }, 2000);
    });

}

prom(5, 2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });