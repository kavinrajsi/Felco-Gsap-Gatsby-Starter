import React, { Component } from "react"

import ServiceCard from "./ServiceCard"

// svg icons
import sketch from "../../../images/servic/001-sketch.svg"
import business from "../../../images/servic/002-bullhorn.svg"
import blueprint from "../../../images/servic/003-blueprint.svg"

import styled from "styled-components"

import { FlexContainer } from "../../../utils"

class ServiceList extends Component {
  state = {
    services: [
      {
        id: 1,
        img: sketch,
        title: "Sketch",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at soluta odit, quidem facere possimus sapiente, in error deleniti consequuntur, modi eos sunt fugiat.",
      },
      {
        id: 2,
        img: business,
        title: "Build",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at soluta odit, quidem facere possimus sapiente, in error deleniti consequuntur, modi eos sunt fugiat.",
      },
      {
        id: 3,
        img: blueprint,
        title: "Launch",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic at soluta odit, quidem facere possimus sapiente, in error deleniti consequuntur, modi eos sunt fugiat.",
      },
    ],
  }
  render() {
    return (
      <CardGlobal>
        {this.state.services.map(service => {
          return (
            <ServiceCard
              key={service.id}
              img={service.img}
              title={service.title}
              content={service.content}
            />
          )
        })}
      </CardGlobal>
    )
  }
}

const CardGlobal = styled.div`
  /* position: relative; */
  width: 70%; /* individual card width */
  display: flex; /* all card flex */
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin: 20px; */
`

export default ServiceList
