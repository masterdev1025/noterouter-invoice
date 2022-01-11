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
    return (
        <>
            <InvoiceTopBar>
                <InvoiceListTitleWrapper>
                    <InvoiceListTitle>Invoices</InvoiceListTitle>
                    <InvoiceListCounter>There are 7 total invoices</InvoiceListCounter>
                </InvoiceListTitleWrapper>
                <InvoiceCreateButton>New Invoice</InvoiceCreateButton>
            </InvoiceTopBar>
            {
                [1, 2, 3, 4, 5].map((item) => (
                    <InvoiceItem key = {item}/>
                ))
            }

        </>
    )
}

export default InvoiceList