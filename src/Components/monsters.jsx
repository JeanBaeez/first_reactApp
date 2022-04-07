import { Component } from 'react';



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
            .then(users => this.setState(() => { return { monsters: users } },
                () => console.log(this.state.monsters)));
    }
    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <div className='container'>
                <input
                    className='search-box'
                    type='search'
                    placeholder='search monsters'
                    onChange={(event) => {
                        const searchField = event.target.value.toLocaleLowerCase();
                        this.setState(
                            () => {
                                return { searchField }
                            });
                    }}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id} className='card'>
                            <h3>{monster.name}</h3>
                        </div>
                    );
                })}
            </div>
        );
    }



}

export default Monsters;