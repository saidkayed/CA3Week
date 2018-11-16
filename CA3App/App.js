import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Swapi from './Swapi';

const App = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Swapi:{screen: Swapi}
  
});

export default App;
