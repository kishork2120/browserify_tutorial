const helper = require('./helper.js');
const request = require('request');

document.getElementById('nextDate').addEventListener('click',()=>{
    document.getElementById('newDate').innerHTML = helper.nextDate(document.getElementById('currentDate').value);
});

document.getElementById('getServerdData').addEventListener('click',()=>{
    request('https://jsonplaceholder.typicode.com/todos/1',(err,response,body)=>{
        if(err) console.log(err)
        else document.getElementById('serverMessage').innerHTML = JSON.parse(body).title;
    })
})