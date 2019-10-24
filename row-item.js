import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

<<<<<<< Updated upstream
export default function RowItem({ item, handleDelete, handleShowModalEdit}) {
=======
export default function RowItem({item, handleDelete, handleEdit}) {
>>>>>>> Stashed changes
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.is_active ? 'Active' : 'Deactive'}</Text>
            <Image style={styles.avatar} source={{uri: item.avatar}} />
<<<<<<< Updated upstream
            <Button
                title='DELETE'
                onPress={() => handleDelete(item.id)}
            />
            <Button
                title='EDIT'
                onPress={() => handleShowModalEdit(item.id)}
            />
=======

            <View>
                <Button
                    title='DELETE'
                    onPress={() => handleDelete(item.id)}
                /><Button
                    title='EDIT'
                    onPress={() => handleEdit(item.id)}
                />
            </View>

>>>>>>> Stashed changes
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30
    }
});
