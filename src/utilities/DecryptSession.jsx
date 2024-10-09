
const DecryptSession = () => {
    if (localStorage.getItem('session_admin')) {
        const session = localStorage.getItem('session_admin');
        const parsed_data = JSON.parse(session)
        const email = parsed_data.email;
        const expiration = parsed_data.expiry;

        if (new Date().getTime() < expiration) {
            return email
        } else {
            localStorage.removeItem('session_admin');
            return null;
        }
    } else {
        return null
    }
}

export default DecryptSession
