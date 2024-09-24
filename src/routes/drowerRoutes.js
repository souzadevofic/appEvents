import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import TabRoutes from "./tabRoutes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="plus" color={'blue'} size={size} />,
                    drawerLabel: 'Início'
                }}
            />
        </Drawer.Navigator>
    );
}

