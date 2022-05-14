import { Component } from 'react';
import CarList from './card-list.component';
import SearchBox from './search-box.component';


class Monsters extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => { return { monsters: users } }));
    }
    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => { return { searchField } });
    }
    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <div className='container'>
                <SearchBox searchChange={this.onSearchChange} PlaceHolder='Search Monsters' className='monsters' />
                <br />
                <CarList monsters={filteredMonsters} />
            </div>
        );
    }



}

export default Monsters;