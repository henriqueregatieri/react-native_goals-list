import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import imgHappy from './assets/images/happy.jpg';

export default function App() {
  const [goals, setGoals] = useState([]);

  const isLastItem = (index) => index === goals.length - 1;

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
            <>
              <GoalItem item={item} index={index} setGoals={setGoals} />
              {isLastItem(index) && (
                <View style={styles.imageContainer}>
                  <Image source={imgHappy} style={styles.image} />
                </View>
              )}
            </>
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
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
