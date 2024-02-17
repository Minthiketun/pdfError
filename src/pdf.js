
import './App.css';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font} from '@react-pdf/renderer';
import MyanmarFont from './pyidaungsu.ttf';

Font.register({
    family: 'Pyidaungsu',
    src: MyanmarFont
}

)

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  name: {
    fontFamily: "Pyidaungsu",
  }

});

// 

// Create Document Component
const Pdf = function({name,des}) { 
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <br></br>
      <View style={styles.section}>
        
        <Text style={styles.name}>{des}</Text>
      </View>
    </Page>
  </Document>
)};

export default Pdf;