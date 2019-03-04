import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const UserMarker = props => (
    <View style={styles.marker}>
        <Image
            style={styles.image}
            source={{ uri: props.avatar_url }} />
    </View>
)

const UserCallout = props => (
    <View style={styles.callout}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.bio}>{props.bio}</Text>
    </View>
);

export { UserMarker, UserCallout }


const styles = StyleSheet.create({
    marker: {
        backgroundColor: 'purple',
        borderRadius: 50,
        padding: 4
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    callout: {
        width: 150,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    bio: {
        opacity: 2
    }
})
