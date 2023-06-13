import React from 'react'
import { 
    Edit, 
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
        <SaveButton label='Guardar cambios' />
    </Toolbar>
)

const BookEdit = () => {
    const { data, isLoading } = useGetList('authors');
    return(
        <Edit>
            <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
                <TextInput disabled source='id' />
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
        </Edit>
    )
}

export default BookEdit