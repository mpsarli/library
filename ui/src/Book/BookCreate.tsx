import { 
    Create, 
    SimpleForm, 
    TextInput, 
    minLength, 
    required,
    SelectInput,
    useGetList
} from 'react-admin'

const validateText = [
    required(), 
    minLength(2), 
]

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