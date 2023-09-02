import { Keyboard } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Dimensions } from 'react-native';
export default function App() {

  const [numero, setNumero] = useState(0)
  const [numeroD, setNumeroD] = useState(0)
  const [calculo, setCalculo] = useState(0)

  const numero1 = (e) => {
    setNumero(e)

  }
  const numero2 = (e) => {
    setNumeroD(e)

  }

  const operacion = (operacion) => {
   
   if (isNaN(numero) || isNaN(numeroD)){
    Alert.alert('Mucho ojo!', 'Debes llenar todos los campos', [
      {
        text: 'Aceptar',        
      }
    ]);
  }
  else{
   
    switch(operacion){
      case 'suma':
        setCalculo(numero+numeroD)
        break
        case 'resta':
          setCalculo(numero-numeroD);
          break
          case 'multiplicacion':
            setCalculo(numero*numeroD);
            break
            case 'division':
              setCalculo(numero/numeroD);
              break
              default: break
    }
   }
  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>   
    <View style={styles.container}>
        <Text style={styles.Text}>Calculadora</Text>
        <View style={styles.containerCalc}>
          <View style={styles.AreaInput}>
            <TextInput style={styles.Input} keyboardType='numeric' placeholder='Ingrese un número' onChangeText={e=>numero1(parseFloat(e))}></TextInput>
            <TextInput style={styles.Input} keyboardType='numeric' placeholder='Ingrese un número' onChangeText={e=>numero2(parseFloat(e))}></TextInput>
          </View>
      <View style={styles.AreaButton}>
        <Button type='button' title='➕' onPress={() => operacion('suma')}></Button>
        <Button type='button' title='➖' onPress={() => operacion('resta')}></Button>
        <Button  type='button' title='✖️' onPress={() => operacion('multiplicacion')}></Button>
        <Button  type='button' title='➗' onPress={() => operacion('division')}></Button>
      </View>
      </View>
      <Text style={styles.TextResultado}>{'Resultado: '+calculo}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  Input: {
    borderWidth: .5,
    padding: 4,
    margin: 10,
    borderColor: 'gray',
    fontSize: 23,
    width: Dimensions.get("window").width/2,
  },
  Text: {
    fontSize: 23,
    margin: 3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue'
  },
  TextResultado: {
    fontSize: 23,
    margin: 3,
    textAlign: 'center',
  },
  AreaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("window").height/3,
    width: Dimensions.get("window").width/2,
  },
  AreaInput: {
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width/2,
    height: Dimensions.get("window").height/3,
  },
  containerCalc: {
    display: 'flex',
    flexDirection: 'row'
  }
});
