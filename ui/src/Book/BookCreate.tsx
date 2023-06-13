import React from 'react'
import { 
    Create, 
    SimpleForm, 
    TextInput, 
    minLength, 
    required, 
    SaveButton, 
    Toolbar,
    SelectInput,
    useGetList
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

const BookCreate = () => {
    const { data, isLoading } = useGetList('authors');
    return(
        <Create>
            <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
                <TextInput source='title'  label='Título' validate={validateText}/>
                <TextInput source='publicationYear'  label='Año de publicación' validate={validateText}/>
                <SelectInput 
                    label='Autor'
                    source="authorId"
                    choices={data}
                    optionText="name"
                    optionValue="id"
                    isLoading={isLoading}
                    validate={[required()]}
                />
            </SimpleForm>
        </Create>
    )
}

export default BookCreate