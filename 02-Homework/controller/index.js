const router = require('express').Router();
const db = require('../db');

router.get('/', (req,res)=>{
    res.render("index")
});
router.get('/read', async (req,res)=>{
    const emp = await db.viewEmp();
    const role = await db.viewRole();
    const dep = await db.viewDep();
    res.render("read",{emp,role,dep})
});
router.get('/create', (req,res)=>{
    res.render("create")
});
router.get('/update', (req,res)=>{
    res.render("update")
});
router.get('/delete', (req,res)=>{
    res.render("delete")
});


module.exports = router;