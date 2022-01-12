import { Container } from "./Container"
import { HeaderContent, HeaderLogo } from "./Header.styled"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    return (
        <Container backgroundColor="#7c5df9">
            <HeaderContent>
                <HeaderLogo onClick={ () => {navigate('/')}}>NoteRouter</HeaderLogo>
            </HeaderContent>
        </Container>

    )
}

export default Header;