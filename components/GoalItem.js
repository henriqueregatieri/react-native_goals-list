import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ item, index, removeGoal }) => {
  return (
    <View style={styles.goalItemContainer} key={index}>
      <Text style={styles.goalItemText}>{item}</Text>
      <Text
        title='Remover'
        style={styles.goalItemButton}
        onPress={() => {
          removeGoal(index);
        }}
      >
        X
      </Text>
    </View>
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
  goalItemButton: {
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 4,
  },
});
