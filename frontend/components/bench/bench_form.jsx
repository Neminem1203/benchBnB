import React from "react";

class BenchForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description: "",
            seats: "",
            lat: this.props.lat,
            lng: this.props.lng
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createBench(this.state);
        this.props.history.push({pathname: "/"});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>Description: 
                    <input type="text" onChange={this.updateField("description")} value={this.state.description}/>
                </label>
                <br />
                <label>Number of Seats: 
                    <input type="number" onChange={this.updateField("seats")} value={this.state.seats}/>
                </label>
                <br />
                <label>Lat:
                    <input type="text" value={this.state.lat} disabled/>
                </label>
                <br />
                <label>Lng: 
                    <input type="text" value={this.state.lng} disabled/>
                </label>
                <br />
                <button>Create Bench</button>
            </form>
        )
    }
}

export default BenchForm;