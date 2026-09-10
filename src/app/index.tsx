import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

interface Idea {
  id: string;
  text: string;
}

export default function App() {
  const [idea, setIdea] = useState<string>('');
  const [ideaList, setIdeaList] = useState<Idea[]>([]);

  const handleSubmit = () => {
    if (idea.trim().length > 0) {
      setIdeaList([{ id: Date.now().toString(), text: idea }, ...ideaList]);
      setIdea('');
    }
  };

  // New function to filter out the deleted idea
  const handleDelete = (id: string) => {
    setIdeaList(ideaList.filter(item => item.id !== id));
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Idea Vault</Text>
      <Text style={styles.subtitle}>Log your notes and ideas.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new idea..."
          placeholderTextColor="#666"
          value={idea}
          onChangeText={setIdea}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ideaList}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.text}</Text>
            {/* New delete button */}
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row', // Aligns text and button horizontally
    justifyContent: 'space-between', // Pushes the X to the far right
    alignItems: 'center',
  },
  listText: {
    color: '#e0e0e0',
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  deleteText: {
    color: '#ff5252', // A clean red for the delete action
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
  },
});