
//---------------------------------------------------------
// var o = {
//     doWork: function () {
//         console.log('im Mod1');
//     }
// };
//---------------------------------------------------------

//IIFE / self-executable function

// var ibmApp = ibmApp || {};
// (function () {
//     var pri = 12;
//     ibmApp.mod2.doWork();
//     ibmApp.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im Mod1');
//         }
//     };
//     ibmApp.mod1 = o; // export
// })();

//---------------------------------------------------------
// commonJS

console.log('-greet/index.js-');
// let message = "good morning";
let en = require('./en');
let ka = require('./ka');
function greet(lang) {
    if (lang === "en") {
        en(); return
    }
    if (lang === "ka") {
        ka(); return
    }
    console.log('give me language for region greetings');
}
// greet();
module.exports = {
    greet
}