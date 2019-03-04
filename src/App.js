import './config/Reactotron';
import print from './commons/debug';
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import mapStyle from './commons/mapStyle';

import api from './service/api';
import ModalGit from './components/ModalGit';
import { UserMarker, UserCallout } from './components/UserMarker';

export default class App extends Component {

   state = {
      showModal: false,
      initialLocation: {
         latitude: -27.2177659,
         longitude: -49.6451598,
         latitudeDelta: 0.0042,
         longitudeDelta: 0.0031,
      },
      users: [],
      currentLocation: {}
   }

   openModal = (location) => {
      this.setState({ showModal: true, currentLocation: location.coordinate });
   };

   setUser = (user) => {
      const users = this.state.users;
      users.push({ ...user })
      this.setState({ users })
   };

   getUser = async (name) => {
      try {
         const result = await api.get(`users/${name}`)
         print(result)
         if (result.status === 200) {
            let user = result.data

            user = {
               id: user.id,
               name: user.name,
               bio: user.bio,
               avatar_url: user.avatar_url,
               coordinate: this.state.currentLocation
            }
            this.setUser(user);
         }
      } catch (err) {
         print(err)
      }
   };

   teste = (user) => {
      print('bombo')
   };


   renderMarkers = () => {
      if (!this.state.users.length) return

      return this.state.users.map((user, i) => (
         <Marker key={i} coordinate={user.coordinate}>
            <UserMarker {...user} />
            <Callout onPress={this.teste}>
               <UserCallout {...user} />
            </Callout>
         </Marker>
      ));
   };

   render() {
      return (
         <View style={styles.container}>
            <MapView
               style={{ flex: 1 }}
               initialRegion={this.state.initialLocation}
               // customMapStyle={mapStyle}
               onLongPress={(e) => this.openModal(e.nativeEvent)}
            >
               {this.renderMarkers()}
            </MapView>

            <ModalGit
               visible={this.state.showModal}
               title="Add New User"
               placeholderInput="User in GitHub"
               onSave={this.getUser}
               onCancel={() => this.setState({ showModal: false })}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});