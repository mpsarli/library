import React from 'react'
import { Datagrid, FilterLiveSearch, List, BulkDeleteButton, TopToolbar, CreateButton, DeleteButton, EditButton, FilterButton } from "react-admin"

interface ListViewProps {
    children: React.ReactNode,
    filters?: React.ReactNode[]
}
const ListView = ({
    children,
    filters=[],
}:ListViewProps) => {

    const listFilters = [
        <FilterLiveSearch source='q' alwaysOn />,
        ...filters
    ]

    const ListActions = () => (
        <TopToolbar>
            <FilterButton />
            <CreateButton />
        </TopToolbar>
    )
    
    return(
        <List filters={listFilters}  actions={<ListActions />} >
            <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
                { children}
                <EditButton />
                <DeleteButton mutationMode="pessimistic" />
            </Datagrid>
        </List>
    )
}

export default ListView