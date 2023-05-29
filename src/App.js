import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card,Button,Row,Image ,Col, Container, Nav ,Navbar,NavDropdown} from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image src="https://placekitten.com/640/360" fluid rounded
          className=''
          />

        </Col>
        <Col sm={5}>
          <h1 className='font-weight-light'>TagLine</h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna 
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                 sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.</p>
          <Button variant='outline-primary'>Action Button</Button>
        </Col>
      </Row>
      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
      <Card.Body>“Lorem Ipsum doesn’t
         exist because people think the
          content is meaningless window dressing,
           only there to be decorated by designers
            who can’t be bothered to read. 
            Lorem Ipsum exists because words 
            are powerful. If you fill up your page
             with draft copy about your client’s business, t
             hey will read it. They will comment on it. 
             They will be inexorably drawn to it. Presented
              the wrong way,
         draft copy can send your design
          review off the rails.”</Card.Body>
      </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/640/360" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/640/360" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/640/360" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        
      </Row>
    </Container>
      </main>
      <footer className='py-5  my-5 bg-dark'>
        <Container className='px-4 '>
          <p className='text-center text-white'>
            Copyright &copy; Your Website 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
