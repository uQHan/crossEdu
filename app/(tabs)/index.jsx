import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { useBoundStore } from '@/store/useBoundStore';

export default function LetterSelectionScreen() {
  const { letter, setLetter } = useBoundStore(); // Access letter state and setLetter function from the store

  const handleGenerate = () => {
    alert(`You selected: ${letter}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Letter</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={letter}
          onValueChange={(itemValue) => setLetter(itemValue)} // Update the letter state in the store
          style={styles.picker}
        >
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
            <Picker.Item key={letter} label={letter} value={letter} />
          ))}
        </Picker>
      </View>
      <Button title="Generate" onPress={handleGenerate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  picker: {
    width: '100%',
    height: 50,
  },
});
