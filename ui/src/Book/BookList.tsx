import React from 'react'
import { List, Datagrid, TextField, EditButton, FilterLiveSearch, BulkDeleteButton, DeleteButton,
    useGetList,
    ReferenceField,
    Title
 } from 'react-admin'
import { Card, CardContent, Link } from '@mui/material'

const BookList = () => {
    const { data, isLoading } = useGetList('authors');

    const filters = [
        <FilterLiveSearch label='Buscar' source='q' size='small' alwaysOn />,
        ]

    return(
        <Card>
            <CardContent>
            <List filters={filters}>
            <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
                <TextField source='id'/>
                <TextField source='title'  label='Título'/>
                <ReferenceField label="Autor" reference="authors" source="authorId">
                    <TextField source='name' />
                </ReferenceField>
                <TextField source='publicationYear'  label='Año de publicación'/>
                <EditButton label=''/>
                <DeleteButton mutationMode="pessimistic" label=''/>
            </Datagrid>
            </List>
        </CardContent>
        </Card>
    )
}
export default BookList