import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles/styles';
type AlertBoxProps = {
  label: string;
  onPress: () => void;
  buttonTitle: string;
};
const AlertBox = ({ label, onPress, buttonTitle = 'Ok' }: AlertBoxProps) => {
  return (
    <SafeAreaView>
      <Modal>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{label}</Text>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.textStyle}>{buttonTitle}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AlertBox;
