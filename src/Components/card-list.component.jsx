import { Component } from 'react';
import '../card-style.css';
import '../card-style.styles.css';



class CardList extends Component {







    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map(monster => (

                    <div className='card-container'>
                        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
                        <h1 className='' key={monster.id}>{monster.name}</h1>
                    </div>


                ))}
            </div>
        )




    }

}
export default CardList;