import React from 'react';
import { StyleSheet, Text, View, Button, Picker, FlatList, TouchableOpacity } from 'react-native';
import { useBoundStore } from '@/store/useBoundStore';


export default function LetterSelectionScreen() {
  const { letter, setLetter } = useBoundStore(); // Access letter state and setLetter function from the store

  const handleGenerate = () => {
    alert(`You selected: ${letter}`);
  };
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // Generate letters A-Z

  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-2xl font-bold mb-5">Select a Letter</Text>
      <FlatList
        data={letters}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`p-4 mx-2 border rounded ${item === letter ? 'bg-blue-500 border-blue-700' : 'bg-gray-100 border-gray-300'
              }`}
            onPress={() => setLetter(item)} // Update the letter state in the store
          >
            <Text className={`text-lg font-bold ${item === letter ? 'text-white' : 'text-gray-800'}`}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-5">
        <Button title="Generate" onPress={handleGenerate} />
      </View>
    </View>
  );
}
