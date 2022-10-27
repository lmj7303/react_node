import React,{useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const idRef=useRef()
  const pwRef=useRef()
  const nav=useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/logindata',{
      id:idRef.current.value,
      pw:pwRef.current.value
    })
    .then((res)=>{
      console.log('성공',res)
      if(res.data.result==='성공'){
        alert('환영합니다.')
        nav('/')
      }else{
        idRef.current.value=''
        pwRef.current.value=''
        alert('아이디와 비밀번호를 다시 입력해주세요.')
      }
    })
    .catch((err)=>{console.log('err',err)})
  }
  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={handleLogin}>
        <input type='text' ref={idRef} placeholder='아이디를 입력하시오'></input>
        <input type='password' ref={pwRef} placeholder='비밀번호를 입력하시오'></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login