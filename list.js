import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import RowItem from './row-item';

export default function List({
    users,
    handleDelete,
<<<<<<< Updated upstream
    handleShowModalEdit
=======
    handleEdit
>>>>>>> Stashed changes
}) {
    // useEffect(() => {
    //     // handleFetchData();
    // }, [users]);

    return (
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <RowItem
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleShowModalEdit={handleShowModalEdit}
          />
        )}
        keyExtractor={user => user.id}
      />
    );
}
