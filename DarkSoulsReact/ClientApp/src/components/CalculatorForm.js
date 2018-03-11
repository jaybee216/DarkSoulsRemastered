import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {Calculator} from './Calculator';

export class CalculatorForm extends Component {
displayName = CalculatorForm.name

    constructor(props) {
        super(props);
        this.state = {
            STR: 1,
            DEX: 1,
            INT: 1,
            FTH: 1
        }

        this.handleChange = this.handleChange.bind(this);
    }

    //TODO: Ensure only a valid integer within [1, 99]
    //Implement custom control with +/- arrows to change value rather than plain inputs
    handleChange(e) {
        var previousValue = this.state[e.target.name];
        var value = (e.target.validity.valid) ? e.target.value : this.state[e.target.name];
        value = value === "" ? previousValue : value;
        this.setState({[e.target.name]: value });
    }

    render() {
        //TODO: Use bootstrap components, not fieldset + legend
        return (
            <div>
            <h1>AR Calculator</h1>
            <Row>
                <Col sm={3}>
                    <fieldset>
                        <legend>STR:</legend>
                            <input name="STR"
                                type="number"
                                min="1"
                                value={this.state.STR}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>DEX:</legend>
                            <input name="DEX"
                                type="number"
                                min="1"
                                value={this.state.DEX}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>INT:</legend>
                            <input name="INT"
                                type="number"
                                min="1"
                                value={this.state.INT}
                                onChange={this.handleChange} />
                    </fieldset>
                    <fieldset>
                        <legend>FTH:</legend>
                            <input name="FTH"
                                type="number"
                                min="1"
                                value={this.state.FTH}
                                onChange={this.handleChange} />
                    </fieldset>
                </Col>
                <Col sm={9}>
                    <Calculator str={this.state.STR}
                                dex={this.state.DEX}
                                int={this.state.INT}
                                fth={this.state.FTH} />
                </Col>
            </Row>
            </div>
        )
    }
}