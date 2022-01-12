import { 
    InvoiceItemWrapper, 
    InvoiceItemCell, 
    InvoiceLabel, 
    InvoiceStatusBox ,
    ActionCell,
    ActionButton
} from './InvoiceItem.styled'
const InvoiceItem = (props) => {
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
                   <ActionButton color = "white">Edit</ActionButton>
                   <ActionButton color = "red" onClick={() =>props.delete(invoice._id)}>Delete</ActionButton>
               </ActionCell>
            </InvoiceItemCell>
        </InvoiceItemWrapper>
    )
}

export default InvoiceItem;