import React from 'react'
import { 
    Create, 
    SimpleForm, 
    TextInput, 
    minLength, 
    required
} from 'react-admin'

const validateText = [
    required(), 
    minLength(2), 
]
const AuthorCreate = () => (
    <Create>
        <SimpleForm mode="onBlur" reValidateMode="onBlur" >
            <TextInput source='name'  validate={validateText}/>
            <TextInput source='nationality' validate={validateText} />
            <TextInput source='birthYear' validate={validateText}/>
        </SimpleForm>
    </Create>
)

export default AuthorCreate