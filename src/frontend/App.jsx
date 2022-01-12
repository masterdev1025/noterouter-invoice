import { Container } from './components/Container'
import Header from './components/Header';
import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
    return (
        <Router>
            <Header/>
            <Home/>
        </Router>
    )
}

export default App;