import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default function RowItem({ item, handleDelete, handleShowModalEdit}) {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.is_active ? 'Active' : 'Deactive'}</Text>
            <Image style={styles.avatar} source={{uri: item.avatar}} />
            <Button
                title='DELETE'
                onPress={() => handleDelete(item.id)}
            />
            <Button
                title='EDIT'
                onPress={() => handleShowModalEdit(item.id)}
            />
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
