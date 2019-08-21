import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { LineChart, PieChart } from 'react-native-chart-kit'

export default function SimpleBottomNavigation() {

  const data = [
      { name: 'Alimentação', expense: 215, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Lazer', expense: 280, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Trabalho', expense: 527, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Viagem', expense: 853, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]
  return (
    <View style={styles.view}>
    <Text>
      Gastos por mês
    </Text>
    <LineChart
      data={{
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }]
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel={'$'}
      chartConfig={{
        backgroundColor: '#000039',
        backgroundGradientFrom: '#000039',
        backgroundGradientTo: '#000039',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
    <Text>
      Gastos por categoria
    </Text>
    <PieChart
      data={data}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      accessor="expense"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
