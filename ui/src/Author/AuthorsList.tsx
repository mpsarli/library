import { TextField } from 'react-admin'
import ListView from '../components/ListView'

const AuthorsList = () => (
    <ListView>
        <TextField source='id'/>
        <TextField source='name'  label='Nombre'/>
        <TextField source='birthYear'  label='Año de nacimiento'/>
        <TextField source='nationality'  label='Nacionalidad'/>
    </ListView>
)

export default AuthorsList