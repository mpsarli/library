import { Datagrid, FilterLiveSearch, List, BulkDeleteButton } from "react-admin"

import { Card, CardContent } from '@mui/material'

interface ListProps {
    filters: Array<any>,
}

const ListView: React.FC<ListProps> = ({
    filters=[],
    // children
}: ListProps) : JSX.Element => {

    const listFilters = [
        <FilterLiveSearch label='Buscar' source='q' size='small' alwaysOn />,
        ...filters
    ]

    return(
        <Card>
            <CardContent>
                <List filters={filters}>
                    <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
                        { children }
                    </Datagrid>
                </List>
            </CardContent>
        </Card>
    )
}