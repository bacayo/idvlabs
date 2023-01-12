import { View } from 'react-native';
import React, { useState } from 'react';

import styles from './AddProductScreen.Styles';
import TextInputView from '../../components/Views/TextInputView/TextInputView';
import HeaderView from '../../components/Views/HeaderView';
import ButtonCard from '../../components/ButtonCard';
import { useAppDispatch } from '../../hooks/hooks';
import { addProductAsync } from '../../redux/services';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/nav.types';

const AddProductScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSubmit = () => {
    dispatch(
      addProductAsync({
        category,
        description,
        price,
        image,
        product_stock: Number(stock),
        title,
      }),
    );
    navigation.navigate('Home');
  };

  return (
    <View style={styles.contianer}>
      <HeaderView text={'Add Product'} />
      <View style={styles.inputWrapper}>
        <TextInputView
          placeholder="title"
          keyboardType="default"
          value={title}
          onChangeText={setTitle}
        />
        <TextInputView
          placeholder="price"
          keyboardType="default"
          value={price}
          onChangeText={setPrice}
        />
        <TextInputView
          placeholder="stock"
          keyboardType="default"
          value={stock}
          onChangeText={setStock}
        />
        <TextInputView
          placeholder="description"
          keyboardType="default"
          value={description}
          onChangeText={setDescription}
        />
        <TextInputView
          placeholder="image"
          keyboardType="default"
          value={image}
          onChangeText={setImage}
        />
        <TextInputView
          placeholder="category"
          keyboardType="default"
          value={category}
          onChangeText={setCategory}
        />
      </View>
      <View style={styles.bottomContainer}>
        <ButtonCard title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default AddProductScreen;
