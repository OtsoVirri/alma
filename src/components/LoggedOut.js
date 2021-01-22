import {Container, Button} from 'react-bootstrap';
import bgImg from '../img/flat_design_students.svg';

function LoggedOut() {
    
    const divStyle = {
        padding: '60px',
        margin: '0 auto',
        maxWidth: '600px',
        textAlign: 'center',
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.5)'
    };
    
    return (
        <Container className="login-wrapper">
            <div className="row">
                <div className="col-12">
                    <div style={divStyle}>
                        <h3 style={{marginBottom: '30px'}}>Et ole kirjautunut sisään...</h3>
                        <Button variant="default" href="/">Siirry kirjautumaan</Button>
                        <div className="d-lg-block d-xl-none">
                            <img src={bgImg} aria-hidden='true' alt="Kuvituskuva. Graafinen elementti, jossa opiskelijat käyttävät eri päätelaitteita." />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default LoggedOut;
