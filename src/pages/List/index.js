import * as React from 'react';
import {Container, Content, List, Text, ListItem} from 'native-base';

export default function VideosListScreen({navigation}){
  return (
    <Container>
      <Content>
        <List>
          <ListItem onPress={() => navigation.navigate('Video Player',{
            external:true,
            videoURL:'https://www.w3schools.com/html/mov_bbb.mp4'
          })}>
            <Text>External Video Source</Text>
          </ListItem>

          <ListItem onPress={() => navigation.navigate('Video Player',{
            external:false,
            videoURL: require('../../../test.mp4')
          })}>
            <Text>Local/Internal Video Source</Text>
          </ListItem>
          
        </List>
      </Content>
    </Container>
  );
}
