// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const admin = require('firebase-admin');
// const serviceAccount = require('snehablog-33d55-firebase-adminsdk-8wv49-34460997c3.json');
const express = require('express');
const functions= require('firebase-functions');
const app=express();
const port=80;
var path = require('path');

// admin.initializeApp({
//     credential : admin.credential.cert(serviceAccount)
// });
// const db = admin.firestore();

app.use(express.static(path.join(__dirname ,'../public')));
app.use(express.static(path.join(__dirname + '/servefile')));

app.get("/" , (req, res) => {
   res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
    //  res.send("hi");
    res.status(200).sendFile(path.join(__dirname + "/servefile/index.html"));
});

app.get("/blog" , (req, res) => {
   res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   res.status(200).sendFile(path.join(__dirname + "/servefile/blog.html"));
 });

 app.get("/fullblog" , (req, res) => {
   res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   // res.status(200).sendFile(path.join(__dirname ,'../public','fullpageblogs.html'));
   res.status(200).sendFile(path.join(__dirname + "/servefile/fullpageblogs.html"));
});

app.get("/buy" , (req, res) => {
   res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   // res.status(200).sendFile(path.join(__dirname ,'../public','buynowbook.html'));
   res.status(200).sendFile(path.join(__dirname + "/servefile/buynowbook.html"));
});
 
app.get("/shop" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   //  res.status(200).sendFile(path.join(__dirname ,'../public','shop.html'));
   res.status(200).sendFile(path.join(__dirname + "/servefile/shop.html"));
 });

 app.get("/hire" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   //  res.status(200).sendFile(path.join(__dirname ,'../public','hire.html'));
   res.status(200).sendFile(path.join(__dirname + "/servefile/hire.html"));
 });

 app.get("/ownersection",(req,res) =>{
   res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
   // res.status(200).sendFile(path.join(__dirname, '../public','owner.html'));
   res.status(200).sendFile(path.join(__dirname + "/servefile/owner.html"));
 });

    app.listen(port, ()=>{
     console.log('Sucessfully Served The Public Static Website');
    });


exports.app = functions.https.onRequest(app);
