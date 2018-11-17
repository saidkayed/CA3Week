import React,{Component} from 'react';
import facade from './apiFacade';
const URL = "http://localhost:8084/jwtbackend";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ListView
    
  } from 'react-native';
  

  export default class swapi extends Component{
    
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
        this.state = { peopledata:[]};

    }
    async componentDidMount() {
        const peps =  await fetch('http://192.168.0.5:8080/jwtbackend/api/swapi/people').then(res =>res.json()) //kan ikke fetche fra localhost pga http så vi fetcher fra den orginale side
        

        this.setState({peopledata:peps});

    }
    
    static navigationOptions = {
        title: 'SWAPI',
      };
      render(){
          return(

            
              <View>
               
                
                       {this.state.peopledata.map((data) =>
                       <Text>{data.name + " " + data.height + " " +  data.mass +" " +
                       data.hair_color +" " +
                       data.skin_color +" " +
                       data.eye_color +" " +
                       data.birth_year +" " +
                       data.gender}</Text>
                        )}
                       
            


              </View>

          );
      }
  }
