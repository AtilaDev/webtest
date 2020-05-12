import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [test, setTest] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>webtest {test}</Text>
      <Button title="press me again" onPress={() => setTest('webtest!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
