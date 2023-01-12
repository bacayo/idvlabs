import { View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import TextView from '../Views/TextView';

import styles from './ProductCard.Styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/nav.types';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteProductAsync } from '../../redux/services';
import MessageBoxModal from '../MessageBoxModal';
import { strings } from '../../infrastructure/strings/strings';

type Props = {
  image: string;
  title: string;
  price: string;
  product_stock: number;
  id: number;
};

const ProductCard = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    console.log(props.id);
    navigation.navigate('Detail', { id: props.id, title: props.title });
  };

  // //* delete product on long press
  const deleteProduct = () => {
    dispatch(deleteProductAsync(props.id));
  };

  return (
    <Pressable
      onLongPress={() => {
        setModalVisible(true);
      }}
      onPress={handleNavigation}
      style={styles.card}>
      <View>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <TextView text={props.title} numberOfLines={1} />
      <View style={styles.bottomContainer}>
        <View style={styles.price}>
          <TextView text={props.price + ' TL'} />
        </View>
        <TextView text={strings.stock + props.product_stock} />
      </View>
      <MessageBoxModal
        onPress={deleteProduct}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Pressable>
  );
};

export default ProductCard;
