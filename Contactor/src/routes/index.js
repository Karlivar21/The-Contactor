import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/*  Import the views here */
import Main from '../views/Main'
import Contacts from '../views/Contacts'
import ContactInfo from '../views/ContactInfo'


const Stack = createStackNavigator()

const routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="ContactInfo" component={ContactInfo} />
        </Stack.Navigator>
    </NavigationContainer>
)
export default routes
