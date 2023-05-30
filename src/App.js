
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { useState } from 'react';

const App =()=> {
 const pageSize = 5
  const country = "in"
  const apiKey=process.env.REACT_APP_NEWS_API
 
  const[progress,setProgress]=useState(0)
const doneProgress=(progress)=>{
 
  setProgress({progress:progress})
}
 
    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={2.3}
            progress={progress}

          />
          <Routes>
            <Route exact path="/" element={<News doneProgress={doneProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}> </Route>
            <Route exact path="/business" element={<News doneProgress={doneProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News doneProgress={doneProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
            <Route exact path="/general" element={<News doneProgress={doneProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path="/health" element={<News doneProgress={doneProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
            <Route exact path="/science" element={<News doneProgress={doneProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
            <Route exact path="/sports" element={<News doneProgress={doneProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
            <Route exact path="/technology" element={<News doneProgress={doneProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>


          </Routes>


        </Router>
      </div>
    )
  }

export default App