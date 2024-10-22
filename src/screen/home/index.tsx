import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { FormTask } from '../../components/Form';
import { Tasks } from '../../components/Tasks';
import Actions from '../../components/actions';




export function Home () {
  const [filter, setFilter] = useState(false)

  return (
    <>
    <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notas</Text>
      <Text style={styles.text}>Crie e gerencie suas tarefas</Text>

      <FormTask/>
      <Actions filter={filter} setFilter={ (status) => setFilter(status) } />
       
      {filter && (
        <Tasks filter={filter} />
      )}

      {!filter && (
        <Tasks filter={filter} />
      )}

    

    

    </SafeAreaView>
    </>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title:{
    color: "#64748b",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text:{
    color: "#64748b"
  }
});

