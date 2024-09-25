import { NavigationContainer } from "@react-navigation/native"

import DrawerRoutes from "./drowerRoutes"

export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}
