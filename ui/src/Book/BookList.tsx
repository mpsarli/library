import React from 'react'
import { TextField, ReferenceField, SelectInput, useGetList } from 'react-admin'
import ListView from '../_components/ui/ListView'

const BookList = () => {
    const { data, isLoading } = useGetList('authors');
    const filters = [
        <SelectInput source='authorId' choices={data} emptyText='All' isLoading={isLoading} >
            <TextField source='nane' />
        </SelectInput>
    ]
    
    return(
        <ListView filters={filters}>
                <TextField source='id'/>
                <TextField source='title'/>
                <ReferenceField reference="authors" source="authorId">
                    <TextField source='name' />
                </ReferenceField>
                <TextField source='publicationYear' />
        </ListView>
    )
}
export default BookList