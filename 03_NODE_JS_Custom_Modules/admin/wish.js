const fs = require('fs');
const path = require('path');

let greet = (name) => {
    let message = `Good Morning ${name}`;
    fs.writeFile('wishMessage.txt',message,'utf-8',(err) => {
        if(err) throw  err;
        console.log('data is saved');
    });
};

// export the functions
module.exports = {
    greet
};