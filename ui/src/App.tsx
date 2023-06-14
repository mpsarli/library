
import { Admin, Resource } from 'react-admin';

import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

import CustomLayout from './components/layout';

import AuthorsList from './Author/AuthorsList';
import AuthorEdit from './Author/AuthorEdit';
import AuthorCreate from './Author/AuthorCreate';

import BookList from './Book/BookList';
import BookEdit from './Book/BookEdit';
import BookCreate from './Book/BookCreate';

export const App = () => (
    <Admin
        layout={CustomLayout}
        dataProvider={dataProvider}
		authProvider={authProvider}
        title='Biblioteca'
	>
        <Resource name="authors" list={AuthorsList} edit={AuthorEdit} create={AuthorCreate} recordRepresentation={(record) => record.name } />
		<Resource name="books" list={BookList} edit={BookEdit} create={BookCreate} recordRepresentation={(record) => record.title }  />
    </Admin>
);
