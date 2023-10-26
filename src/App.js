import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./components/Screen"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/hermantaylorsvision.com/" element={<Screen/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App