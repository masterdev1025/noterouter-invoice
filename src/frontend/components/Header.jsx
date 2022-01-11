import { Container } from "./Container"
import { HeaderContent, HeaderLogo } from "./Header.styled"
const Header = () => {
    return (
        <Container backgroundColor="#7c5df9">
            <HeaderContent>
                <HeaderLogo>NoteRouter</HeaderLogo>
            </HeaderContent>
        </Container>

    )
}

export default Header;