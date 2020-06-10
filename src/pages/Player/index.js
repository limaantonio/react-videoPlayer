import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, List, Text, ListItem, Button} from 'native-base';
import Video, {FilterType} from 'react-native-video';

export default function VideoPlayerScreen({navigation, route}){
  const {external, videoURL } = route.params;
  const [filterType, setFilterType] = useState(FilterType.None);

  // function changeFilter(filterType){
  //   setFilterType(filterType); 
  // }
   changeFilter = filterType => {
    setFilterType(filterType);
  }
  return(
    <Container>
      <Video
      controls
      filter={filterType}
      filterEnable={true}
      
      source={external ?  {uri: videoURL} : videoURL}
      style={{flex: 1}} 
    
    />
    <Button block onPress={() => {
      changeFilter(FilterType.MONO)
    }}>
      <Text>Change To Mon</Text>
    </Button>
    <Button block onPress={() => {
      changeFilter(FilterType.CHROME)
    }}>
      <Text>Change To Chrome</Text>
    </Button>
    <Button block onPress={() => {
      changeFilter(FilterType.SEPIA)
    }}>
      <Text>Change To Sephia</Text>
    </Button>
    

    </Container>
  ); 
}

