'use strict';
// const {sendFile}= require('fs');
const path= require('path');
console.log("path?", path.join(__dirname, '../templates/chicken.html'));

module.exports.showChickens = (req, res, next)=>{

    res.sendFile(path.join(__dirname, '../templates/chicken.html'));//pull in module called path

};

