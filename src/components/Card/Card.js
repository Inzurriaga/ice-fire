import React from "react"
import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <h2>{props.house.name}</h2>
            <p>{props.house.founded}</p>
            <p>{props.house.seats}</p>
            <p>{props.house.titles}</p>
            <p>{props.house.coatOfArms}</p>
            <p>{props.house.ancestralWeapons}</p>
            <p>{props.house.words}</p>
        </div>
    )
}