import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import AnotherHome from './AnotherHome';

const MainNavigator = createStackNavigator({
    Home : {screen : Home},
    AnotherHome : {screen : AnotherHome}
});

export const AppContainer = createAppContainer(MainNavigator);