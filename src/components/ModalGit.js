import React, { Component } from 'react';
import { StyleSheet, Modal, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class ModalGit extends Component {

    state = {
        input: ''
    };

    handlerInput = (input) => {
        this.setState({ input });
    };

    render() {
        return (
            <Modal animationType="slide" visible={this.props.visible}
                transparent={true} onRequestClose={this.props.onCancel}>

                <View style={styles.frame}>
                    <View style={styles.modal}>

                        <Text style={styles.title}>{this.props.title}</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={this.handlerInput}
                            placeholder={this.props.placeholderInput} />

                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={[styles.btn, styles.btnCancel]}
                                onPress={this.props.onCancel}>
                                <Text style={styles.btnText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.btn, styles.btnSave]}
                                onPress={() => {
                                    this.props.onSave(this.state.input)
                                    this.props.onCancel()
                                }}>

                                <Text style={styles.btnText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: '35%'
    },
    modal: {
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FCFCFC'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 5,
        borderColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 5,
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        height: 35,
        width: 80,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCancel: {
        backgroundColor: '#dfdfdf'
    },
    btnSave: {
        backgroundColor: '#25DE0F'
    },
    btnText: {
        color: '#F9F9F9'
    }
});