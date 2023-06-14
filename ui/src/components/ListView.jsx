import React from 'react'            
import { Datagrid, FilterLiveSearch, List, BulkDeleteButton, TextField, TopToolbar, CreateButton, DeleteButton, EditButton, Title } from "react-admin"
import { Card, CardContent } from '@mui/material'

const ListView = ({
    children,
    filters=[],
}) => {

    const listFilters = [
        <FilterLiveSearch label='Buscar' source='q' size='small' alwaysOn />,
        ...filters
    ]

    const ListActions = () => (
        <TopToolbar>
            <CreateButton label='Agregar' />
        </TopToolbar>
    )
    
    return(
        <Card>
            <CardContent>
                <List filters={listFilters} actions={<ListActions />}>
                    <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
                        { children}
                        <EditButton label=''/>
                        <DeleteButton mutationMode="pessimistic" label=''/>
                    </Datagrid>
                </List>
            </CardContent>
        </Card>
    )
}

export default ListView