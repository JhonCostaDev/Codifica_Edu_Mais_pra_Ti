import { BrowserRouter, Routes, Route} from "react-router-dom"
import RootLayouts from "./layouts/RootLayouts"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Post from "./pages/Post"



export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayouts/>}>
        <Route index element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"post:id"} element={<Post />} />
        
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// export default App
