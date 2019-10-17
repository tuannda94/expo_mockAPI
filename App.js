// import {useState}, FlatList
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Switch
} from 'react-native';
import RowItem from './row-item';
const list = [
  {
    id: 1000,
    name: 'Nguyen Van A',
    address: 'Ha Noi',
    phone: '0123456789',
    avatar: '',
    is_active: true
  }
];
// http://5da70d97127ab80014c1dc19.mockapi.io/tuan/users

export default function App() {
  const [users, setUsers] = useState(list);
  // Khai bao state visible xu ly hien thi anh
  const [visible, setVisible] = useState(true);
  // Khai bao API de su dung khi fetch
  const API = 'http://5da70d97127ab80014c1dc19.mockapi.io/tuan/users/';

  // useEffect(xu ly API, [mang nhung bien co su thay doi])
  useEffect(
    () => {
      // call API lay ds users
      fetch(API)
        .then(response => response.json())
        .then(responseJson => {
          console.log(345);
          // Thuc hien setstate bang setUsers de cap nhat gia tri cho state users
          setUsers(responseJson);
        })
        .catch(error => console.log(error));
    },
    [] // mang bien can theo doi thay doi de tiep tuc goi API
  );


  // // ham xu ly viec an hien anh
  // const handleSwitch = (value) => {
  //   setVisible(value); // ! the hien gia tri doi cua trang thai hien tai
  // }

  // ham xu ly viec xoa item
  const handleDelete = (itemId) => {
    // console.log(itemId);
    fetch(
      `${API}/${itemId}`,
      {method: 'DELETE'}
    )
    // .then(response => response.json())
    .then(() => console.log('Deleted!'))
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.topImage}>
        {
          visible ?
            <Image
              style={styles.image}
              source={require('./chim.png')}
            /> : null
        }
        <Switch
          value={visible}
          onValueChange={(value) => setVisible(value)}
        />
      </View>
      <FlatList
        data={users}
        //truyen ca item sang RowItem
        renderItem={({item}) =>
          <RowItem
            item={item}
            handleDelete={handleDelete} // truyen props la ham xoa sang RowItem
          />
        }
        keyExtractor={(user) => user.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
});
