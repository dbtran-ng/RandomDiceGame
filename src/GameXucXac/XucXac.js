import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.arrayXucXac.map((xucXac, index) => {
            return <img key={index} className="ml-2" style={{width: 50, height: 50}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
        })
    }

    
    render() {
        return (
            <div>
               {this.renderXucXac()}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        arrayXucXac: state.XucXacReducer.arrayXucXac
    }
}
export default connect(mapStateToProps)(XucXac)
