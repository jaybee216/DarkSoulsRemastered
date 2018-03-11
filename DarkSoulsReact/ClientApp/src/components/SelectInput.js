import React, { Component } from 'react';

export class SelectInput extends Component {
    displayName = SelectInput.name

    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        const target = event.target;
        const id = target.value;
        this.props.onSelectOptionChange(id);
    }

    render() {
        return (
            <select name={this.props.name}
                    value={this.props.selectedOption ? this.props.selectedOption.id : ""}
                    onChange={this.handleOptionChange}>
                {this.props.options.map(option =>
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                )}
            </select>
        );
    }
}