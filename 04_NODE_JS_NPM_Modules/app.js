// load custom modules
const _ = require('lodash');
const moment = require('moment');

// normal Javascript
let colors = ['white','black','orange','blue','purple'];
let result = '';
colors.forEach(function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// do with Lodash
result = '';
_.forEach(colors,function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

//
let mixedArray = [100,'test',255,'abc',456];
let countElementsJS = function(array) {
    let numberCount = 0;
    let stringCount = 0;
    array.forEach(function(element) {
        if(typeof element === 'number'){
            numberCount++;
        }
        if(typeof element === 'string'){
            stringCount++;
        }
    });
    return {stringCount , numberCount};
};
result = countElementsJS(mixedArray);
console.log(result);

// using lodash
let countElementsLodash = function(array) {
    let numberCount = 0;
    let stringCount = 0;
    _.forEach(array,function(element) {
        _.isNumber(element) ? numberCount++ : numberCount;
        _.isString(element) ? stringCount++ : stringCount;
    });
    return {stringCount,numberCount};
};
result = countElementsLodash(mixedArray);
console.log(result);

// moment js examples
moment.locale('kn');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(`Today is : ${moment().format('dddd')}`);
console.log(`I Born : ${moment("19881228", "YYYYMMDD").fromNow()}`);
console.log(`Today started : ${moment().startOf('day').fromNow()}`);
console.log(`Today Ends : ${moment().endOf('day').fromNow() }`);