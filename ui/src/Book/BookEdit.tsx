import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    required, 
    SelectInput,
    useGetList
} from 'react-admin'
import { CustomToolbar, FormReturnActions } from '../_components/form/toolbars'
import { validateText } from '../utils'

const BookEdit = () => {
    const { data, isLoading } = useGetList('authors');
    return(
        <Edit actions={<FormReturnActions />}>
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