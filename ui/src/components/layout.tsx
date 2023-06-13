import { AppBar, Layout, LayoutProps, Menu,
    TitlePortal,
    Title
 } from "react-admin";
import { JSX } from "react/jsx-runtime";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttributionIcon from '@mui/icons-material/Attribution';

export const MyMenu = () => (
    <Menu>
        <Menu.Item to="/authors" primaryText="Autores" leftIcon={<AttributionIcon />}/>
        <Menu.Item to="/books" primaryText="Libros" leftIcon={<MenuBookIcon />}/>
    </Menu>
);

const AppBarCustom = () =>( 
    <AppBar color="secondary">
         <TitlePortal />
        {/* <SettingsButton /> */}

    </AppBar>
)

const CustomLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props} appBar={AppBarCustom} menu={MyMenu}/>

export default CustomLayout