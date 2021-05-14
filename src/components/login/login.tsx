import {Button} from './Button';
import {Inputtypefeild} from './Inputfield';
import {Label} from './Label';
import {Subbutton} from './Subbutton';
import './login.scss';


function Login() {
   
    return (
        <div className="container">
            <div className="body">
                <div className="log">
                <Label labeltype='head'/>
                </div>
                <div className="button">
                    <Button buttontype='Google' /> 
                    <Button buttontype='Github' /> 
                    <Button buttontype='Dribbble' /> 
                </div>
                <div className="option">
                    <hr/> 
                        or login with email
                    <hr/>
                </div>
                <div className="input">
                    <Label labeltype='email'/>
                    <Inputtypefeild inputFieldType='mail' />
                </div>
                <div className="input">
                    <div className="inline">
                        <Label labeltype='pass' />
                                
                        
                        <Subbutton subButtonType='forgot' />  
                    </div>
                    <Inputtypefeild inputFieldType='password' />
                </div>
                <Button buttontype='Arrow' /> 
                <div className="note">Don't have an account on hustlersVilage? <Subbutton subButtonType='sign' /></div>
            </div>

        </div>
    );
}

export default Login;