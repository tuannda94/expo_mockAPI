// import {useState}, FlatList
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Switch,
  Button
} from 'react-native';
import ModalAddUser from './modal-add-user';
import List from './list';
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
  // Khai bao state visible xu ly hien thi Modal them user
  const [visible, setVisible] = useState(false);

  const [editUser, setEditUser] = useState(null);
  // Khai bao API de su dung khi fetch
  const API = 'http://5da70d97127ab80014c1dc19.mockapi.io/tuan/users/';

  // useEffect(xu ly API, [mang nhung bien co su thay doi])
  useEffect(
    () => {
      // call API lay ds users
      handleFetchData();
    },
    [] // mang bien can theo doi thay doi de tiep tuc goi API
  );
  const handleFetchData = () => {
    fetch(API)
      .then(response => response.json())
      .then(responseJson => {
        console.log(345);
        // Thuc hien setstate bang setUsers de cap nhat gia tri cho state users
        setUsers(responseJson);
      })
      .catch(error => console.log(error));
  }

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
    .then(() => handleFetchData())
    .catch(error => console.log(error));
  }

  const handleAddUser = (name, address, phone, avatar, is_active) => {
    // Call API them moi user
    fetch(
      API,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, address, phone, avatar, is_active
        }),
      }
    ).then(() => handleFetchData())
    .catch(error => console.log(error));
  }

  const handleShowModalEdit = (id) => {
    fetch(
      `${API}/${id}`
    ).then(response => response.json())
    .then(responseJson => {
      setEditUser(responseJson);
      setVisible(true);
    })
    .catch(error => console.log(error));
  }

  const handleUpdateUser = (id, name, address, phone, avatar, is_active) => {
    fetch(
      `${API}/${id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, address, phone, avatar, is_active
        }),
      }
    ).then(() => handleFetchData())
      .catch(error => console.log(error));

    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add User' onPress={() => setVisible(true)} />
      <ModalAddUser
        user={editUser}
        visible={visible}
        handleAddUser={handleAddUser}
        handleUpdateUser={handleUpdateUser}
      />
      <List
        users={users}
        handleDelete={handleDelete}
        handleFetchData={handleFetchData}
        handleShowModalEdit={handleShowModalEdit}
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
