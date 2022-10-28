const express=require('express')
const app=express()
const router=require('./router/router')

//(1)경로처리를 하는 모듈:Path
//여러환경때문에 경로를 단순히 문자열로 접근하면 프로그램이 특정운영체제에서만 돌아간다 이러한 위험을 방지해주는 모듈 =>Path
const path=require('path')

//(2)외부에 있는 정보들을 요청할 때 사용하는 모듈:cors
//데이터를 주고 받을떄 필수적으로 등록할 것
const cors=require('cors')

//이 폴더 안에 있는 static파일을 사용할게요.
app.use(express.static(path.join(__dirname,'react-project','build')))

//값을 주고받은 때 필요함
app.use(cors())
//json 형식을 사용하겠습니다.
app.use(express.json())

app.use(router)
app.listen(3001)