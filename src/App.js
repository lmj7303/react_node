import logo from './logo.svg';
import './App.css';
//layout
import Header from './layout/Header';
import Navbar from './layout/Navbar';
//page
import Main from './page/Main';
import Login from './page/Login';
import Join from './page/Join';
//라우터
import {Routes,Route} from 'react-router-dom';

function App() {
  //1.고정되어있는 header를 하나 제작해라.
  // =>JS(B)라는 내용의 h3태그 
  //=>클릭시, 메인창으로 이동

  //2.고정되어있는 Navbar를 하나 제작해라.
  //=>버튼2개(로그인,회원가입)
  //=>각각 페이지로 이동
  
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
      </Routes>
    </div>
  );
}

export default App;
