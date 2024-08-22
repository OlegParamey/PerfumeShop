import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Perfumes from './components/PerfumeCatalog/Perfumes'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="perfumes" element={<Perfumes />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="contacts" element={<Contacts />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
