import { View, Image, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getProductAsync, updateProductAsync } from '../../redux/services';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootStackParamList } from '../../types/nav.types';
import styles from './DetailScreen.Styles';
import TextView from '../../components/Views/TextView';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { resetProduct } from '../../redux/slices/productSlice';
import HeaderView from '../../components/Views/HeaderView';
import TextInputView from '../../components/Views/TextInputView/TextInputView';
import { strings } from '../../infrastructure/strings/strings';
import ButtonCard from '../../components/ButtonCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({ route }: Props) => {
  const dispatch = useAppDispatch();
  const [stock, setStock] = useState('');

  const { id } = route.params;

  const { product, isLoading, productError } = useAppSelector(
    state => state.product,
  );

  //update product change stock number
  const updateProduct = () => {
    dispatch(
      updateProductAsync({
        id: id,
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
        product_stock: Number(stock),
      }),
    );
  };

  useEffect(() => {
    dispatch(getProductAsync(id));

    return () => {
      dispatch(resetProduct());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  } else if (productError) {
    return <Error />;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.productWrapper}>
        <HeaderView text={product.title} />
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.productInfoWrapper}>
          <TextView text={product.description} />
          <TextView
            fontWeight="bold"
            text={strings.price + product.price + strings.currencyTL}
          />
          <TextView
            fontWeight="bold"
            text={strings.stock + product.product_stock}
          />
        </View>
        <View style={styles.itemStockWrapper}>
          <TextView text={strings.changeStockNumber} />
          <TextInputView
            value={stock}
            onChangeText={setStock}
            placeholder={strings.enterStock}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonCard title={strings.submit} onPress={updateProduct} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default DetailScreen;
