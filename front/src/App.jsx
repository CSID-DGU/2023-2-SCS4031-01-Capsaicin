import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LoginMain from '../pages/Join/LoginMain';
import Join from '../pages/Join/Join';
import Main from '../pages/Main/Main';
import './App.css'
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import NormalJoin from '../pages/Join/NormalJoin';
import Term from '../pages/Join/Term';
import InputMain from '../pages/Input/Main/InputMain';
import BloodPressureInput from '../pages/Input/HealthInput/BloodPressureInput/BloodPressureInput';
import WeightInput from '../pages/Input/HealthInput/WeightInput/WeightInput';
import InputInfo from '../pages/Join/InputInfo';
import InputInfo_cate from '../pages/Input/FoodInput/InputInfo_cate';
import Side from '../pages/Input/FoodInput/FoodPage/Side';
import Soup from '../pages/Input/FoodInput/FoodPage/Soup';
import CustomizedCare from '../pages/CustomizedCare/CustomizedCare';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
const Basic = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginMain />} />
          <Route path="/join" element={<Join />} />
          <Route path="/normaljoin" element={<NormalJoin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/term" element={<Term />} />
          <Route path="/inputmain" element={<InputMain />}></Route>
          <Route path="/bloodpressureinput" element={<BloodPressureInput />}></Route>
          <Route path="/weightinput" element={<WeightInput />}></Route>
          <Route path="/inputinfo" element={<InputInfo />} />
          <Route path="/inputinfo_cate" element={<InputInfo_cate />} />
          <Route path="/Side" element={<Side />} />
          <Route path="/Soup" element={<Soup />} />
          {/* 맞춤케어 */}
          <Route path="/CustomizedCare" element={<CustomizedCare />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App