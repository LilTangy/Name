import {Link} from "react-router-dom";

export const NavLinks = () => {

    return (
        <div>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/second'}>Second Page</Link>
        </div>
    );
};