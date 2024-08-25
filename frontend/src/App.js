import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Perfumes from './components/PerfumeCatalog/Perfumes'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'
import './App.css'

function App() {
    const [perfumesData, setPerfumesData] = useState(null)

    //Here should be a fetch API
    // useEffect(() => {
    //     ;(async function fetchPerfumesData() {
    //         const res = await axios.get('http://localhost:4000/perfumes')
    //         setPerfumesData(res.data)
    //     })()
    // }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route
                        path="perfumes"
                        element={<Perfumes perfumesData={perfumesData} />}
                    ></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contacts" element={<Contacts />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
