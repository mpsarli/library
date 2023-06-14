import React from 'react'
import { List, Datagrid, TextField, EditButton, FilterLiveSearch, BulkDeleteButton, DeleteButton,  ReferenceField  } from 'react-admin'
import { Card, CardContent } from '@mui/material'
import ListView from '../components/ListView'

const BookList = () => {

    const filters = [
        <FilterLiveSearch label='Buscar' source='q' size='small' alwaysOn />,
        ]
        // todo: agregar filtro por autor

    
    return(
        <ListView>
                <TextField source='id'/>
                <TextField source='title'  label='Título'/>
                <ReferenceField label="Autor" reference="authors" source="authorId">
                    <TextField source='name' />
                </ReferenceField>
                <TextField source='publicationYear'  label='Año de publicación'/>
        </ListView>
    )
}
export default BookList