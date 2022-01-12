import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Label
} from '../../components/Lable'
import { Box } from '../../components/Box'
import { Status } from '../../components/Status'
import { Button } from '../../components/Button'
import { Row, Col } from '../../components/Grid'
import {
    InvoiceHeader,
    InvoiceHeaderStatus,
    InvoiceContent,
    InvoiceItemsContent,
    InvoiceItemsTotalWrapper
} from './InvoiceUpdate.styled'

const InvoiceUpdate = () => {
    const [invoice, setInvoice] = useState(null)
    const params = useParams();
    const getInvoiceData = async () => {
        const api = await fetch(`http://localhost:3001/invoices/${params.id}`);
        const apiRes = await api.json();
        if (apiRes) {
            setInvoice(apiRes)
        }
    }
    useEffect(() => {
        getInvoiceData();
    }, [])
    return (
        <>
            <InvoiceHeader>
                <InvoiceHeaderStatus>
                    <Label color="white" size="medium">Status</Label> &nbsp;
                    <Status status={invoice?.status}>{invoice?.status}</Status>
                </InvoiceHeaderStatus>
                <Button variant="secondary">Edit</Button>
                <Button variant="error">Delete</Button>
                <Button variant="primary">Mark as Paid</Button>
            </InvoiceHeader>
            <InvoiceContent>
                <Box><Label color="white" size="large">{invoice?.id}</Label></Box>
                <Box><Label color="#dee3f9" size="small">{invoice?.description}</Label></Box>
                <Row>
                    <Col per="27">
                        <Box><Label color="#dee3f9" size="small">Invoice Date</Label></Box>
                        <Box><Label color="white" size="medium">{invoice?.createdAt}</Label></Box>
                        <br />
                        <Box><Label color="#dee3f9" size="small">Payment Due</Label></Box>
                        <Box><Label color="white" size="medium">{invoice?.paymentDue}</Label></Box>
                    </Col>
                    <Col per="27">
                        <Box><Label color="#dee3f9" size="small">Bill To</Label></Box>
                        <Box><Label color="white" size="medium">{invoice?.clientName}</Label></Box>
                        <Box><Label color="#dee3f9" size="small">{invoice?.clientAddress?.street}</Label></Box>
                        <Box><Label color="#dee3f9" size="small">{invoice?.clientAddress?.city}</Label></Box>
                        <Box><Label color="#dee3f9" size="small">{invoice?.clientAddress?.postCode}</Label></Box>
                        <Box><Label color="#dee3f9" size="small">{invoice?.clientAddress?.country}</Label></Box>

                    </Col>
                    <Col per="27">
                        <Box><Label color="#dee3f9" size="small">Sent to</Label></Box>
                        <Box><Label color="white" size="medium">{invoice?.clientEmail}</Label></Box>
                    </Col>
                </Row>
                <InvoiceItemsContent>
                    <Row>
                        <Col per="40">
                            <Label color="#dee3f9" size="normal">Item Name</Label>
                        </Col>
                        <Col per="15">
                            <Label color="#dee3f9" size="normal">Qty</Label>
                        </Col>
                        <Col per="15">
                            <Label color="#dee3f9" size="normal">Price</Label>
                        </Col>
                        <Col per="15">
                            <Label color="#dee3f9" size="normal">Total</Label>
                        </Col>
                    </Row>
                    {
                        invoice?.items && invoice.items.map((item,  index) => (
                            <Row key = {index}>
                                <Col per="40">
                                    <Label color="white" size="medium">{item.name}</Label>
                                </Col>
                                <Col per="15">
                                    <Label color="white" size="normal">{item.quantity}</Label>
                                </Col>
                                <Col per="15">
                                    <Label color="white" size="normal">${item.price}</Label>
                                </Col>
                                <Col per="15">
                                    <Label color="white" size="normal">${item.total}</Label>
                                </Col>
                            </Row>
                        ))
                    }
                  
                </InvoiceItemsContent>
                <InvoiceItemsTotalWrapper>
                        <Label color = "white" size = "normal">Amount Due</Label>
                        <Label color = "white" size = "large">${invoice?.total}</Label>
                    </InvoiceItemsTotalWrapper>
            </InvoiceContent>
        </>
    )
}

export default InvoiceUpdate;