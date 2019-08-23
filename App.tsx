import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search"
  }
})
  
export default createAppContainer(navigator)


// Client ID

// MOPr2tL7UYZxLI9SIatneQ
// API Key

// _PnPOgHSHv81AF3ewoQMQcdohT_WL6WCGT3b6cQrjvygJO1GgUonK0j4Ja7jbb0DfBn4DmB8rzaiJPdiZB8FEBZAl0ueLFjp2YY36xRmqsAFXa1EYDQE1hllDg1eXXYx
