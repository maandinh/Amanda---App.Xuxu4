import React, { Component } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: '',
      ingredientes: '',
      preparo: '',
      tempo: '',
    };

    // Bindando os métodos
    this.entradaReceita = this.entradaReceita.bind(this);
    this.entradaIngredientes = this.entradaIngredientes.bind(this);
    this.entradaPreparo = this.entradaPreparo.bind(this);
    this.entradaTempo = this.entradaTempo.bind(this);
  }

  entradaReceita(texto) {
    this.setState({ nome: '' + texto});
  }

  entradaIngredientes(texto) {
    this.setState({ idade: '' + texto});
  }

  entradaPreparo(texto) {
    this.setState({ email: '' + texto });
  }

  entradaTempo(texto) {
    this.setState({ cidade: '' + texto});
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Topo
          imagem={{ uri: 'https://i.pinimg.com/736x/5d/28/f0/5d28f067df7d002c4debcad0b33f623c.jpg' }}
        />

        <View style={styles.container}>
          <TextInput
            style={styles.entrada}
            placeholder="Nome da Receita"
            onChangeText={this.entradaReceita}
          />

          <TextInput
            style={styles.entrada}
            placeholder="Ingredientes"
            onChangeText={this.entradaIngredientes}
          />

          <TextInput
            style={styles.entrada}
            placeholder="Modo de Preparo"
            onChangeText={this.entradaPreparo}
          />

          <TextInput
            style={styles.entrada}
            placeholder="Tempo de Preparo"
            onChangeText={this.entradaTempo}
          />

        </View>
      </ScrollView>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20 }}>
        <Image
          source={this.props.imagem}
          style={styles.imagem}
        />
        <Text style={styles.cabecalho}>
          📔 Nova Criação Culinária 📔
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  imagem: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cabecalho: {
    color: '#006400',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    fontSize: 16,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;
