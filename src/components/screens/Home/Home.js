import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import styled from 'styled-components/native';
// import BluetoothSerial from 'react-native-bluetooth-serial';
// import TinyPOS from 'tiny-esc-pos';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 32px;
  color: palevioletred;
`;

const StyledButton = styled.TouchableOpacity`
background-color: palevioletred;
border-radius: 48px;
align-self: center;
padding: 16px;
margin-top: 15px;
`;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

//   componentWillMount(){
//     const writePromises = [];

//     writePromises.push(BluetoothSerial.write(TinyPOS.init()));
    
//     writePromises.push(BluetoothSerial.write(
//       TinyPOS.bufferedText('Hello World', {
//           size: 'doubleheight',
//           align: 'center',
//           weight: 'bold'
//       }, true) // new line
//     ));

//     writePromises.push(BluetoothSerial.write(
//       TinyPOS.print(2)
//   ));

//   Promise.all(writePromises)
// .then(res => console.log(res))
// .catch(err => console.log(err.message));
//   }

  render() {
    return (
      <StyledView>
        <StyledText> We Have {this.props.friends.current.length} Friends!</StyledText>
          <StyledButton onPress={() => this.props.navigation.navigate('Friends')}>
            <Text style={{color: 'white'}}>Add Friends</Text>
          </StyledButton>
      </StyledView>
    )
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends };
}

export default connect(mapStateToProps)(Home);