const express = require('express');
const request = require('request');
const app = express();

app.listen(process.env.PORT,() => {
    console.log("Server started");
})

app.get('/gettime', gettime);

function gettime(req,res){
    let timezone = req.query.timezone || "Europe/Paris";
    request("https://www.timeapi.io/api/Time/current/zone?timeZone="+timezone, function*(Body){
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