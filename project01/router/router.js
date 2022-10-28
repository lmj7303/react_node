const express=require('express')
const router=express.Router()

//DB 세팅
const mysql=require('mysql')
const path=require('path')

let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "na5231ra92",
    port : "3306",
    database : "nodejs_db"
})

router.post('/joinData',(req,res)=>{
    console.log('joinData 라우터')
    console.log(req.body.user)

    let sql='insert into member values(?,?,3)'
    conn.query(sql,[req.body.user.id,req.body.user.pw],(err,rows)=>{
        if(rows){
            console.log('회원가입성공')
            res.json({
                result: '성공'
            })
        }else{
            console.log('회원가입실패')
            res.json({
                result: '실패'
            })
        }
        res.end()
    })
})

router.post('/logindata',function(req,res){
    let sql='select * from member where id=? and pw=?'
    conn.query(sql,[req.body.id,req.body.pw],(err,rows)=>{
        console.log(rows[0])

        if(rows.length>0){
            res.json({
                result:'성공'
            })
        }else{
            res.json({
                result:'error'
            })
        }
        res.end()
    })
})

router.get('*',(req,res)=>{
    console.log('happy hacking!')
    res.sendFile(path.join(__dirname,'..','react-project','build','index.html'))
})

module.exports=router