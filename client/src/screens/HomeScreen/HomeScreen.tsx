import { View, FlatList, ListRenderItem } from 'react-native';
import React, { useEffect } from 'react';

import styles from './HomeScreen.Styles';
import FloatingButton from '../../components/FloatinButton/FloatingButton';
import ProductCard from '../../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllProductsAsync } from '../../redux/services';
import { Products } from '../../types/types';

const HomeScreen = () => {
  const renderProducts: ListRenderItem<Products> = ({ item }) => (
    <ProductCard {...item} />
  );

  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderProducts} numColumns={2} />
      <FloatingButton />
    </View>
  );
};

export default HomeScreen;
