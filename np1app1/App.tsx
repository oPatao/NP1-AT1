import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Alert,FlatList, Switch, ListRenderItem,Modal } from 'react-native';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

export default function App() {
   const [tarefa, setTarefa] = useState<string>('');
   const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([
    { id: '1', texto: 'Estudar TypeScript', concluida: true },
    { id: '2', texto: 'Fazer compras', concluida: false },
    { id: '3', texto: 'Ler um livro', concluida: false },]);
   
   const handleAdicionarTarefa = () => {
    if (tarefa.trim() === '') {
      Alert.alert("Erro", "Por favor, digite uma tarefa antes de adicionar.");
      return;
    }
    const novaTarefa: Tarefa = {
      id: String(Date.now()),
      texto: tarefa,
      concluida: false,
    };
    setListaTarefas([novaTarefa, ...listaTarefas]);
    setTarefa('');
  };

    const toggleConcluida = (id: string) => {
    setListaTarefas(listaTarefas.map(item => 
      item.id === id ? { ...item, concluida: !item.concluida } : item
    ));
  };
  
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa | null>(null);
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);

  const abrirModal = (tarefa: Tarefa) => {
    setTarefaSelecionada(tarefa);
    setModalVisivel(true);
  };


  const renderItem: ListRenderItem<Tarefa> = ({ item }) => (
    <View style={styles.itemLista}>
      <Text style={[styles.itemTexto, item.concluida && styles.itemTextoConcluido]}>
        {item.texto}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={item.concluida ? "#3498db" : "#f4f3f4"}
        onValueChange={() => toggleConcluida(item.id)}
        value={item.concluida}
      />
    </View>


  );
   return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Minhas Tarefas (TS)</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          placeholderTextColor="#95a5a6"
          value={tarefa}
          onChangeText={setTarefa} 
        />
        <TouchableOpacity style={styles.button} onPress={handleAdicionarTarefa}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
        data={listaTarefas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa na lista!</Text>}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    padding: 20,
    backgroundColor: '#34495e',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTexto: {
    fontSize: 18,
  },
  itemTextoConcluido: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#7f8c8d',
  },
});