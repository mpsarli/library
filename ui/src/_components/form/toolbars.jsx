import { TopToolbar, Toolbar, ListButton, SaveButton } from "react-admin"

export const FormReturnActions = () => (
    <TopToolbar>
        <ListButton label="Back to list"/>
    </TopToolbar>
)

export const CustomToolbar = () => (
    <Toolbar>
        <SaveButton  />
    </Toolbar>
) 