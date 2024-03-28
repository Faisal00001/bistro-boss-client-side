import MenuImg from "../.../../../assets/menu/menu-bg.png";
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menu = () => {
    return (
        <div>
            <Cover img={MenuImg} title={'Our Menu'}></Cover>
            <h3 className="text-2xl">Welcome to menu page</h3>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;