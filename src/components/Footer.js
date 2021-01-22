function Footer() {
 
    const footerStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <footer style={footerStyle}>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>&copy; {new Date().getFullYear()} Kaikki oikeudet pidätetään.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
