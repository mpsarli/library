
import { Admin, Resource } from 'react-admin';

import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

import CustomLayout from './_components/ui/Layout';
import { AuthorCreate, AuthorEdit, AuthorsList} from './Author'
import { BookCreate, BookEdit, BookList } from './Book'

export const App = () => (
    <Admin
        layout={CustomLayout}
        dataProvider={dataProvider}
		authProvider={authProvider}
        title='Library'
	>
        <Resource name="authors" list={AuthorsList} edit={AuthorEdit} create={AuthorCreate} recordRepresentation={(record) => record.name } />
		<Resource name="books" list={BookList} edit={BookEdit} create={BookCreate} recordRepresentation={(record) => record.title }  />
    </Admin>
);
