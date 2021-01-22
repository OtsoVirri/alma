import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from '../logo.svg';

function Header({ user , onLogout }) {

  return (
    <header className="App-header">
      <Navbar sticky="top" expand="lg">
        <Container style={{padding: '0'}}>
          <Navbar.Brand href="/">
            <img src={logo} aria-hidden="true" alt="ALMA logo"></img>
            ALMA
          </Navbar.Brand>
          {user.isLoggedIn && <Navbar.Toggle aria-controls="basic-navbar-nav"><i className="fas fa-bars"></i></Navbar.Toggle>}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user.isLoggedIn &&
              <NavDropdown title={user.firstName + ' ' + user.lastName} id="basic-nav-dropdown">                      
                <NavDropdown.Item href="/profile">Käyttäjäprofiili</NavDropdown.Item>
                {user.userType === 'student' && <NavDropdown.Item href="/profile">Suoritukseni</NavDropdown.Item>}
                {user.userType === 'teacher' && <NavDropdown.Item href="/profile">Kurssihistoria</NavDropdown.Item>}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>Kirjaudu ulos</NavDropdown.Item>
              </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
  
}

export default Header;
