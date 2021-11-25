const express = require('express');
const request = require('request');
const app = express();

app.get('/gettime', gettime);

function gettime(req,res){
    //let timezone = req.query.
    request("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris", function*(Body){
        let jsonobject = JSON.parse(Body);

        let content = {
            "frames":[
                {"text":jsonobject.time, icon:"1820"}
            ]
        };

        console.log(content);
        res.send(content);
    })
}