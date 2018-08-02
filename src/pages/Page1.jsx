import React from 'react'; 

const style = {
    width: "500px",
    height: "500px", 
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "orange", 
    color: "white", 
    fontSize: "18px"
}
export default class Page1 extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            value: "unclicked"
        }
    }

    render() {
        return (
            <div style={style}>
                This is page 1

                <button onClick={() => this.setState({
                    value: "clicked"
                })}>{this.state.value}</button>
            </div>
        )
    }
}