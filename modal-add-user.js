import React, {useState, useEffect} from 'react';
import {
    Modal,
    TextInput,
    StyleSheet,
    Text,
    Button,
    View,
    Switch
} from 'react-native';

export default function ModalAddUser({ user, visible, handleAddUser, handleUpdateUser}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [is_active, setActive] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(
        () => {
            if (user) {
                setName(user.name);
                setAddress(user.address);
                setPhone(user.phone);
                setAvatar(user.avatar);
                setActive(user.is_active);
            }
        },
        [user]
    )

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
                    <TextInput
                        value={address}
                        placeholder="address"
                        onChangeText={(value) => setAddress(value)}
                    />
                    <TextInput
                        value={phone}
                        placeholder="phone"
                        onChangeText={(value) => setPhone(value)}
                    />
                    <TextInput
                        value={avatar}
                        placeholder="avatar"
                        onChangeText={(value) => setAvatar(value)}
                    />
                    <Switch
                        value={is_active}
                        onValueChange={(value) => setActive(value)}
                    />
                    <Button
                        title='Submit'
                        onPress={() => {
                            if (user) {
                                handleUpdateUser(user.id, name, address, phone, avatar, is_active);
                            } else {
                                handleAddUser(name, address, phone, avatar, is_active);
                            }
                        }}
                    />
                </View>
            </Modal>
        </View>
    )
}
