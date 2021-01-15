import React, {useEffect, useState} from 'react'
import './body.css'
import MusicBox from '../Music/music'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Ballroom from './assets/Ballroom.jpg'
import Roses from './assets/Roses.jpg'
import Earth from './assets/Earth.jpg'
import Street from './assets/Street.jpg'
import Waltz from './assets/Waltz.jpg'
import Foxtrot from './assets/Foxtrot.jpg'
import Speed from './assets/Speed.jpg'
import Quickstep from './assets/Quickstep.png'
import Paso from './assets/Paso.png'
import Rumba from './assets/Rumba.png'
import ChaCha from './assets/ChaCha.png'
import Fire from './assets/Fire.png' 
import Retro from './assets/Retro.png'
import Country from './assets/Country.png'
import Bar from './assets/Bar.png'
import Panda from './assets/Panda.png'
import Charleston from './assets/Charleston.png'
import Polka from './assets/Polka.png'
import Carolina from './assets/Carolina.png'
import Brazil from './assets/Brazil.png'
import Pepper from './assets/Pepper.png'
import Bolero from './assets/Bolero.png'
import WCS from './assets/WCS.png'
function Body({picture, extra,description,name,music,history, bodyId}){

    const [currentImage, setCurrentImage]=useState()
    const [currentPic, setCurrentPic]=useState()

    let imgList = [{img:"Ballroom", variable:Ballroom},{img:"Tango", variable:Roses},{img:"Earth", variable:Earth},{img:"Street", variable: Street},{img:"Waltz", variable: Waltz},{img:"Foxtrot", variable: Foxtrot},{img:"Speed", variable:Speed},{img:"Quick", variable:Quickstep},{img:"Paso", variable:Paso},{img:"Rumba", variable:Rumba},{img:"ChaCha", variable:ChaCha},{img:"Fire", variable:Fire}, {img:"Retro", variable:Retro}, {img:"Country", variable:Country},{img:"Bar", variable:Bar},{img:"Panda", variable:Panda},{img:"Charleston", variable:Charleston},{img:"Polka", variable:Polka}, {img:"Carolina", variable:Carolina}, {img:"Brazil", variable:Brazil},  {img:"Pepper", variable:Pepper}, {img:"Bolero", variable:Bolero}, {img:"WCS", variable:WCS}]
     
    const findImage =()=>{
        imgList.forEach(item=>{
            if(item.img===picture){
                setCurrentImage(item.variable)
                setCurrentPic(item.img)
            }
        })
    }

    useEffect(()=>{
        findImage()
    },[picture])


return(
    <Card className={currentPic+"One"}>
    <Card.Img src={currentImage}  alt="Card image" />
    <Card.ImgOverlay>
        <Card.Title className={currentPic} >{name}</Card.Title>
        </Card.ImgOverlay>
    <Card.Body>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    {/* accordian here */}
    <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header className="h">
            <Accordion.Toggle  as={Button} variant="link" eventKey="0">
                Music Box!
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse style={{marginLeft:"30%", marginTop:"5%"}} eventKey="0">
                <MusicBox music={music} name={name}/>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header className="h">
            <Accordion.Toggle  as={Button} variant="link" eventKey="1">
                Click here for Paul's Opinion
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>{extra}</Card.Body>
            </Accordion.Collapse>
        </Card>
        {(parseInt(bodyId)<44) ? <Card>
            <Card.Header className="h">
            <Accordion.Toggle  as={Button} variant="link" eventKey="2">
                Click here for links to more resources
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <h5>History:</h5>
                    <br></br>
                    <a href={history.link}>{history.link}</a>
                    <br></br>
                    <h5>Video:</h5>
                    <br></br>
                    <a href={history.vid}>{history.vid}</a>
                </Card.Body>
            </Accordion.Collapse>
        </Card> : null}
        </Accordion>
    {/* accordian here */}
  </Card>
)
}
export default Body;