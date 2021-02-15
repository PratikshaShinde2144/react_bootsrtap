import {Button} from 'react-bootstrap';
import './login.css';
function Login()
{
    return(
        <div>

            <div className="row">
             <div className="col-lg-4"></div>
             <div className="col-lg-4">
                 <h1 className="text-center login_div">Login Screen</h1>
                 <div className="from-group">
                     <lable>Mobile Number:<span className="text-danger">*</span></lable>
                     <input type="number" className="from-control" placeholder="Enter Your Number"/>
                 </div>
                 <div className="from-group">
                     <lable>Email:<span className="text-danger">*</span></lable>
                     <input type="email" className="from-control" placeholder="Enter Your Email"/>
                 </div>
                 <div className="from-group">
                    <Button className="mx-auto d-block" variant = "danger">Login</Button>
                 </div>
             </div>
             <div className="col-lg-4"></div>
            </div>
        </div>

    );
}

export default Login;