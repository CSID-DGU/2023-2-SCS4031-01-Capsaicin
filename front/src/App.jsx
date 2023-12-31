import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LoginMain from '../pages/Join/LoginMain';
import Join from '../pages/Join/Join';
import Main from '../pages/Main/Main';
import './App.css'
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import NormalJoin from '../pages/Join/NormalJoin';
import GuardJoin from '../pages/Guard/GuardJoin';
import GuardMain from '../pages/Guard/GuardMain';
import Term from '../pages/Join/Term';
import InputMain from '../pages/Input/Main/InputMain';
import BloodPressureInput from '../pages/Input/HealthInput/BloodPressureInput/BloodPressureInput';
import WeightInput from '../pages/Input/HealthInput/WeightInput/WeightInput';
import InputInfo from '../pages/Join/InputInfo';
import InputInfo_cate from '../pages/Input/FoodInput/InputInfo_cate';
import SportsInput from '../pages/Input/SportsInput/SportsInput';
import Side from '../pages/Input/FoodInput/FoodPage/Side';
import Soup from '../pages/Input/FoodInput/FoodPage/Soup';
import CustomizedCare from '../pages/CustomizedCare/CustomizedCare';
import HealthRecord from '../pages/HealthRecord/HealthRecord';
import Community from '../pages/Community/Community';
import Write from '../pages/Community/Write';
import Rice from '../pages/Input/FoodInput/FoodPage/Rice';
import Food2 from '../pages/Input/FoodInput/FoodPage/Food2';
import Food5 from '../pages/Input/FoodInput/FoodPage/Food5';
import Food6 from '../pages/Input/FoodInput/FoodPage/Food6';
import Food7 from '../pages/Input/FoodInput/FoodPage/Food7';
import Food8 from '../pages/Input/FoodInput/FoodPage/Food8';
import GuardRecord from '../pages/Guard/GuardRecord';
import GuardCare from '../pages/Guard/GuardCare';
import GuardTerm from '../pages/Guard/GuardTerm';

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
          <Route path="/guardjoin" element={<GuardJoin />} />
          <Route path="/guardmain" element={<GuardMain />} />
          <Route path="/guardterm" element={<GuardTerm />} />
          <Route path="/main" element={<Main />} />
          <Route path="/term" element={<Term />} />
          <Route path="/inputmain" element={<InputMain />}></Route>
          <Route path="/bloodpressureinput" element={<BloodPressureInput />}></Route>
          <Route path="/weightinput" element={<WeightInput />}></Route>
          <Route path="/inputinfo" element={<InputInfo />} />
          <Route path="/inputinfo_cate" element={<InputInfo_cate />} />
          <Route path="/sportsinput" element={<SportsInput />} />
          <Route path="/Rice" element={<Rice/>} />
          <Route path="/Side" element={<Side />} />
          <Route path="/Soup" element={<Soup />} />
          <Route path="/Food2" element={<Food2 />} />
          <Route path="/Food5" element={<Food5 />} />
          <Route path="/Food6" element={<Food6 />} />
          <Route path="/Food7" element={<Food7 />} />
          <Route path="/Food8" element={<Food8 />} />

          {/* 맞춤케어 */}
          <Route path="/CustomizedCare" element={<CustomizedCare />} />
          <Route path="/GuardCare" element={<GuardCare />} />
          {/* 건강기록 */}
          <Route path="/HealthRecord" element={<HealthRecord />} />
          <Route path="/guardrecord" element={<GuardRecord />} />
          {/* 커뮤니티 */}
          <Route path="/Community" element={<Community />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App