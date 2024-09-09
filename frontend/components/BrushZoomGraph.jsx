import React from 'react';
import { VictoryChart, VictoryBrushContainer, VictoryAxis, VictoryLine } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: new Date(2015, 1, 1), y: 470 },
  { x: new Date(2016, 1, 1), y: 300 },
  { x: new Date(2017, 1, 1), y: 520 },
  { x: new Date(2018, 1, 1), y: 200 },
  { x: new Date(2019, 1, 1), y: 610 },
  { x: new Date(2020, 1, 1), y: 410 },
];

const BrushZoomGraph = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }}
        domainPadding={{ x: 50, y: 20 }}
        containerComponent={
          <VictoryBrushContainer brushDimension="x" />
        }
      >
        <VictoryAxis />
        <VictoryLine data={data} style={{ data: { stroke: "#007AFF" } }} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

export default BrushZoomGraph;
