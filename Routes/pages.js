const sql = require('../DB/db');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');






exports.login = async(req,res)=>{

       try {
            const PinCode=req.body.PinCode;
            if(!PinCode){     // check that the user insert valid pin befor log in
                return res.status(400).render('WelcomePage',{message:'Please provide a Pin Code'});
            }

            sql.query('SELECT * FROM participants WHERE PinCode = ?',[PinCode], async(error,results)=>{
              if(error) throw error;
              //let res = await results;

              //console.log("im here")
              //console.log(results)
              //console.log(results.length)

              if(results.length==0){
                    res.status(401).render('WelcomePage',{message:'Pin Code incorrect'})
              }

              else{
                  if(!((results[0].Device)==req.device.type)){
                      res.status(401).render('WelcomePage',{message:'Please connect via the device you were asked for'})
                  }
                  else{

                      const ParticipantPin = results[0].PinCode;
                      const tasklev = results[0].TaskLevel;
                      const risklev = results[0].RiskLevel;


                      // adding token
                      const token = jwt.sign({id: ParticipantPin},process.env.JWT_SECRET,
                          {expiresIn: process.env.JWT_EXPIRES_IN
                  });



               //Classification of participants into experimental groups
                  if(tasklev == "hard"){
                    if(risklev=="high"){


                      global.arrayofusers[`${token}`]= {
                     Missions: ["easy1","easy2","easy3","easy4","easy6","easy8","easy9","easy10","easy11","easy15","easy17","easy19","easy20"]}
                    }
                    else{


                      global.arrayofusers[`${token}`]= {
                     Missions: ["easy1","easy2","easy3","easy4","easy6","easy8","easy9","easy10","easy11","easy15","easy17","easy19","easy20"]}
                    }

                  }


                  else{
                    if(risklev=="high"){


                      global.arrayofusers[`${token}`]= {
                     Missions: ["easy1","easy2","easy3","easy4","easy6","easy8","easy9","easy10","easy11","easy15","easy17","easy19","easy20"]}
                    }
                    else{

                      global.arrayofusers[`${token}`]= {
                      Missions: ["easy1","easy2","easy3","easy4","easy6","easy8","easy9","easy10","easy11","easy15","easy17","easy19","easy20"]}
                    }


                  }





                  //cookie configoration
                  const cookieOptions = {
                      expires: new Date(
                          Date.now() + process.env.JWT_COOKIE_EXPIRES*24*60*60*1000 // convert into miliseconds
                      ),
                      httpOnly: true
                  }
                  // adding the cookie
                  res.cookie('jwt',token,cookieOptions);

                  var TimeStamp = timestamp1();
                  var PinCode=req.body.PinCode;
                  var ClickType= 'login';
                  var insertSql = 'INSERT INTO Clicks SET ?';
                  sql.query(insertSql,{PinCode,ClickType,TimeStamp},function (err, data) {
                    if (err) {
                  console.log(err);
                    }
                    else{
                      console.log("login data is inserted successfully ");
                    }

                    })

                  // res.status(200).redirect('/Instructions');
                  res.status(200).redirect('/Instructions');
                  }

              }

          })

        } catch (error) {
            console.log(error);

        }

      }


      /////----------middleware function to give access for specific pages only to logged in users  -------------------///////

   exports.isloggedIn = async (req,res,next)=>{
    //console.log(req.cookies);
    if(req.cookies.jwt){
        try {
            //when someone try to see his tests inside the decoded i ged the user id of the user
            const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
            //check if the user still exists
            //global.userid = decoded.id;
            // console.log(decoded);

            sql.query('SELECT * FROM participants WHERE PinCode = ?',decoded.id,(error,result)=>{

                if(!result){
                    return next();
                }

                req.participant = result[0];
                //console.log(req.participant);
                //global.user=req.user;
                return next();
            })
        }
        catch (error) {
            return next ();
        }
    }


    else{
       next();
    }

   }



     // function that insert the click data of instructions page


      exports.instructions = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'instructions';
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp},function (err, data) {
         if (err) {
        console.log(err);
          }
          else{
            console.log("instructions data is inserted successfully ");
            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

         })


      }


      exports.consentform = async(req,res)=>{
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'consentform';
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp},function (err, data) {
         if (err) {
        console.log(err);
          }
          else{
            console.log("consentform data is inserted successfully ");
          res.status(200).redirect('/Instructions');
          }

         })


      }





      // function that insert the click data of mission page


      exports.easy1 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy1';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

          const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy2 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy2';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy3 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy3';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy4 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy4';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy5 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy5';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy6 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy6';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy7 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy7';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy8 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy8';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy9 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy9';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy10 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy10';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy11 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy11';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
            res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy12 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy12';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy13 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy13';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy14 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy14';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy15 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy15';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy16 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy16';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy17 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy17';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy18 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy18';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }


      exports.easy19= async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy19';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }

      exports.easy20 = async(req,res)=>{
        const token = await req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
        var TimeStamp = timestamp1();
        var PinCode=decoded.id;
        var ClickType= 'easy20';
        var answer=req.body.answer;
        var insertSql = 'INSERT INTO Clicks SET ?';
        sql.query(insertSql,{PinCode,ClickType,TimeStamp, answer},function (err, data) {
        if (err) {
        console.log(err);
          }
          else{

            const pageForRender = randomPage(token);
          res.status(200).redirect(`/${pageForRender}`);
          }

        })
      }




  // function that insert the click data of questionnaires page


  exports.questionnaires = async(req,res)=>{
    const results= req.body;
      const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
      var TimeStamp = timestamp1();
      var PinCode=decoded.id;
      var ClickType= 'questionnaires';
      var insertSql = 'INSERT INTO Clicks SET ?';
      sql.query(insertSql,{PinCode,ClickType,TimeStamp},function (err, data) {
       if (err) {
      console.log(err);
        }
        else{

          var insertSql2 = 'INSERT INTO Questionnaries SET ?';

          results.Pincode= decoded.id;
          sql.query(insertSql2,results,function (err, data) {
            if (err) {
              console.log(err);
                }
                else{
                  res.redirect('/finish');
                }
              })
        }

       })
    }


        // function that generate a mturk code for full participating
      exports.retriveCreditCode= async (req,res,next)=>{

        try {

          sql.query('SELECT * FROM amazoncreditcodes order by code',(error,result)=>{

              if(!result){
                  return next();
              }

              req.creditcode = result[0];
              console.log(req.creditcode);
              deleteCreditCode();
              return next();
          })
      }
      catch (error) {
          return next ();
      }


      }


      // deleting a finish code from data base so each user gets a uniq code
      function deleteCreditCode(){
        sql.query(` DELETE
        FROM amazoncreditcodes
        order by code
        LIMIT 1 ; `,function(err, result) {
          if (err) throw err;
          console.log('code deleted!');
        })
      }





      // function that extract the timestamp

      function timestamp1(){
        let date_ob = new Date();

      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);

      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

      // current year
      let year = date_ob.getFullYear();

      // current hours
      let hours = date_ob.getHours();

      // current minutes
      let minutes = date_ob.getMinutes();

      // current seconds
      let seconds = date_ob.getSeconds();

      // prints date & time in YYYY-MM-DD HH:MM:SS format
      let time =year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

      return time;

      }


      // function that generate the link to show to the User

    function randomlink(array){
       let index = Math.floor(Math.random()*(array.length));
       return array[index];
     }

    // function that makes the mession pages random

    function randomPage(token){
      if(global.arrayofusers[`${token}`].Missions.length==0){
        delete global.arrayofusers[`${token}`];

        return 'questionnaires'
      }
      else if (global.arrayofusers[`${token}`].Missions.length==2 && global.arrayofusers[`${token}`].gotlink=="no" ){
        global.arrayofusers[`${token}`].gotlink = "yes";
          return global.arrayofusers[`${token}`].Link;
      }

      else{
        let index = Math.floor(Math.random()*(global.arrayofusers[`${token}`].Missions.length));
        let pageToRender = global.arrayofusers[`${token}`].Missions[index];
        global.arrayofusers[`${token}`].Missions.splice(index,1);

         return pageToRender;

      }


    }










