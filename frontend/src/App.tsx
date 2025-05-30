
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Appbar } from './components/Appbar'
import { Publish } from './pages/Publish'
import { Home } from './pages/Home'


function App() {


  return <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/blog/:id" element={<Blog />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/publish" element={<Publish />}/>
        </Routes>
    </BrowserRouter>
    </div>
}

export default App
