import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

  const navigation = useNavigation();
  const message = 'olá test da aplicacao';

  function navigateBack() {
      navigation.goBack();
  }

    function sendMail() {
      MailComposer.composeAsync({
        subject: 'test de email be a hero',
        recipients: ['simoes.gsss@gmail.com'],
        body: message,
      })
  }

  function sendPhone() {
    Linking.openURL(`whatsapp://send?phone=3530834269272&text=${message}`);

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logImg}/>
              
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG</Text>
        <Text style={styles.incidentValue}>Vivei</Text>

        <Text style={styles.incidentProperty}>Incident</Text>
        <Text style={styles.incidentValue}>Cirugy to Dog</Text>

        <Text style={styles.incidentProperty}>Investiment</Text>
        <Text style={styles.incidentValue}>R$100</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve Someone's day</Text>
        <Text style={styles.heroTitle}>Became the Hero to this incident</Text>

        <Text style={styles.heroDescription}>Contact us</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={sendPhone}>
          <Text style={styles.actionText}>Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={sendMail}>
          <Text style={styles.actionText}>Email</Text>  
        </TouchableOpacity>
      </View>

      </View>

    </View>
  );
}
