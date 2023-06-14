import { AppBar, Layout, LayoutProps, Menu,
    TitlePortal,
    Title
 } from "react-admin";
import { JSX } from "react/jsx-runtime";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttributionIcon from '@mui/icons-material/Attribution';

export const MyMenu = () => (
    <Menu>
        <Menu.Item to="/authors" primaryText="Authors" leftIcon={<AttributionIcon />} />
        <Menu.Item to="/books" primaryText="Books" leftIcon={<MenuBookIcon />}/>
    </Menu>
);

const CustomLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props}  menu={MyMenu}/>

export default CustomLayout