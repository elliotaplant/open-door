
import React, { Alert, View, Text, TouchableOpacity, Image } from 'react-native';
import { store } from '../../sharedNative/reducers/reducers.js';
import NavBar from '../Shared/NavBar.js';
import BackgroundImage from '../Shared/BackgroundImage.js';
import EditUser from './EditUser';
import { navToFull } from '../Shared/NavHelpers';
import styles from '../../styles/styles.js';
import { backButton, editButton } from '../Shared/Buttons';

import CirclePic from '../Shared/CirclePic';
const actions = require('../../sharedNative/actions/actions');
const profPic = require('../../sharedNative/images/dino-profile.jpeg');

const Profile = (props) => {
  const updateUser = (user) => {
    return props.updateUser(user)
    .then(updatedUser => {
      if (!updatedUser) {
        Alert.alert('Username Taken!', 'Try a different one?', [
            { text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          }, {
            text: 'Edit',
            onPress: () => {
              navToFull({
                component: EditUser,
                user: props.user,
                onSubmit: updateUser,
              });
            },
            style: 'default',
          },
        ]);
        return null;
      }
      return updatedUser;
    });
  };
  return (
      <BackgroundImage source={require('../../static/bg.jpg')}>
        <NavBar
          title={ 'Profile' }
          leftButton={backButton}
          rightButton={editButton(EditUser, props.user, updateUser)}
        />
        <View style={styles.centerContainerNoMargin}>
          <CirclePic size={200} source={ { uri: props.user.profilePictureUri }} />
          <View style={{ height: 20 }} />
          <View style={styles.listEntryView}>
            <Text style={styles.standardText}>Username: { props.user.userName }</Text>
          </View>
          <View style={styles.listEntryView}>
            <Text style={styles.standardText}>
              Default Location: {props.user.defaultLocation || 'None'}
            </Text>
          </View>
          <View style={styles.listEntryView}>
            <Text style={styles.standardText}>
              Default Vibe: {props.user.defaultVibe || 'None'}
            </Text>
          </View>
          <TouchableOpacity onPress={() => store.dispatch(actions.logout())} >
            <View style={styles.listEntryView}>
              <Text style={{ bottom: 0, color: 'red' }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </BackgroundImage>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object,
  updateUser: React.PropTypes.func,
};

module.exports = Profile;
