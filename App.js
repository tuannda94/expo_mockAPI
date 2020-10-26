// import {useState}, FlatList
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Switch,
  Button
} from 'react-native';
import List from './list';
import ModalAddUser from './modal-add-user';

const list = [];

export default function App() {
  const [users, setUsers] = useState(list);
  // Khai bao state visible xu ly hien thi Modal them user
  const [visible, setVisible] = useState(false);
  // Khai bao API de su dung khi fetch
  const API = 'http://5da70d97127ab80014c1dc19.mockapi.io/tuan/users/';

  // useEffect(xu ly API, [mang nhung bien co su thay doi])
  useEffect(
    () => {
      // call API lay ds users
      handleFetchData();
    },
    [] // chi de mang rong, handleFetchData se goi 1 lan duy nhat
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

  const handleAddUser = (name) => {
    // Call API them moi user
    fetch(
      API,
      {
        method: 'POST',
        body: JSON.stringify({
          name: name
        })
      },
    ).then(() => handleFetchData())
    .catch(error => console.log(error));

    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Add User' onPress={() => setVisible(true)} />
      <ModalAddUser
        visible={visible}
        handleAddUser={handleAddUser}
      />
      <List
        users={users}
        handleDelete={handleDelete}
        handleFetchData={handleFetchData}
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
