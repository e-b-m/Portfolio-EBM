import React from 'react'; 
import '../stylesheets/Navbar.css'

const Navbar = () => {
    return (
    <div>
        <img alt="TransparentLogo" src="https://user-images.githubusercontent.com/116574907/220334583-f453f994-8bfd-4506-a6b1-0e943e3c3a20.png" height="200" align="center"/>
        {/* <h1>Em Codes</h1> */}
        <div className='navBarElements'>
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
        </ul>
        </div>
    
    
    </div>  );
}
 
export default Navbar;

