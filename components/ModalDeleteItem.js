import { Text, Modal, StyleSheet, View, Pressable } from 'react-native';

export const ModalDeleteItem = ({ onCancel, onDelete, visible }) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.modal}>
        <Text style={styles.text}>
          Tens a certeza de que desejas excluir o item?
        </Text>

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.buttonYes} onPress={handleDelete}>
            <Text style={{ fontSize: 16 }}>Sim</Text>
          </Pressable>
          <Pressable style={styles.buttonNo} onPress={handleCancel}>
            <Text style={{ fontSize: 16 }}>Ah, pensando melhor... não</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    marginBottom: 40,
  },
  buttonsContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  buttonYes: {
    backgroundColor: '#7d7',
    paddingHorizontal: 30,
    paddingVertical: 24,
    fontSize: 16,
    borderRadius: '100%',
  },
  buttonNo: {
    backgroundColor: '#d77',
    paddingHorizontal: 30,
    paddingVertical: 24,
    fontSize: 16,
    borderRadius: '100%',
  },
});
