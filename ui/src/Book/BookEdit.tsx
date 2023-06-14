import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    required, 
    SaveButton, 
    Toolbar,
    SelectInput,
    useGetList
} from 'react-admin'

import { validateText } from '../utils'

const CustomToolbar = () => (
    <Toolbar>
        <SaveButton  />
    </Toolbar>
)

const BookEdit = () => {
    const { data, isLoading } = useGetList('authors');
    return(
        <Edit>
            <SimpleForm mode="onBlur" reValidateMode="onBlur" toolbar={<CustomToolbar />}>
                <TextInput disabled source='id' />
                <TextInput source='title' validate={validateText}/>
                <TextInput source='publicationYear' validate={validateText}/>
                <SelectInput 
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