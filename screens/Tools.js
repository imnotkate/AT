import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Tools = ({ navigation }) => {
  const tools = [
    {
      title: 'Metronome',
      onPress: () => navigation.navigate('Metronome'), // Navigate to MetronomePage on press
    },
    {
      title: 'Chord Library',
      onPress: () => navigation.navigate('Metronome'), // Navigate to MetronomePage on press
    },
    {
      title: 'Chord Diagram',
      onPress: () => navigation.navigate('Metronome'), // Navigate to MetronomePage on press
    },
    // Add more tools as needed
  ];

  return (
    
    <View style={styles.container}>
      <Text style={{fontSize: 30, marginBottom: 40}}>Tools</Text>
      {tools.map((tool, index) => (
        <TouchableOpacity key={index} style={styles.toolBlock} >
          <Text style={styles.toolTitle}>{tool.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 100,
    

  },
  toolBlock: {
    // length: 250, // Adjust width as needed to fit multiple blocks in a row
    aspectRatio: 1.75, // Maintain square aspect ratio for blocks
    backgroundColor: 'lightgray',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    
    
    
  },
  toolTitle: {
    fontSize: 18,
  },
});

export default Tools;
