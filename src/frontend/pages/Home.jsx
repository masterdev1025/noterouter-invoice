import React from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { Container } from "../components/Container";
import { HomeContent } from './Home.styled'
import InvoiceList from '../pages/InvoiceList/InvoiceList'
import InvoiceCreate from '../pages/InvoiceCreate/InvoiceCreate'
import InvoiceEdit from '../pages/InvoiceEdit/InvoiceEdit'
import InvoiceUpdate from '../pages/InvoiceUpdate/InvoiceUupdate'
const Home = () => {
    return (
        <Container>
            <HomeContent>
                <Routes>
                    <Route path="/invoices" element={<InvoiceList />} />
                    <Route path="/invoices/create" element={<InvoiceCreate />} />
                    <Route path="/invoices/:id/edit" element={<InvoiceEdit />} />
                    <Route path="/invoices/:id/update" element={<InvoiceUpdate />} />
                    <Route path="/" element={<Navigate replace to="/invoices" />} />
                </Routes>
            </HomeContent>
        </Container>
    )
}

export default Home;