function Header(){
    return(
        <>
        <div style={{ display: 'flex' }}>
            {/* <img src={logo} alt="NITW logo" height='250'/> */}
            <h1 style={{paddingTop: '45px'}} >Terminal-Portfolio<br/>@Vijayaditya Raj Rapaka</h1>
        </div>
        <p>Welcome to my interactive web terminal.</p>
        <p>For a list of available commands, type 'help'.</p>
        </>
    );
}

export default Header;