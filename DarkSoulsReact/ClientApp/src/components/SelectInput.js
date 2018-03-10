import React, { Component } from 'react';

export class SelectInput extends Component {
    displayName = SelectInput.name

    constructor(props) {
        super(props);
        //this.state = {
        //    options: [],
        //    initialOption: null,
        //    selectedOption: null
        //}

        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        //const target = event.target;
        //const id = target.value;

        //this.setState({
        //    selectedOption: id
        //});

        this.props.onSelectOptionChange(event);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedOption: nextProps
        })
    }

    render() {
        return (
            <select name={this.props.name}
                    value={this.props.selectedOption}
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