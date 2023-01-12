import { View, Image, Pressable } from 'react-native';
import React from 'react';
import TextView from '../Views/TextView';

import styles from './ProductCard.Styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/nav.types';

type Props = {
  image: string;
  title: string;
  price: string;
  product_stock: number;
  id: number;
};

const ProductCard = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate('Detail', { id: props.id, title: props.title });
  };

  return (
    <Pressable onPress={handleNavigation} style={styles.card}>
      <View>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <TextView text={props.title} numberOfLines={1} />
      <View style={styles.bottomContainer}>
        <View style={styles.price}>
          <TextView text={props.price + ' TL'} />
        </View>
        <TextView text={'Stock: ' + props.product_stock} />
      </View>
    </Pressable>
  );
};

export default ProductCard;
