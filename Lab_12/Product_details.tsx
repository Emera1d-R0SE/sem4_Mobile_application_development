import React, { useState } from 'react';
import { 
  View, Text, SafeAreaView, ScrollView, 
  TouchableOpacity, StyleSheet 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'ProductDetail'>;

const SIZES: string[] = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'];

const ProductDetail: React.FC<Props> = ({ route, navigation }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.largeImage} />
        
        <Text style={styles.sectionHeader}>Select Size</Text>
        <View style={styles.sizeGrid}>
          {SIZES.map(size => (
            <TouchableOpacity 
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[styles.sizeBox, selectedSize === size && styles.sizeBoxSelected]}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextSelected]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.description}>{"\n\n".repeat(15)}End of description.</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.joinButton} disabled={!selectedSize}>
          <Text style={styles.joinButtonText}>
            {selectedSize ? `Join Waitlist (${selectedSize})` : 'Select Size'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 20 },
  backButton: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '900', marginBottom: 20 },
  largeImage: { width: '100%', height: 400, backgroundColor: '#eee', marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  sizeGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  sizeBox: { width: '30%', paddingVertical: 15, borderWidth: 1, borderColor: '#eee', alignItems: 'center', margin: '1.5%' },
  sizeBoxSelected: { backgroundColor: '#000' },
  sizeText: { fontWeight: 'bold' },
  sizeTextSelected: { color: '#fff' },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee' },
  joinButton: { backgroundColor: '#000', paddingVertical: 18, borderRadius: 30, alignItems: 'center' },
  joinButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  description: { color: '#666' }
});

export default ProductDetail;
