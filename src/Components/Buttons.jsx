import Button from '@mui/material/Button';
import '../App.css';

function Botones(Git) {


    return (
        <div>
            <Button variant="contained" color="success" >Change</Button>
            <Button variant='contained' onClick={() => window.open} href={Git['Git']}   >Github</Button>
        </div>
           );

}

export default Botones;