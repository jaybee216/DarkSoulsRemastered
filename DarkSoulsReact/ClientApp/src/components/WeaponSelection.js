import React, { Component } from 'react';

export class WeaponSelection extends Component {
    displayName = WeaponSelection.name

    constructor(props) {
        super(props);
        this.state = { baseWeapons: [], loading: true }
    }

    componentWillMount() {
        fetch('api/Weapons/BaseWeapons')
            .then(response => response.json())
            .then(data => {
                this.setState({ baseWeapons: data, loading: false });
            });
    }

    static renderWeaponsTable(baseWeapons) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {baseWeapons.map(weapon =>
                        <tr key={weapon.name}>
                            <td>{weapon.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : WeaponSelection.renderWeaponsTable(this.state.baseWeapons);

        return (
            <div>
                <h1>Weapons</h1>
                {contents}
            </div>
        );
    }
}