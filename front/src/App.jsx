// import { useNavigate } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginMain from '../pages/Join/LoginMain'
import Join from '../pages/Join/Join'
import './App.css'
import NormalJoin from '../pages/Join/NormalJoin'

function App() {

  // const navigate = useNavigate();

  // const Gotosignup = () => {
  //   navigate("/")
  // }

  return (
    <>
      {/* <LoginMain></LoginMain> */}
      {/* <Join></Join> */}
      <NormalJoin></NormalJoin>
    </>
  )
}

export default App
