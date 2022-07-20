import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {url,name,price,desc} = this.props.Glasses
        return (
            <div className="vglasses__card">
                <div className="mb-2 text-right mt-2 mr-2" style={{ display: "none" }}>
                    <button className="btn btn-warning">Before</button>
                    <button className="btn btn-warning">After</button>
                </div>
                <div className="vglasses__model" style={{ background: `url("./glassesImage/model.jpg")` }}>
                    <img id="avatar-glasses" src={url} />
                </div>
                <div id="glassesInfo" className="vglasses__info">
                    <h4>{name}</h4>
                    <div className="gia_brand">
                        <span className="btn btn-warning mr-3">{price} $</span>
                    </div>
                    <p>{desc}</p>
                </div>

            </div>
        )
    }
}
