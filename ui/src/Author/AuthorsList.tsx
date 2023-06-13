import React from 'react'
import { List, Datagrid, TextField, EditButton, FilterLiveSearch, BulkDeleteButton, DeleteButton } from 'react-admin'
import { Card, CardContent } from '@mui/material'

const filters = [<FilterLiveSearch label='Buscar' source='q' size='small' alwaysOn /> ]

const AuthorsList = () => (
    <Card>
        <CardContent>
        <List filters={filters}>
        <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
            <TextField source='id'/>
            <TextField source='name'  label='Nombre'/>
            <TextField source='birthYear'  label='Año de nacimiento'/>
            <TextField source='nationality'  label='Nacionalidad'/>
            <EditButton label=''/>
            <DeleteButton mutationMode="pessimistic" label=''/>
        </Datagrid>
        </List>
    </CardContent>
    </Card>
)

export default AuthorsList