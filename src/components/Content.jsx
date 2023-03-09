import { Routes, Route } from "react-router-dom"

import Home from "./Home"

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Content
