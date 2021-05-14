const Navbar: React.FC = () =>  {
    return(
        <div className="nav-container">
            <div className="logo">Hustlers Village</div>
            <div className="nav-elements">
                <p>Home</p>
                <p>How It Works?</p>
                <p>Contact</p>
                <button className="Login">Log in</button>
                <button  className="Register">Register 🡪</button>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
        </div>
    )
}

export default Navbar;
