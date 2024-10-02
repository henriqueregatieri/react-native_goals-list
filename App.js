import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ponha teu item!' style={styles.textInput} />
        <Button title='Adicionar' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Minha lista</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '70%',
    padding: 10,
  },
  goalsContainer: {
    flex: 4,
  },
});
