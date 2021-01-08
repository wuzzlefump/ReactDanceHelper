import React, {useState,useEffect} from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Dances from"./Dances.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"

function App() {

  const [pageState,setPageState]=useState(Dances[43])

  const pageChange=(e)=>{
    let x = e.target.name 
    let y = parseInt(x)
    console.log(y)
    setPageState(Dances[y-1])
  }
  const navChange=(e)=>{
    let x = parseInt(e.target.id)
    console.log(x)
    setPageState(Dances[x-1])
  }
  useEffect(()=>{

  },[pageState])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand   value="Home"><img onClick={pageChange}  name="44" src="https://img.icons8.com/ios-glyphs/30/000000/ballroom-dance.png"/></Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav >
        <Nav.Link name="45" onClick={pageChange} value="American">American</Nav.Link>
        <Nav.Link name="46" onClick={pageChange} value="International" >International</Nav.Link>
        <Nav.Link name="47" onClick={pageChange} value="Other">Other</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
{/* Nav */}
{/* page */}
<Container style={{marginTop: "2%"}}>
    <Row>
      <Col sm="12" md="4">
        <Jumbotron>
    <Table striped bordered hover variant="dark">
    <thead>
    <tr>
      <th>Check Out These Types of Dances</th>
    </tr>
  </thead>
  <tbody>
        {pageState.array.map(item=>(<tr>
          <td onClick={navChange} id={item.id}>{item.name}</td></tr>
        ))}
  </tbody>
    </Table>
        </Jumbotron>
      </Col>
      <Col sm="12" md="8">
        <Jumbotron>

        </Jumbotron>
      </Col>
    </Row>
  </Container>
{/* Footer */}
    </div>);
}

export default App;
