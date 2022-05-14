import { useState, useEffect } from 'react';
import CarList from './card-list.component';
import SearchBox from './search-box.component';

const Monsters = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users));
    }, [])
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
        <div className='container'>
            <SearchBox searchChange={onSearchChange} PlaceHolder='Search Monsters' className='monsters' />
            <br />
            <CarList monsters={filteredMonsters} />
        </div>
    )
}

export default Monsters;