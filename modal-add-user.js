import React, {useState} from 'react';
import {
    Modal,
    TextInput,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

export default function ModalAddUser({visible, handleAddUser}) {
    const [name, setName] = useState('');

    return (
        <View>
            <Modal
                visible={visible}
                transparent={false}
                animationType='fade'
            >
                <View>
                    <TextInput
                        value={name}
                        placeholder="Name"
                        onChangeText={(value) => setName(value)}
                    />
                    <Button
                        title='Submit'
                        onPress={() => handleAddUser(name)}
                    />
                </View>
            </Modal>
        </View>
    )
}
