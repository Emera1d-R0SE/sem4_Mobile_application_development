import React, { memo } from 'react';
import { 
  SafeAreaView, FlatList, View, Text, ScrollView, 
  StyleSheet, StatusBar, TouchableOpacity, ListRenderItem 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Product, RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Feed'>;

const CATEGORIES: string[] = ['Sneakers', 'Hoodies', 'Accessories', 'Limited', 'Resell'];

const DATA: Product[] = Array.from({ length: 500 }, (_, i) => ({
  id: i.toString(),
  title: `Drop #${i + 1}`,
  price: `$${(Math.random() * 500 + 50).toFixed(0)}`,
  isHero: (i + 1) % 5 === 0,
}));

const ProductCard = memo(({ item, onPress }: { item: Product, onPress: (p: Product) => void }) => (
  <TouchableOpacity 
    onPress={() => onPress(item)}
    style={[styles.card, item.isHero ? styles.heroCard : styles.gridCard]}
  >
    <View style={styles.imagePlaceholder}>
      <View style={styles.priceTag}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>
    <Text style={styles.cardTitle}>{item.title}</Text>
  </TouchableOpacity>
));

const FeedScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard 
      item={item} 
      onPress={(product) => navigation.navigate('ProductDetail', { product })} 
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ height: 60 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryBar}>
          {CATEGORIES.map(cat => <Text key={cat} style={styles.categoryItem}>{cat}</Text>)}
        </ScrollView>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        initialNumToRender={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  categoryBar: { paddingHorizontal: 16, alignItems: 'center' },
  categoryItem: { marginRight: 24, fontSize: 16, fontWeight: 'bold', color: '#000' },
  card: { margin: 8, borderRadius: 12, backgroundColor: '#f9f9f9' },
  gridCard: { width: '45%' },
  heroCard: { width: '95%', height: 250 },
  imagePlaceholder: { height: 160, backgroundColor: '#eee', borderRadius: 12 },
  priceTag: { position: 'absolute', right: -10, top: 20, backgroundColor: '#000', padding: 8 },
  priceText: { color: '#fff', fontWeight: 'bold' },
  cardTitle: { padding: 10, fontWeight: '600' }
});

export default FeedScreen;
