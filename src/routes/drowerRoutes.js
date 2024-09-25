import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import { StyleSheet } from 'react-native'

import TabRoutes from "./tabRoutes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator style={styles.navigator}>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={'blue'} size={size} />,
                    drawerLabel: 'Inicio'
                }}
            >

            </Drawer.Screen>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    navigator: {
        marginBottom: 20,
    },
});

