import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export class SelectInput extends Component {
    displayName = SelectInput.name

    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedOption && nextProps.selectedOption !== this.props.selectedOption) {
            this.props.onSelectOptionChange(nextProps.selectedOption.id);
        }
    }

    handleOptionChange(event) {
        const target = event.target;
        const id = target.value;
        this.props.onSelectOptionChange(id);
    }

    render() {
        const selectedOption = this.props.selectedOption;
        const selectedValue = selectedOption ? selectedOption.id : "";
        return (
            <FormControl componentClass="select"
                name={this.props.name}
                value={selectedValue}
                onChange={this.handleOptionChange}>
                {this.props.options.map(option =>
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                )}
            </FormControl>
        );
    }
}