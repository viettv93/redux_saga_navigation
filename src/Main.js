import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Store from './store/Store'
import Screen1 from "./screen1/Screen1";
import ScreenView from "./screen2/ScreenView";
import Screen3 from "./screen3/Screen3";
import Screen4 from "./screen4/Screen4";
import Screen5 from "./screen5/Screen5";
import Screen6 from "./screen6/Screen6";
import Screen7 from "./screen7/Screen7";
import Screen8 from "./screen8/Screen8";

const Stack = createNativeStackNavigator()
function Screen() {
   
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="First"
                    component={Screen1}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Two"
                    component={ScreenView}
                    options={{ headerShown: false }} />
                {/* <Stack.Screen name="Three"
                    component={Screen3}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Four"
                    component={Screen4}
                    options={{ headerShown: false }} /> */}
                <Stack.Screen name="Five"
                    component={Screen5}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Six"
                    component={Screen6}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Seven"
                    component={Screen7}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Eight"
                    component={Screen8}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



const Main = () => {
    return (
        <Provider store={Store}>
            <Screen />
        </Provider>
    )

}
export default Main