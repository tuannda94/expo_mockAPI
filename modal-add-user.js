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

<<<<<<< Updated upstream
export default function ModalAddUser({ user, visible, handleAddUser, handleUpdateUser}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [is_active, setActive] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(
        () => {
            if (user) {
=======
export default function ModalAddUser({
    visible,
    handleAddUser,
    user,
    handleUpdate
}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [active, setActive] = useState(false);

    useEffect(
        () => {
            if (user != null) {
>>>>>>> Stashed changes
                setName(user.name);
                setAddress(user.address);
                setPhone(user.phone);
                setAvatar(user.avatar);
                setActive(user.is_active);
            }
        },
<<<<<<< Updated upstream
        [user]
    )
=======
        [user] // neu user thay doi, se gan bang code ben tren
    )

    // Kiem tra xem da nhan duoc user hay chua
    console.log(user, 123123123);

    // Goi ham khi press submit
    const handleSubmit = () => {
        // Thuc hien call api cung voi du lieu input
        if (user != null) {
            handleUpdate(user.id, name, address, phone, avatar, active);
        } else {
            handleAddUser(name, address, phone, avatar, active);
        }

        // Set du lieu ve mac dinh
        setName('');
        setAddress('');
        setPhone('');
        setAvatar('');
        setActive(false);
    };
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
                        placeholder="Address"
                        onChangeText={(value) => setAddress(value)}
                    /><TextInput
                        value={phone}
                        placeholder="Phone"
                        onChangeText={(value) => setPhone(value)}
                    /><TextInput
                        value={avatar}
                        placeholder="Avatar"
                        onChangeText={(value) => setAvatar(value)}
                    />
                    <Switch
                        value={active}
>>>>>>> Stashed changes
                        onValueChange={(value) => setActive(value)}
                    />
                    <Button
                        title='Submit'
<<<<<<< Updated upstream
                        onPress={() => {
                            if (user) {
                                handleUpdateUser(user.id, name, address, phone, avatar, is_active);
                            } else {
                                handleAddUser(name, address, phone, avatar, is_active);
                            }
                        }}
=======
                        onPress={() => handleSubmit()}
>>>>>>> Stashed changes
                    />
                </View>
            </Modal>
        </View>
    )

}
