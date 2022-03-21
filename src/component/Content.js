import React from 'react'
// import styled from "styled-components";
import  './Content1.css'

export default class Content extends React.Component {

    // state = { num1: '', num2: '', total: '' }     // You can use a single line, or use the long way... like show below   ..
    constructor(props) {
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }


    exe1() {
        // console.log("Num1: ", this.state.num1, " + Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
        // console.log(this.state)
    }

    exe2() {
        // console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) - parseInt(this.state.num2) })
        // console.log(this.state)
    }

    exe3() {
        // console.log("Num1: ", this.state.num1, " * Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) * parseInt(this.state.num2) })
        // console.log(this.state)
    }

    exe4() {
        // console.log("Num1: ", this.state.num1, " / Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) / parseInt(this.state.num2) })
        // console.log(this.state)
    }

    render() {
        return (
            <div className="Container">
                <div className="row">
                <h1 className='App-header' >Assignment 1</h1> 
                    <div className="col-10 mx-auto col-lg-4 col-sm-8  my-5">
                         <div >
                            <label className="col-sm-3 col-form-label">Number 1: </label>
                            <input type="number" className="inputStyle b" value={this.state.num1} onChange={(eve) => { this.setState({ num1: eve.target.value }) }} />
                            <br /><br />
                            <label className="col-sm-3 col-form-label">Number 2: </label>
                            <input type="number" className="inputStyle b" value={this.state.num2} onChange={(eve) => { this.setState({ num2: eve.target.value }) }} />
                            <br /><br />

                            <button className='btn btn-outline-success me-2 ' onClick={() => { this.exe1() }}>Add </button>

                            <button className='btn btn-outline-success me-2' onClick={() => { this.exe2() }}>Subtract </button>

                            <button className='btn btn-outline-success me-2' onClick={() => { this.exe3() }}>Multiplication </button>

                            <button className='btn btn-outline-success me-2' onClick={() => { this.exe4() }}>Division </button>


                            <br /><br />

                            <input type="number" readOnly={true} className="outStyle a" defaultValue={this.state.total} />

                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



// Another way to fire the function "onClick"

{/* <button onClick = { this.exe1.bind(this) } >Add Numbers</button> */ }
