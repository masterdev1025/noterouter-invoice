import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate
} from 'react-router-dom';
import { Container } from "../components/Container";
import { HomeContent } from './Home.styled'
import InvoiceList from '../pages/InvoiceList/InvoiceList'
import InvoiceCreate from '../pages/InvoiceCreate/InvoiceCreate'
import InvoiceEdit from '../pages/InvoiceEdit/InvoiceEdit'
const Home = () => {
    return (
        <Container>
            <HomeContent>
                <Router>
                    <Routes>
                        <Route path="/invoices" element = {<InvoiceList/>} />
                        <Route path="/invoices/create" element = {<InvoiceCreate/>} />
                        <Route path="/invoices/:id/edit" element = {<InvoiceEdit/>} />
                        <Route path="/" element={<Navigate replace to="/invoices" />} />
                    </Routes>
                </Router>
            </HomeContent>
        </Container>
    )
}

export default Home;