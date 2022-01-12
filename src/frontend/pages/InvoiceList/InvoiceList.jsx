import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
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
    const deleteReq = (_id) => {
        fetch(`http://localhost:3001/invoices/${_id}`, { method: 'DELETE' }).then((res) => {
            if (res && res.status == 200) {
                fetchData();
            }
        })
    }
    const deleteInvoice = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                return deleteReq(_id)
            }
        });

    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <InvoiceTopBar>
                <InvoiceListTitleWrapper>
                    <InvoiceListTitle>Invoices</InvoiceListTitle>
                    <InvoiceListCounter>There are {invoices ? invoices.length : 0} total invoices</InvoiceListCounter>
                </InvoiceListTitleWrapper>
                <InvoiceCreateButton>New Invoice</InvoiceCreateButton>
            </InvoiceTopBar>
            {
                invoices && invoices.map((invoice) => (
                    <InvoiceItem key={invoice.id} invoice={invoice} delete={deleteInvoice} />
                ))
            }

        </>
    )
}

export default InvoiceList