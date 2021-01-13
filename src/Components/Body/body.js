import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Ballroom from './assets/Ballroom.jpg'
import Roses from './assets/Roses.jpg'
import Earth from './assets/Earth.jpg'
import Street from './assets/Street.jpg'
import Waltz from './assets/Waltz.jpg'

function Body({picture}){

    const [currentImage, setCurrentImage]=useState()
    const [currentColor, setCurrentColor]=useState()

    let imgList = [{img:"Ballroom", variable:Ballroom, color:"white"},{img:"Tango", variable:Roses, color:"red"},{img:"Earth", variable:Earth, color:"white"},{img:"Street", variable: Street, color:"cyan"},{img:"Waltz", variable: Waltz, color:"white"}]

    const findImage =()=>{
        imgList.forEach(item=>{
            if(item.img===picture){
                setCurrentImage(item.variable)
                setCurrentColor(item.color)
            }
        })
    }

    useEffect(()=>{
        findImage()
    },[picture])


return(
    <Card>
    <Card.Img src={currentImage} alt="Card image" />
    <Card.ImgOverlay>
        <Card.Title style = {{color:currentColor }}>Card title</Card.Title>
        </Card.ImgOverlay>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
)
}
export default Body;