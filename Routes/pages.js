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

//Mission Page
app.get('/hard1',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard1');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard2',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard2');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard3',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard3');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//Mission Page
app.get('/hard4',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard4');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard5',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard5');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard6',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard6');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard7',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard7');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard8',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard8');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard9',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard9');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard10',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard10');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard11',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard11');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard12',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard12');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard13',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard13');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard14',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard14');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard15',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard15');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard16',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard16');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard17',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard17');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard18',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard18');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard19',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard19');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//Mission Page
app.get('/hard20',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('hard20');
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

//link Page
app.get('/low1',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('low1');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//link Page
app.get('/low2',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('low2');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//link Page
app.get('/low3',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('low3');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//link Page
app.get('/low4',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('low4');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})


//link Page
app.get('/high1',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('high1');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//link Page
app.get('/high2',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('high2');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//link Page
app.get('/high3',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('high3');
    }
    else{
        res.render('WelcomePage',{message:'Please log in for looking this content'})
    }
})

//link Page
app.get('/high4',authController.isloggedIn,(req,res)=>{
    if(req.participant){
    res.render('high4');
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

// saving the mission click button data
app.post('/hard1',authController.hard1);

// saving the mission click button data
app.post('/hard2',authController.hard2);

// saving the mission click button data
app.post('/hard3',authController.hard3);

// saving the mission click button data
app.post('/hard4',authController.hard4);

// saving the mission click button data
app.post('/hard5',authController.hard5);

// saving the mission click button data
app.post('/hard6',authController.hard6);

// saving the mission click button data
app.post('/hard7',authController.hard7);

// saving the mission click button data
app.post('/hard8',authController.hard8);

// saving the mission click button data
app.post('/hard9',authController.hard9);

// saving the mission click button data
app.post('/hard10',authController.hard10);

// saving the mission click button data
app.post('/hard11',authController.hard11);

// saving the mission click button data
app.post('/hard12',authController.hard12);

// saving the mission click button data
app.post('/hard13',authController.hard13);

// saving the mission click button data
app.post('/hard14',authController.hard14);

// saving the mission click button data
app.post('/hard15',authController.hard15);

// saving the mission click button data
app.post('/hard16',authController.hard16);

// saving the mission click button data
app.post('/hard17',authController.hard17);

// saving the mission click button data
app.post('/hard18',authController.hard18);

// saving the mission click button data
app.post('/hard19',authController.hard19);

// saving the mission click button data
app.post('/hard20',authController.hard20);

// saving the mission click button data
app.post('/low1',authController.low1);

// saving the mission click button data
app.post('/low2',authController.low2);

// saving the mission click button data
app.post('/low3',authController.low3);

// saving the mission click button data
app.post('/low4',authController.low4);

// saving the mission click button data
app.post('/high1',authController.high1);

// saving the mission click button data
app.post('/high2',authController.high2);

// saving the mission click button data
app.post('/high3',authController.high3);

// saving the mission click button data
app.post('/high4',authController.high4);

// saving the questionnaires click button data
app.post('/questionnaires',authController.questionnaires);

module.exports = app;