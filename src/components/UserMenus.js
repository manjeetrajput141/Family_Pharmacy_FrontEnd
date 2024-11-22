


import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';


function UserMenus() {
    return (
       <>
        <ListGroup>

         <Link className='list-group-item list-group-item-action' to="/user/view-all">
         All
         </Link>
         <Link className='list-group-item list-group-item-action' to="/user/view-medicines">
         Medicine
         </Link>
        
         <Link className='list-group-item list-group-item-action' to="/user/cosmetics">
         Cosmetics
         </Link>
         <Link className='list-group-item list-group-item-action' to="/user/food-item">
         Food Item
         </Link>
         <Link className='list-group-item list-group-item-action' to="/home">
         Home
         </Link>
            
        
        </ListGroup>



       </>



    );
}
export default UserMenus;