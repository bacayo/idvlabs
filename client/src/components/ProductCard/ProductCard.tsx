import { View, Image } from 'react-native';
import React from 'react';
import TextView from '../Views/TextView';

import styles from './ProductCard.Styles';

type Props = {
  image: string;
  title: string;
  price: string;
};

const ProductCard = (props: Props) => {
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <TextView text={props.title} />
      <TextView text={props.price} extraText="TL" />
    </View>
  );
};

export default ProductCard;
