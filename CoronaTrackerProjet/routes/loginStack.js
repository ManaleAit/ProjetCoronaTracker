import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Login';
import RegisterStack from './registerStack';
import Register2 from '../Register2';
import Register from '../Register';
import HomeScreen from '../Home';

const RegisterScreenStack = {
  RegisterScreen: {
    screen: Register,
  },
  RegisterScreen2: {
    screen: Register2,
  },
};

const registerStack = createStackNavigator(RegisterScreenStack, {
  defaultNavigationOptions: {
    headerTitleAlign: 'center',
    title: 'Create New Account',
  },
});

const SwitchScreens = {

  HomeScreen: {
    screen: HomeScreen,
  },
  LoginScreen: {
    screen: Login,
  },
  RegisterScreen: {
    screen: registerStack,
  },
};

const loginStack = createSwitchNavigator(SwitchScreens);
export default createAppContainer(loginStack);
