import React, { Component } from "react"
import Card from "../Card/Card"
import "./CardContainer.css"
import { connect } from "react-redux"

export class CardContainer extends Component{
  render(){
    return(
      <div className="card-container"> {
        this.props.houses.map(house => {
          return <Card house={house}/>
        })
      }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
    houses: state.houses
})

export default connect(mapStateToProps)(CardContainer)

