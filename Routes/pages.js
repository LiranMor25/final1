const express = require('express');
const app = express.Router();
//const sql = require("../DB/db");
const authController = require('../controllers/auth');

global.arrayofusers={};


// Entarnce Page
app.get('/',(req,res)=>{
    res.render('WelcomePage')
})


//Instructions Page
app.get('/instructions',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('Instructions');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }

})


//Mission Page
app.get('/easy1',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy1');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy2',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy2');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy3',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy3');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy4',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy4');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy5',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy5');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy6',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy6');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy7',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy7');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy8',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy8');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy9',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy9');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy10',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy10');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy11',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy11');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy12',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy12');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy13',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy13');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy14',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy14');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy15',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy15');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy16',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy16');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy17',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy17');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy18',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy18');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/easy19',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy19');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/easy20',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('easy20');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})



//questionnaires Page
app.get('/questionnaires',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('questionnaires');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }

})

//finish Page
app.get('/finish',authController.isloggedIn,authController.retriveCreditCode,(req,res)=>{
    if(req.participant){
        res.render('finish',{creditcode: req.creditcode});
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }

})

//broken link Page
app.get('/brokenlink',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('brokenlink');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})



//consentform
app.get('/consentform',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('consentform');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//disagree Page
app.get('/disagree',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('disagree');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }

})

// html file with the QR only
app.get('/QRcode',(req,res)=>{
    res.render('QRcode');
    
})





// checking if the participant enter the correct pincode and logged in from the device he was assigned
app.post('/checkdevice',authController.login);


// saving the instructions click button data
app.post('/readInstructions',authController.instructions);

// saving the consent form click button data
app.post('/agreetoconsentform',authController.consentform);


// saving the mission click button data
app.post('/easy1',authController.easy1);

// saving the mission click button data
app.post('/easy2',authController.easy2);

// saving the mission click button data
app.post('/easy3',authController.easy3);

// saving the mission click button data
app.post('/easy4',authController.easy4);

// saving the mission click button data
app.post('/easy5',authController.easy5);

// saving the mission click button data
app.post('/easy6',authController.easy6);

// saving the mission click button data
app.post('/easy7',authController.easy7);

// saving the mission click button data
app.post('/easy8',authController.easy8);

// saving the mission click button data
app.post('/easy9',authController.easy9);

// saving the mission click button data
app.post('/easy10',authController.easy10);

// saving the mission click button data
app.post('/easy11',authController.easy11);

// saving the mission click button data
app.post('/easy12',authController.easy12);

// saving the mission click button data
app.post('/easy13',authController.easy13);

// saving the mission click button data
app.post('/easy14',authController.easy14);

// saving the mission click button data
app.post('/easy15',authController.easy15);

// saving the mission click button data
app.post('/easy16',authController.easy16);

// saving the mission click button data
app.post('/easy17',authController.easy17);

// saving the mission click button data
app.post('/easy18',authController.easy18);

// saving the mission click button data
app.post('/easy19',authController.easy19);

// saving the mission click button data
app.post('/easy20',authController.easy20);


// saving the questionnaires click button data
app.post('/questionnaires',authController.questionnaires);

module.exports = app;