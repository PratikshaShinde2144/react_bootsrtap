
import{Table,Image} from 'react-bootstrap';
import logo from './img1.jpg';
import './Style.css';

const my_logo = './img1.jpg';

function Table_component()
{
    return(
        <div>

             <Image className="my_logo" src ={logo} thumbnail />
             <Image className="my_logo" src ={logo} roundedCircle />
            <Table responsive variant="dark" striped bordered hover size="sm">
            <tr>
                <td>Sr No</td>
                <td>User Name</td>
                <td>Mobile Number</td>
                <td>Age</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Prito</td>
                <td>1345789900</td>
                <td>22</td>
            </tr>
            <tr>
                <td>2</td>
                <td>sp</td>
                <td>9011155479</td>
                <td>21</td>
            </tr>
       
        </Table> 
        </div>
    );
}
export default Table_component;
