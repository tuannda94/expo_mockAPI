import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import RowItem from './row-item';

export default function List({
    users,
    handleDelete,
    handleFetchData
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
            handleDelete={handleDelete}
          />
        )}
        keyExtractor={user => user.id}
      />
    );
}
