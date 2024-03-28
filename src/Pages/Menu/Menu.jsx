import MenuImg from "../.../../../assets/menu/menu-bg.png";
import Cover from '../../Shared/Cover/Cover';
const Menu = () => {
    return (
        <div>
            <Cover img={MenuImg} title={'Our Menu'}></Cover>
            <h3 className="text-2xl">Welcome to menu page</h3>

        </div>
    );
};

export default Menu;