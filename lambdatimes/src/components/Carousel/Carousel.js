import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedImage: 0
    }
  }
  componentDidMount(){
    this.setState(preState => {
      return {
        images: carouselData

      }
    })
  }

  leftClick = () => {
    
  }

  // rightClick = () => {
  //   if(selectedImage === images.length - 1){

  //   } else {
  //     this.setState(prevState => {
  //       return {
  //         // selectedImage: prevState.
  //       }
  //     })
  //   }
  // }

  selectedImage = () => {
    return <img src={this.state.selectedImage} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.images[this.state.selectedImage]}></img>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}