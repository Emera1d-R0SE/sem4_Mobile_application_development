import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
   <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>Danish</Text>
        </View>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          horizontal
          style={styles.container}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </ScrollView>
      </View>
      <View style={{color:"black"}}>
           <Text>
            helowwww
           </Text>
      </View>
     </SafeAreaView>
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#dadada',
    width: "100%",
    height: "100%"
  },
  box1: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    borderRadius: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    width: 100,
    borderRadius: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  card: {
    width: 100,
    borderRadius: 10,
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    alignItems: "center",
  }
});
