import bgImg from '../img/flat_design_students.svg';
import {Container} from 'react-bootstrap';
import Login from '../components/Login';
import SignUp from '../components/RegisterUser';

function LoginPage({onLogin, onAddUser}) {

    return (
        <Container className="login-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1>ALMA<span className="d-none d-lg-inline-block">-kurssikalenteri</span></h1>
                    <p>Tervetuloa käyttämään ALMA-kurssikalenteria!
                        <br></br>
                        Almassa voit hallinnoida opetukseen tai opiskeluun liittyviä kursseja helposti yhdessä paikassa.
                    </p>
                    <div className="d-lg-block d-xl-none">
                        <img src={bgImg} aria-hidden='true' alt="Kuvituskuva. Graafinen elementti, jossa opiskelijat käyttävät eri päätelaitteita."/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-xl-4">
                    <div className="form-wrapper">
                        <Login onLogin={onLogin}/>
                    </div>
                    <div className="form-wrapper">
                        <SignUp onAddUser={onAddUser} />
                    </div>
                </div>
            </div>
        </Container>
    );
}


export default LoginPage;
