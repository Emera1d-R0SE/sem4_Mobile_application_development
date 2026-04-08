import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import pokemonList from "./data.json";
import { SafeAreaView } from 'react-native-safe-area-context';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
         />
      </View>
    </SafeAreaView>
  );
}












const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
  },
});


