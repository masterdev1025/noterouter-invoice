import { InvoiceItemWrapper, InvoiceItemCell, InvoiceLabel } from './InvoiceItem.styled'
const InvoiceItem = (props) => {
    return (
        <InvoiceItemWrapper>
            <InvoiceItemCell per="15">
                <InvoiceLabel size="large">#RT3080</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">
                <InvoiceLabel size="large">Due 19 Aug 2021</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">

                <InvoiceLabel size="large">Alyso Werner</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="20">
                <InvoiceLabel size="large">$102.04</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="15">
                <InvoiceLabel size="large">Pending</InvoiceLabel>
            </InvoiceItemCell>
            <InvoiceItemCell per="10">

            </InvoiceItemCell>
        </InvoiceItemWrapper>
    )
}

export default InvoiceItem;