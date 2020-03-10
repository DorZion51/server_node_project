const express =require ('express');
const passport =require ('passport');
const GoogleStartegy =require ('passport-google-oauth20').Strategy;
const keys=require('./config/keys');

const app=express();
/*
app.get('/',(req,res)=>{
    res.send({hi:'change'});
});
*/

app.get(
    '/auth/google',
    passport.authenticate('google',{
    scope:['profile','email']
    })
);

passport.use(
    new GoogleStartegy({
    ClientID:keys.googleClientID,
    ClientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
    },
    accessToken=>{
    console.log(accessToken);
    }
    )
);
const PORT= process.env.PORT || 5000;

app.listen(PORT);
