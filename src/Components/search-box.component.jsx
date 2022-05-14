
import '../search-box.css';
import '../js.js';


const SearchBox = ({ className, PlaceHolder, searchChange }) => (


    <div className='search-container'>
        <input
            className={`'search-box' ${className}`}
            type='search'
            placeholder={PlaceHolder}
            onChange={searchChange}
            id='search-box'

        />


    </div>

)
export default SearchBox;