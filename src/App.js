
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import { Row ,Container, Col} from 'reactstrap';
import AllMedicine from './components/Admin/AllMedicine';
import Medicines from './components/Admin/Medicines';
import AllProducts from './components/Normal/AllProducts';
import FoodItems from './components/Admin/FoodItems';
import updateProduct from './components/Admin/updateProduct';
import CosmeticItems from './components/Admin/CosmeticsItems';
import SignUp from './components/User/SignUp';
import Home from './components/Home';
import Contact from './components/User/Contact';
import AddMedicine from './components/Admin/AddMedicine';
import Menus from './components/Menus';
import Login from './components/User/Login';
import FoodProducts from './components/Normal/FoodProducts';
import CosmeticProducts from './components/Normal/CosmeticProducts';
import MedicineProducts from './components/Normal/MedicineProducts';
import Welcome from './components/Welcome';




function App() {

  return (
  

    <Router>
      
      <Container>
      <Header/>
        <Row>
          <Col md={3}>
          
          <Menus />
         
          

          </Col>
          <Col md={9}>
          <Routes>
          <Route path="/" Component={Welcome}  exact/>

                                    {/* Admin Section */}
            {/* ------------------------------------------------------------------ */}
          <Route path="/admin/view-all" Component={AllMedicine}  exact/>
          <Route path="/admin/view-medicines" Component={Medicines}  exact/>
          <Route path="/admin/cosmetics" Component={CosmeticItems}  exact/>
          <Route path="/admin/add-medicine" Component={AddMedicine}  exact/>
          <Route path="/admin/food-item" Component={FoodItems}  exact/>
          <Route path="/admin/home" Component={Home} exact />
          <Route path="/admin/user/signup" Component={SignUp} exact />
          <Route path="/user/login" Component={Login} exact />
          <Route path="/user/contact" Component={Contact} exact />
          <Route path="/med/update" Component={updateProduct} exact />

        
                                    {/* User Section */}
            {/* ------------------------------------------------------------------ */}
            <Route path="/user/view-all" Component={AllProducts}  exact/>
            <Route path="/user/food-item" Component={FoodProducts}  exact/>
            <Route path="/user/cosmetics" Component={CosmeticProducts}  exact/>
            <Route path="/user/view-medicines" Component={MedicineProducts}  exact/>

                         {/* Without Login Section */}
            {/* ------------------------------------------------------------------ */}
            {/* <Route path="/view-all" Component={wAllProducts}  exact/>
            <Route path="/food-item" Component={wFoodProducts}  exact/>
            <Route path="/cosmetics" Component={wCosmeticProducts}  exact/>
            <Route path="/view-medicines" Component={wMedicineProducts}  exact/> */}
             <Route path="/home" Component={Home} exact />



    
          </Routes>
          </Col>
        </Row>
      </Container>
      </Router>

   
  );
}

export default App;
