import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import imgHappy from './assets/images/happy.png';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);

  const isLastItem = (index) => index === goals.length - 1;

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <GoalInput setGoals={setGoals} />
        <View style={styles.goalsContainer}>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.text}>
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
    </>
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
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
