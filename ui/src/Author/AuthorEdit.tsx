import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    SaveButton, 
    Toolbar,
} from 'react-admin'
import { CustomToolbar, FormReturnActions } from '../_components/form/toolbars'
import { validateText } from '../utils'

const AuthorEdit = () => (
    <Edit actions={<FormReturnActions />}>
        <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
            <TextInput disabled source='id' />
            <TextInput source='name' label='Nombre' validate={validateText}/>
            <TextInput source='nationality' label='Nacionalidad' validate={validateText} />
            <TextInput source='birthYear'  label='Año de nacimiento' validate={validateText}/>
        </SimpleForm>
    </Edit>
)

export default AuthorEdit