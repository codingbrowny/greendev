import './App.css';
import Header from "./components/Header";
import Login from './screens/login/login';
import Container from '@mui/material/Container'

function App() {
  return (
    <div className="App">
      <Header brand="greendev"/>
      <Container>
      <Login/>
      </Container>
    </div>
  );
}

export default App;
