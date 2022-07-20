import React, { Component } from 'react'

export default class GlassList extends Component {
    render() {
        return (
            this.props.GlassesArray.map((Glasses,index) => {
                return <div onClick={() => {
                    this.props.renderState(Glasses)
                }} className="col-4 p-4 glasses__item" key={index}>
                    <img src= {Glasses.url}/>
                </div>
            })
        )
    }
}
