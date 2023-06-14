import { TextField } from 'react-admin'
import ListView from '../components/ListView'

const AuthorsList = () => (
    <ListView>
        <TextField source='id'/>
        <TextField source='name' />
        <TextField source='birthYear' />
        <TextField source='nationality'/>
    </ListView>
)

export default AuthorsList