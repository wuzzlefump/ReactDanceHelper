import React, {useState,useEffect} from "react"
import "./App.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Dances from"./Dances.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Body from "./Components/Body/body"
import Table from "react-bootstrap/Table"

function App() {

  const [pageState,setPageState]=useState(Dances[43])

  const pageChange=(e)=>{
    console.log(pageState)
    let x = e.target.name 
    let y = parseInt(x)
    console.log(y)
    setPageState(Dances[y-1])
    
  }
  const navChange=(e)=>{
    let x = parseInt(e.target.id)
    console.log(x)
    setPageState(Dances[parseInt(x)-1])
    console.log(pageState)
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
<Container className="Page" style={{marginTop: "2%"}}>
    <Row>
      <Col sm="12" md="4">
        <Jumbotron className="go">
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
          <Body description={pageState.description} extra={pageState.extra} name={pageState.name} picture={pageState.picture} music={pageState.music} history={pageState.history} bodyId={pageState.id} />
        </Jumbotron>
      </Col>
    </Row>
  </Container>
{/* Footer */}
    </div>);
}

export default App;
