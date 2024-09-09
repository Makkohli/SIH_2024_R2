import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BrushZoomGraph from '../components/BrushZoomGraph';
import VictoryAreaAnimation from '../components/VictoryAreaAnimation';
import StackedPolarBars from '../components/StackedPolarBar';
import StackedHistogram from '../components/StackedHistogram';
import StackedGroupedBars from '../components/StackedGroupedBar';
import RadarChart from '../components/RadarChart';
import VoronoiTooltipGraph from '../components/VoronoiTooltipGraph';
import LineGraph from '../components/LineGraph';
import BarGraph from '../components/BarGraph';

export default function Analytics() {
  const [expanded, setExpanded] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Health Analytics Dashboard</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search analytics..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search" size={24} color="#000" />
      </View>

      {/* Graph Sections */}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('epidemiologicalData')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Epidemiological Data</Text>
            <Icon name={expanded.epidemiologicalData ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.epidemiologicalData && <BrushZoomGraph />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('areaAnimation')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Victory Area Animation</Text>
            <Icon name={expanded.areaAnimation ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.areaAnimation && <VictoryAreaAnimation />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('polarBars')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stacked Polar Bars</Text>
            <Icon name={expanded.polarBars ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.polarBars && <StackedPolarBars />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('stackedHistogram')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stacked Histogram</Text>
            <Icon name={expanded.stackedHistogram ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.stackedHistogram && <StackedHistogram />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('stackedGroupedBars')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stacked Grouped Bars</Text>
            <Icon name={expanded.stackedGroupedBars ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.stackedGroupedBars && <StackedGroupedBars />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('radarChart')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Radar Chart</Text>
            <Icon name={expanded.radarChart ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.radarChart && <RadarChart />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('voronoiTooltip')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Voronoi Tooltip Graph</Text>
            <Icon name={expanded.voronoiTooltip ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.voronoiTooltip && <VoronoiTooltipGraph />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('lineGraph')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Line Graph</Text>
            <Icon name={expanded.lineGraph ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.lineGraph && <LineGraph />}
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection('barGraph')}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Bar Graph</Text>
            <Icon name={expanded.barGraph ? 'expand-less' : 'expand-more'} size={24} color='#000' />
          </View>
        </TouchableOpacity>
        {expanded.barGraph && <BarGraph />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
  },
});
