import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export const GoalInput = ({ setGoals }) => {
  const [goalText, setGoalText] = useState('');

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    setGoals((current) => [...current, goalText]);
    setGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Ponha teu item aqui'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title='Adicionar' onPress={addGoalHandler} color='lightskyblue' />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '70%',
    padding: 10,
    backgroundColor: '#e8faff',
    color: 'black',
  },
});
