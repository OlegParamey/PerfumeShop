import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getPerfumeList } from './redux/slices/perfumesSlice'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Perfumes from './components/PerfumeCatalog/Perfumes'
import SinglePerfume from './components/PerfumeCatalog/SinglePerfume/SinglePerfume'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'
import PaymentMenu from './components/Cart/DeliveryAndPayment/Payment/PaymentMenu'
import CreatePerfumeCardWithID from './utils/CreatePerfumeCardWithID'
import './App.css'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchPerfumesData() {
            try {
                const res = await axios.get('http://localhost:4000/perfumes')
                dispatch(
                    getPerfumeList(
                        res.data.map((element) =>
                            CreatePerfumeCardWithID(element)
                        )
                    )
                )
            } catch (error) {
                console.error('Failed to fetch perfumes data:', error)
            }
        }
        fetchPerfumesData()
    }, [dispatch])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" index element={<Home />}></Route>
                    <Route path="perfumes" element={<Perfumes />}></Route>
                    <Route
                        path="perfumes/:slug"
                        element={<SinglePerfume />}
                    ></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contacts" element={<Contacts />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route
                        path="cart/payment"
                        element={<PaymentMenu />}
                    ></Route>

                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
