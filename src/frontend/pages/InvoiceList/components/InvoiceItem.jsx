import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    InvoiceItemWrapper, 
    InvoiceItemCell, 
    InvoiceLabel, 
    InvoiceStatusBox ,
    ActionCell,
    ActionButton,
    EmptyFlexDiv
} from './InvoiceItem.styled'
const InvoiceItem = (props) => {
    const navigate = useNavigate();
    const invoice = props.invoice;
    return (
        <InvoiceItemWrapper>
            <InvoiceItemCell per="15">
                <InvoiceLabel size="medium">#{invoice.id}</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">
                <InvoiceLabel size="small">Due {invoice.paymentDue}</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">

                <InvoiceLabel size="small">{invoice.clientName}</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">
                <InvoiceLabel size="large">${invoice.total}</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="10">
                <InvoiceLabel size="large">
                    <InvoiceStatusBox status={invoice.status}>
                        {invoice.status}
                    </InvoiceStatusBox>
                </InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="15">
               <ActionCell>
                   {
                       invoice.status === 'pending' ? <ActionButton color = "white" onClick={()=>navigate(`/invoices/${invoice._id}/update`)}>Update</ActionButton> : <EmptyFlexDiv/>
                   }
                   
                   <ActionButton color = "red" onClick={() =>props.delete(invoice._id)}>Delete</ActionButton>
               </ActionCell>
            </InvoiceItemCell>
        </InvoiceItemWrapper>
    )
}

export default InvoiceItem;