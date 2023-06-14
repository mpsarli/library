import { 
    Create, 
    SimpleForm, 
    TextInput, 
    required,
    SelectInput,
    useGetList
} from 'react-admin'

import { validateText } from '../utils';

const BookCreate = () => {
    const { data, isLoading } = useGetList('authors');
    return(
        <Create>
            <SimpleForm mode="onBlur" reValidateMode="onBlur">
                <TextInput source='title'validate={validateText}/>
                <TextInput source='publicationYear'  validate={validateText}/>
                <SelectInput 
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