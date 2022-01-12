import React, { useState, useEffect } from 'react'
import {
    InvoiceTopBar,
    InvoiceListTitleWrapper,
    InvoiceListTitle,
    InvoiceListCounter,
    InvoiceCreateButton
} from './InvoiceList.styled'
import InvoiceItem from './components/InvoiceItem'
const InvoiceList = () => {
    const [invoices, setInvoices] = useState(null);
    const fetchData = async () => {
        const api = await fetch('http://localhost:3001/invoices');
        const apiRes = await api.json();
        setInvoices(apiRes)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <InvoiceTopBar>
                <InvoiceListTitleWrapper>
                    <InvoiceListTitle>Invoices</InvoiceListTitle>
                    <InvoiceListCounter>There are { invoices ? invoices.length : 0 } total invoices</InvoiceListCounter>
                </InvoiceListTitleWrapper>
                <InvoiceCreateButton>New Invoice</InvoiceCreateButton>
            </InvoiceTopBar>
            {
                invoices && invoices.map((invoice) => (
                    <InvoiceItem key = {invoice.id} invoice = {invoice}/>
                ))
            }

        </>
    )
}

export default InvoiceList