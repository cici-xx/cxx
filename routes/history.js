let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.render('history');
});
router.post('/login',(req,res) => {
    let name = req.body.username;
    let pass = req.body.pass;
    if( req.session.user!= undefined && name == req.session.user.username && pass == req.session.user.pass ){
            res.send("login success")
        }else{
            res.end("login fail")
        } 
})

module.exports = router;