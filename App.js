import { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <View style={styles.goalsContainer}>
        <View style={{ marginVertical: 20 }}>
          <Text>
            {goals.length === 0
              ? 'Nenhum item adicionado'
              : '(pressione um item para removê-lo)'}
          </Text>
        </View>
        <FlatList
          data={goals}
          renderItem={({ item, index }) => (
            <GoalItem item={item} index={index} setGoals={setGoals} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});
