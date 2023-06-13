import React from 'react'
import { 
    Edit, 
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
        <SaveButton label='Guardar cambios' />
    </Toolbar>
)

const AuthorEdit = () => (
    <Edit>
        <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
            <TextInput disabled source='id' />
            <TextInput source='name' label='Nombre' validate={validateText}/>
            <TextInput source='nationality' label='Nacionalidad' validate={validateText} />
            <TextInput source='birthYear'  label='Año de nacimiento' validate={validateText}/>
        </SimpleForm>
    </Edit>
)

export default AuthorEdit