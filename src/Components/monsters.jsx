import { Component } from 'react';



class Monsters extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [{ name: 'Jean', age: '23' }, { name: 'JLZNER', age: '24' }, { name: 'Zobeirys', age: '24' }, { name: 'Lucia', age: '68' }],
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.monsters.map((monsters) => {
                        return <h1 key={monsters.name}>{monsters.name}</h1>
                    })
                }
            </div>
        )
    }


}

export default Monsters;