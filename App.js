import React, { Component } from "react";
import {View, Text, ImageBackground, ScrollView, TextInput, StyleSheet, TouchableOpacity} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: "",
      ingredientes: "",
      preparo: "",
      observacao: "",
      tipoSelecionado: "",
    };
  }

  selecionarTipo = (tipo) => {
    this.setState({ tipoSelecionado: tipo });
  };

  render() {
    const tipos = [
      {
        nome: "Café da Manhã",
        img: "https://i.pinimg.com/736x/fd/46/dc/fd46dcc2f99fb6ef778304da652db953.jpg",
      },
      {
        nome: "Almoço/Jantar",
        img: "https://i.pinimg.com/736x/7c/1a/d9/7c1ad932b56bf0327f0f928612747432.jpg",
      },
      {
        nome: "Lanche",
        img: "https://i.pinimg.com/736x/c1/4b/a2/c14ba24ab294892807871d8357cf5c89.jpg",
      },
      {
        nome: "Salada",
        img: "https://i.pinimg.com/736x/d6/93/9d/d6939d37e1d6bc56cf3c50f539e53743.jpg",
      },
    ];

    return (
      <ScrollView style={styles.scroll}>
        <Topo
          imagem={{
            uri: "https://i.pinimg.com/736x/5d/28/f0/5d28f067df7d002c4debcad0b33f623c.jpg",
          }}
        />

    <View style={styles.container}>
       <TextInput
          style={styles.entrada}
          placeholder="Nome da Receita"
          onChangeText={(texto) => this.setState({ receita: texto })}
       />
       <TextInput
          style={styles.entrada}
          placeholder="Ingredientes"
          onChangeText={(texto) => this.setState({ ingredientes: texto })}
       />
        <TextInput
          style={styles.entrada}
          placeholder="Modo de Preparo"
          onChangeText={(texto) => this.setState({ preparo: texto })}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Observação"
          onChangeText={(texto) => this.setState({ observacao: texto })}
        />

        <Text style={styles.titulo}>Tipo:</Text>
        <View style={styles.tiposContainer}>
            {tipos.map((item) => (
        <TouchableOpacity
            key={item.nome}
            onPress={() => this.selecionarTipo(item.nome)}
            style={[
              styles.tipoItem,
                this.state.tipoSelecionado === item.nome && styles.tipoSelecionado,
              ]}
        >
                <ImageBackground
                  source={{ uri: item.img }}
                  style={styles.imagemTipo}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Text style={styles.tipoTexto}>{item.nome}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20 }}>
        <ImageBackground source={this.props.imagem} style={styles.imagem} />

        <Text style={styles.cabecalho}>
          📔 Nova Criação Culinária 📔
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#213435",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  imagem: {
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cabecalho: {
    color: "#9f8241",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Century Gothic",
    marginVertical: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  entrada: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    fontFamily: "Century Gothic",
    fontSize: 16,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  tiposContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tipoItem: {
    width: "47%",
    height: 100,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  imagemTipo: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  tipoTexto: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
  tipoSelecionado: {
    borderWidth: 5,
    borderColor: "#648a64",
  },
});

export default App;
