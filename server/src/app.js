const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// ===================== API ==================== //
const getMap = require('../api/getMap/');

// ===================== USE API ================== //
app.use('/api/getMap', getMap);

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    next();
  });

app.post('/api/getMap' , (req,res)=>{
console.log(req.body);
var rp = require('request-promise');
var urlencode = require('urlencode');
var value = urlencode(req.body.nameValue);
var options = {
    uri: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&language=vi_VI&key=AIzaSyDp13OCxOGb-RSAyCZhARfi-HK-khwxhE4`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    },
    json: true // Automatically parses the JSON string in the response
};
    rp(options)
    .then(function (result) {
        if(result.status == 'OK'){
            var resultData = result.predictions[0];
            res.json({resultData, statusCode: 1});
        }else{
            res.json({statusCode: 0});
        }
            
        
    })
    .catch(function (err) {
        console.log(err);
    });
});

app.listen(process.env.PORT || 8081)
