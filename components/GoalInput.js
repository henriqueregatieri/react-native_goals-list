import { StyleSheet, TextInput, View, Button } from 'react-native';

export const GoalInput = ({ goalInputHandler, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Ponha teu item aqui'
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title='Adicionar' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    paddingBottom: 20,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '70%',
    padding: 10,
  },
});
