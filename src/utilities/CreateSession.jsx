import { useNavigate } from 'react-router-dom';

const CreateSession = (email) => {
    const now = new Date();
    const session = {
        email,
        expiry: now.getTime() + 86400000, // 1 day in milliseconds
    };
    // console.log(session);


    localStorage.setItem('session_admin', JSON.stringify(session));

    return true;
};

export default CreateSession;