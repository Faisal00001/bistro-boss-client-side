import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <h3 className="text-2xl">Welcome to menu page</h3>
        </div>
    );
};

export default Menu;