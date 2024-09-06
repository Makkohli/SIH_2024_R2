import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';
import { fetchGlobalHealthNews } from '../../components/newsService';

const defaultImage = 'https://via.placeholder.com/100'; // Default image URL

export default function Profile() {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Number of articles to display

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await fetchGlobalHealthNews();
        if (fetchedArticles.length === 0) {
          setError('No articles found.');
        }
        setArticles(fetchedArticles);
        setDisplayedArticles(fetchedArticles.slice(0, visibleCount)); // Initialize with limited articles
      } catch (error) {
        setError('Error fetching articles.');
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  const loadMoreArticles = () => {
    const newCount = visibleCount + 5;
    setVisibleCount(newCount);
    setDisplayedArticles(articles.slice(0, newCount)); // Update displayed articles
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image || defaultImage }}
        style={styles.image}
        resizeMode='cover'
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>News</Text>
      <Text style={styles.subheading}>Global Health News</Text>
      <FlatList
        data={displayedArticles}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          articles.length > visibleCount && (
            <Button title="Load More" onPress={loadMoreArticles} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    padding:10,
    marginTop:10
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    marginLeft:12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  placeholderText: {
    color: '#888',
    fontSize: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    fontSize: 18,
  },
});