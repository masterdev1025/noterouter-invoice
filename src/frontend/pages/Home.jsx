import { Container } from "../components/Container";
import { HomeContent } from './Home.styled'
import  InvoiceList  from '../pages/InvoiceList/InvoiceList'
const Home = () => {
    return (
        <Container>
            <HomeContent>
                <InvoiceList/>
            </HomeContent>
        </Container>
    )
}

export default Home;