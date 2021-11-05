import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    margin: 'auto',

  },
  tinyLogo: {
    width: 480,
    height: 200,
    borderRadius:10,
    alignItems: 'center',
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'http://especiais.gshow.globo.com/programas/estrelas/calculo-imc/img/table-web.jpg',
        }}
      />
     
    </View>
  );
}

export default DisplayAnImage;