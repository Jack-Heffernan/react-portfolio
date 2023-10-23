import { useLocation } from 'react-router-dom'

const PageNotFound = () => {

    let location = useLocation();

    return (
        <div>
            <h2>404 Page {location.pathname} found.</h2>
        </div>
    );
};

export default PageNotFound;