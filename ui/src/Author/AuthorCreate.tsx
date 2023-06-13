import React from 'react'
import { 
    Create, 
    SimpleForm, 
    TextInput, 
    minLength, 
    required, 
    SaveButton, 
    Toolbar,
} from 'react-admin'

const validateText = [
    required('Campo requerido'), 
    minLength(2, 'Debe tener al menos 2 caracteres'), 
]

const CustomToolbar = () => (
    <Toolbar>
        <SaveButton label='Guardar' />
    </Toolbar>
)

const AuthorCreate = () => (
    <Create>
        <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
            <TextInput source='name' label='Nombre' validate={validateText}/>
            <TextInput source='nationality' label='Nacionalidad' validate={validateText} />
            <TextInput source='birthYear'  label='Año de nacimiento' validate={validateText}/>
        </SimpleForm>
    </Create>
)

export default AuthorCreate