import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';

function Menus() {
    return (
       <>
        <ListGroup>

<Link className='list-group-item list-group-item-action' to="/">
All
</Link>
<Link className='list-group-item list-group-item-action' to="/">
Medicine
</Link>

<Link className='list-group-item list-group-item-action' to="/">
Cosmetics
</Link>
<Link className='list-group-item list-group-item-action' to="/">
Food Item
</Link>
<Link className='list-group-item list-group-item-action' to="/home">
Home
</Link>
   

</ListGroup>
       </>
    );
}
export default Menus;