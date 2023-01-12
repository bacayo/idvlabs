import { View, Modal, GestureResponderEvent } from 'react-native';
import React from 'react';

import ButtonCard from '../ButtonCard';
import TextView from '../Views/TextView';
import styles from './MessageBoxModal.Styles';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

const MessageBoxModal = ({ modalVisible, setModalVisible, onPress }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextView text={'This product will be deleted'} />
          <View style={styles.buttonsWrapper}>
            <View style={styles.buttonContainer}>
              <ButtonCard title="Confirm" danger={true} onPress={onPress} />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonCard
                title="Cancel"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MessageBoxModal;
