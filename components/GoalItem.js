import { Pressable, StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ item, index, setGoals }) => {
  function removeGoal(index) {
    setGoals((current) => {
      return current.filter((_, i) => i !== index);
    });
  }

  return (
    <Pressable
      onPress={() => {
        removeGoal(index);
      }}
    >
      <View style={styles.goalItemContainer} key={index}>
        <Text style={styles.goalItemText}>{item}</Text>
      </View>
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
    backgroundColor: 'dodgerblue',
    borderRadius: 100,
  },
  goalItemText: {
    color: 'white',
  },
});
