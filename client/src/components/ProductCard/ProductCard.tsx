import { View, Image, Pressable } from 'react-native';
import React from 'react';
import TextView from '../Views/TextView';

import styles from './ProductCard.Styles';

type Props = {
  image: string;
  title: string;
  price: string;
  product_stock: number;
};

const ProductCard = (props: Props) => {
  return (
    <Pressable style={styles.card}>
      <View>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <TextView text={props.title} />
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
