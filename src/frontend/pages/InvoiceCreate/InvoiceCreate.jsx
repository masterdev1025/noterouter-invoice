import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Row, Col } from '../../components/Grid';
import { Label } from '../../components/Lable';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Box } from '../../components/Box';

const InvoiceCreate = () => {
    const navigate = useNavigate();
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
    const [isBusy, setBusy] = useState(false);
    const [required, setRequired] = useState([]);
    const onChangeFun = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        })
        setRequired(required.filter(item => item !== e.target.name))
    }
    const onChangeItem = (e, index) => {
        var _invoice = { ...invoice };
        _invoice.items[index][e.target.name] = e.target.value;
        if (_invoice.items[index].qty && _invoice.items[index].price) {
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
        var _invoice = { ...invoice };
        _invoice.items = _invoice.items.filter((item, _index) => index !== _index)
        setInvoice(_invoice)
    }
    const isUnValidate = (name) => {
        return required.includes(name);
    }
    const save = (status) => {
        var total = 0;
        for (let item of invoice.items) {
            total += item.total
        }
        var submitData = {
            "paymentDue": invoice.paymentDue,
            "description": invoice.description,
            "paymentTerms": invoice.paymentTerms,
            "clientName": invoice.clientName,
            "clientEmail": invoice.clientEmail,
            "status": status,
            "senderAddress": {
                "street": invoice.street1,
                "city": invoice.city1,
                "postCode": invoice.postCode1,
                "country": invoice.country1
            },
            "senderAddress": {
                "street": invoice.street2,
                "city": invoice.city2,
                "postCode": invoice.postCode2,
                "country": invoice.country2
            },
            "items": invoice.items,
            "total": total
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submitData)
        };
        try {
            fetch('http://localhost:3001/invoices/create', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setBusy(false)
                    if (data && data._id) navigate('/')
                });
        } catch (err) {
            
        }

    }
    const saveAndSend = () => {
        var required = [];
        for (let input in invoice) {
            if (input == "items" || input == "status") continue;
            if (!invoice[input]) required.push(input)
        }
        if (required.length == 0) {
            setBusy(true);
            save("pending");
        }
        setRequired(required)
    }
    return (
        <>
            <Box><Label color="white" size="large">New Invoice</Label></Box>
            <Box><Label color="#7c5cfb" size="medium">Bill From</Label></Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Street Address</Label></Box>
                <Input value={invoice.street1} name="street1" onChange={onChangeFun} error={isUnValidate("street1")} />
            </Box>
            <Row>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">City</Label></Box>
                    <Input value={invoice.city1} name="city1" onChange={onChangeFun} error={isUnValidate("city1")} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Post Code</Label></Box>
                    <Input value={invoice.postCode1} name="postCode1" onChange={onChangeFun} error={isUnValidate("postCode1")} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Country</Label></Box>
                    <Input value={invoice.country1} name="country1" onChange={onChangeFun} error={isUnValidate("country1")} />
                </Col>
            </Row>
            <Box><Label color="#7c5cfb" size="medium">Bill To</Label></Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Client's Name</Label></Box>
                <Input value={invoice.clientName} name="clientName" onChange={onChangeFun} error={isUnValidate("clientName")} />
            </Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Client's Email</Label></Box>
                <Input type="email" value={invoice.clientEmail} name="clientEmail" onChange={onChangeFun} error={isUnValidate("clientEmail")} />
            </Box>
            <Box>
                <Box><Label color="#dde2f6" size="normal">Street Address</Label></Box>
                <Input value={invoice.street2} name="street2" onChange={onChangeFun} error={isUnValidate("street2")} />
            </Box>
            <Row>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">City</Label></Box>
                    <Input value={invoice.city2} name="city2" onChange={onChangeFun} error={isUnValidate("city2")} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Post Code</Label></Box>
                    <Input value={invoice.postCode2} name="postCode2" onChange={onChangeFun} error={isUnValidate("postCode2")} />
                </Col>
                <Col per="30">
                    <Box><Label color="#dde2f6" size="normal">Country</Label></Box>
                    <Input value={invoice.country2} name="country2" onChange={onChangeFun} error={isUnValidate("country2")} />
                </Col>
            </Row>
            <br />
            <Row>
                <Col per="45">
                    <Box><Label color="#dde2f6">Invoice Date</Label></Box>
                    <Input type="date" value={invoice.paymentdue} name="paymentDue" onChange={onChangeFun} error={isUnValidate("paymentDue")} />
                </Col>
                <Col per="45">
                    <Box><Label color="#dde2f6">Payment Terms</Label></Box>
                    <Input type="number" value={invoice.paymentTerms} name="paymentTerms" onChange={onChangeFun} error={isUnValidate("paymentTerms")} />
                </Col>
            </Row>
            <Box>
                <Box><Label color="#dde2f6">Project Description</Label></Box>
                <Input value={invoice.description} name="description" onChange={onChangeFun} error={isUnValidate("description")} />
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
                <Col per="5"></Col>
            </Row>
            {
                invoice.items && invoice.items.map((item, index) => (
                    <Row key={index}>
                        <Col per="35">
                            <Input value={item.name} name="name" onChange={e => onChangeItem(e, index)} />
                        </Col>
                        <Col per="15">
                            <Input type="number" value={item.qty} name="qty" onChange={e => onChangeItem(e, index)} />
                        </Col>
                        <Col per="15">
                            <Input type="number" value={item.price} name="price" onChange={e => onChangeItem(e, index)} />
                        </Col>
                        <Col per="15">
                            <Input type="number" value={item.total} readOnly />
                        </Col>
                        <Col per="5" >
                            <Button variant="dark" onClick={() => removeItem(index)}>X</Button>
                        </Col>
                    </Row>
                ))
            }
            <br />
            <Button variant="dark" onClick={addItem}>+ Add New Item</Button>
            <br />
            <Row>
                <Col per="20">
                    <Button variant="secondary">Discard</Button>
                </Col>
                <Col per="20">
                </Col>
                <Col per="20">
                    <Button variant="dark" onClick={() => { save("draft") }}>Save as Draft</Button>
                </Col>
                <Col per="20">
                    <Button variant="primary" onClick={saveAndSend}>Save & Send</Button>
                </Col>
            </Row>

        </>
    )
}

export default InvoiceCreate;