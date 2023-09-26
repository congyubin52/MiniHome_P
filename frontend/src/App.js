import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import Nav from './include/Nav';
import HomeP from './page/HomeP';
import Main from './page/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  // const [mini, setMini] = useState('')

  //   useEffect(() => {
  //       axios.get('/api/mini')
  //       .then(response => setMini(response.data))
  //       .catch(error => console.log(error))
  //   }, []);
    return (
        // <div>
        //     백엔드에서 가져온 데이터입니다 : {mini}
        // </div>
        <>
          <div style={{ backgroundColor: 'lightgray', height: '100vh', overflow: 'auto' }}>
            <BrowserRouter>
              <Nav/>
              <Container fixed sx={{ mt: '50px' }}>
                <Routes>
                  <Route
                        path="/"
                        element={<Main/>}
                  ></Route>
                  <Route
                        path="/member/signin"
                        element={<SignIn/>}
                  ></Route>
                  <Route
                        path="/member/signup"
                        element={<SignUp/>}
                  ></Route>
                  <Route
                        path="/home_p"
                        element={<HomeP/>}
                  ></Route>
                </Routes>
                {/* <HomeP/> */}
                {/* <SignIn/> */}
                {/* <SignUp/> */}
              </Container>
            </BrowserRouter>
          </div>
        </>
    );
}

export default App;
