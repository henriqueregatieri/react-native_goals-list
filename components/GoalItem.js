import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ModalDeleteItem } from './ModalDeleteItem';

export const GoalItem = ({ item, index, setGoals }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function removeGoal() {
    setGoals((current) => {
      return current.filter((_, i) => i !== index);
    });

    hideModal();
  }

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  function handleItemPress() {
    showModal();
  }

  return (
    <Pressable onPress={handleItemPress}>
      <View style={styles.goalItemContainer} key={index}>
        <Text style={styles.goalItemText}>{item}</Text>
      </View>
      <ModalDeleteItem
        visible={modalIsVisible}
        onDelete={removeGoal}
        onCancel={hideModal}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: 'darkblue',
    borderRadius: 100,
  },
  goalItemText: {
    color: 'white',
    fontSize: 18,
  },
});
