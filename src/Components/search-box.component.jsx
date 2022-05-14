import { Component } from 'react';
import '../search-box.css';
import '../js.js';


class searchBox extends Component {



    render() {
        return (
            <div className='search-container'>
                <input
                    className={`'search-box' ${this.props.className}`}
                    type='search'
                    placeholder={this.props.PlaceHolder}
                    onChange={this.props.searchChange}
                    id='search-box'

                />


            </div>

        )
    }

}
export default searchBox;