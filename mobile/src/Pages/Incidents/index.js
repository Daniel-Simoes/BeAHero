import React from 'react';
import { View, Image, Text } from 'react-native';

import logImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logImg}/>
            <Text style={styles.headerText}>
              Total <Text style={styles.headerTextBold}>0 casos</Text>.
            </Text>
      </View>
      
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
    </View>
  );
}
