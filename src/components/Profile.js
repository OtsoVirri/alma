import userIcon from '../img/user.svg';

function Profile({user}) {
    
    // Component level styling
    const divStyle = {
        padding: '30px',
        marginBottom: '30px',
        width: '100%',
        textAlign: 'left',
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'
    };

    const headerDivStyle = {
        marginBottom: '15px',
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center', 
    };

    const iconStyle = {
        maxWidth: '80px',
        marginRight: '30px'
    };
    // End of component level styling

    return (
        <>
            <div style={divStyle}>
                <div style={headerDivStyle}>
                    <img src={userIcon} style={iconStyle} aria-hidden='true' alt="Käyttäjäikoni." />
                    <h3>{user.firstName + ' ' + user.lastName}</h3>
                </div>
                <div>
                    <label className="strong-label">Sähköposti</label>
                    <p>{user.email}</p>
                    <label className="strong-label">Käyttäjäryhmä</label>
                    {user.userType === 'teacher' && <p>Opettaja</p>}
                    {user.userType === 'student' && <p>Oppilas</p>}
                </div>
            </div>

        </>
    );
}

export default Profile;
