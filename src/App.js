import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [{
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 0
            },
            {
                id: 3,
                value: 0
            },
            {
                id: 4,
                value: 0
            }
        ]
    };
    constructor(props) {
        super(props);
        console.log("App - Constructor");
    }
    componentDidMount() {
        console.log("App - Mounted");
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {
            ...counter
        };
        counters[index].value++;
        this.setState({
            counters
        });
    };
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {
            ...counter
        };
        if (counters[index].value === 0) {} else {
            counters[index].value--;
        }
        this.setState({
            counters
        });
    };
    handleAdd = counters => {
        const count = [...this.state.counters];
        const index = count.keys(counter);
        count[index] = {
            ...counter
        };

        const counter = this.state.counters.push({
            id: count[index],
            value: 0
        });
        this.setState({
            counter
        });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters
        });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters
        });
    };
    render() {
        console.log("App - Rendered");
        return ( <
            React.Fragment >
            <
            Navbar totalCounters = { this.state.counters.filter(c => c.value > 0).length }
            />{" "} <
            main className = "container" >
            <
            Counters counters = { this.state.counters }
            onReset = { this.handleReset }
            onAdd = { this.handleAdd }
            onIncrement = { this.handleIncrement }
            onDecrement = { this.handleDecrement }
            onDelete = { this.handleDelete }
            />{" "} <
            /main>{" "} <
            /React.Fragment>
        );
    }
}

export default App;