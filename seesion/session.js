
let express = require('express');

let parseurl = require('parseurl');
let session = require('express-session');

let app = express();

app.use(session({
    secret:'asadlfkj!@#!@#dfgasdg', // 세션을 암호화할 때 사용하는 키값
    resave:false, // 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지 여부
    saveUninitialized: true // 세션에 저장할 내역이 없더라도 세션을 저장할지 여부
}))

app.get('/', function(req,res,next){
    console.log(req.session);

    if(req.session.num === undefined){
        req.session.num = 1;
    }else{
        req.session.num = req.session.num+1;
    }

    res.send(`Views : ${req.session.num}`);
})

app.listen(2000, function(){
    console.log("2000!");
})