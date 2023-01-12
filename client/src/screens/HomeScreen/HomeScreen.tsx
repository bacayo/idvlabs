import { View, FlatList, ListRenderItem } from 'react-native';
import React, { useEffect } from 'react';

import styles from './HomeScreen.Styles';
import FloatingButton from '../../components/FloatinButton/FloatingButton';
import ProductCard from '../../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllProductsAsync } from '../../redux/services';
import { Products } from '../../types/types';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/nav.types';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const { products, isLoading, productsError } = useAppSelector(
    state => state.products,
  );

  // navigat add product screen
  const handlePress = () => {
    navigation.navigate('AddProduct');
  };

  // render products
  const renderProducts: ListRenderItem<Products> = ({ item }) => (
    <ProductCard {...item} />
  );

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderProducts} numColumns={2} />
      <FloatingButton onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;
