import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../../actions/FriendsActions';

class Friends extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Add Friends Here! </Text>
        {
            this.props.friends.possible.map((friend, index) => (
                <Button 
                    key={ friend }
                    title={`Add ${ friend }`}
                    onPress={() => this.props.addFriend(index)}
                />
            ))
        }
        <Button
            title="Back to Home"
            onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { addFriend }, dispatch
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Friends);