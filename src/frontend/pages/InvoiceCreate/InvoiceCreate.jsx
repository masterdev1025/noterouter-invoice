import React, { useState, useEffect } from 'react';
import { Row, Col } from '../../components/Grid';
import { Label } from '../../components/Lable';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Box } from '../../components/Box';
import { AddItemButton } from './InvoceCreate.styled'
const InvoiceCreate = () => {
    const [invoice, setInvoice] = useState({
        "paymentDue": "",
        "description": "",
        "paymentTerms": "",
        "clientName": "",
        "clientEmail": "",
        "status": "",
        "street1": "",
        "city1": "",
        "postCode1": "",
        "country1": "",
        "street2": "",
        "city2": "",
        "postCode2": "",
        "country2": "",
        "items": []
    })
    const onChangeFun = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        })
    }
    const onChangeItem = (e, index) => {
       var _invoice = {...invoice};
       _invoice.items[index][e.target.name] = e.target.value;
       if( _invoice.items[index].qty && _invoice.items[index].price ){
        _invoice.items[index].total = _invoice.items[index].qty * _invoice.items[index].price;
       }
       setInvoice(_invoice)
    }
    const addItem = () => {
        setInvoice({
            ...invoice,
            items: [
                ...invoice.items,
                {
                    name: '',
                    qty: '',
                    price: '',
                    total: ''
                }
            ]
        })
    }
    const removeItem = (index) => {
        var _invoice = {...invoice};
        _invoice.items = _invoice.items.filter((item, _index) => index !== _index)
        setInvoice(_invoice)
    }
    return (
        <>
            <Box><Label color="white" size="large">New Invoice</Label></Box>
            <Box><Label color="#7c5cfb" size="medium">Bill From</Label></Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Street Address</Label></Box>
                <Input value={invoice.street1} name="street1" onChange={onChangeFun} />
            </Box>
            <Row>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">City</Label></Box>
                    <Input value={invoice.city1} name="city1" onChange={onChangeFun} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Post Code</Label></Box>
                    <Input value={invoice.postCode1} name="postCode1" onChange={onChangeFun} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Country</Label></Box>
                    <Input value={invoice.country1} name="country1" onChange={onChangeFun} />
                </Col>
            </Row>
            <Box><Label color="#7c5cfb" size="medium">Bill To</Label></Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Client's Name</Label></Box>
                <Input value={invoice.clientName} name="clientName" onChange={onChangeFun} />
            </Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Client's Email</Label></Box>
                <Input value={invoice.clientEmail} name="clientEmail" onChange={onChangeFun} />
            </Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Street Address</Label></Box>
                <Input value={invoice.street2} name="street2" onChange={onChangeFun} />
            </Box>
            <Row>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">City</Label></Box>
                    <Input value={invoice.city2} name="city2" onChange={onChangeFun} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Post Code</Label></Box>
                    <Input value={invoice.postCode2} name="postCode2" onChange={onChangeFun} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Country</Label></Box>
                    <Input value={invoice.country2} name="country2" onChange={onChangeFun} />
                </Col>
            </Row>
            <br />
            <Row>
                <Col per="45">
                    <Box><Label color="#dde2f6">Invoice Date</Label></Box>
                    <Input value={invoice.paymentdue} name="paymentdue" onChange={onChangeFun} />
                </Col>
                <Col per="45">
                    <Box><Label color="#dde2f6">Payment Terms</Label></Box>
                    <Input value={invoice.paymentTerms} name="paymentTerms" onChange={onChangeFun} />
                </Col>
            </Row>
            <Box>
                <Box><Label color="#dde2f6">Project Description</Label></Box>
                <Input value={invoice.description} name="description" onChange={onChangeFun} />
            </Box>
            <br />
            <Box><Label color="#777e98" size="medium">Item List</Label></Box>
            <Row>
                <Col per="35">
                    <Label color="white" size="normal">Item Name</Label>
                </Col>
                <Col per="15">
                    <Label color="white" size="normal">Qty</Label>
                </Col>
                <Col per="15">
                    <Label color="white" size="normal">Price</Label>
                </Col>
                <Col per="15">
                    <Label color="white" size="normal">Total</Label>
                </Col>
                <Col per ="5"></Col>
            </Row>
            {
                invoice.items && invoice.items.map((item, index) => (
                    <Row key={index}>
                        <Col per="35">
                            <Input value={item.name} name = "name" onChange = {e => onChangeItem(e, index)}/>
                        </Col>
                        <Col per="15">
                            <Input type = "number" value={item.qty}  name = "qty" onChange = {e => onChangeItem(e, index)}/>
                        </Col>
                        <Col per="15">
                            <Input type = "number" value={item.price}  name = "price" onChange = {e => onChangeItem(e, index)}/>
                        </Col>
                        <Col per="15">
                            <Input type = "number" value={item.total} readOnly/>
                        </Col>
                        <Col per = "5" >
                            <Button variant = "dark" onClick = {() => removeItem(index)}>X</Button>
                        </Col>
                    </Row>
                ))
            }
            <br/>
            <Button variant="dark" onClick={addItem}>+ Add New Item</Button>
            <br/>
            <Row>
                <Col per = "20">
                    <Button variant = "secondary">Discard</Button>
                </Col>
                <Col per = "20">
                </Col>
                <Col per = "20">
                    <Button variant = "dark">Save as Draft</Button>
                </Col>
                <Col per = "20">
                    <Button variant = "primary">Save & Send</Button>
                </Col>
            </Row>

        </>
    )
}

export default InvoiceCreate;