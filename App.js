import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./components/User/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUpScreen } from "./components/User/Signup";
import { DashboardScreen } from "./components/Dashboard";
import { KycScreen } from "./components/User/KYC";
import { ProfileScreen } from "./components/User/Profile/Profile";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Kyc" component={KycScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
