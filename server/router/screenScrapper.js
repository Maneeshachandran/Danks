const cost =  require('express').Router();


cost.get('/data', (req,res)=>{
    console.log('inside the file');
    res.send({'key':'hello'});
});

module.exports = cost;
