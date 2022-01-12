import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Label } from '../../components/Lable'
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
    const [filterStatus, setFilterStatus] = useState('all')
    const navigate = useNavigate()
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
    const onChangeStatus = (e) => {
        setFilterStatus(e.value)
    }
    const filterFun = (item) => {
        if (filterStatus == 'all') return true;
        else {
            return item.status === filterStatus
        }
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
                <Label color="white" size="normal">Filter By Status</Label>
                <Dropdown onChange={onChangeStatus} placeholder="Select an option" options={['all', 'paid', 'pending', 'draft']} value={filterStatus}></Dropdown>
                <InvoiceCreateButton onClick={() => navigate('/invoices/create')}>New Invoice</InvoiceCreateButton>
            </InvoiceTopBar>
            {
                invoices && invoices.filter(filterFun).map((invoice) => (
                    <InvoiceItem key={invoice.id} invoice={invoice} delete={deleteInvoice} />
                ))
            }

        </>
    )
}

export default InvoiceList