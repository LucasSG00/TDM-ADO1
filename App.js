import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image, Modal } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

const DATA = [
        {
            "id": 1,
            "jogo": "God of War",
            "estilo": "Ação",
            "link": "https://sm.ign.com/ign_br/screenshot/default/god-war-ragnarok-1_f8xh.jpg",
            "preco": "R$ 250,00"
        },
        {
            "id": 2,
            "jogo": "Far Cry 6",
            "estilo": "Aventura",
            "link": "https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/far-cry-6-dani-male-01.jpg",
            "preco": "R$ 220,00"
        },
        {
            "id": 3,
            "jogo": "BloodBorne",
            "estilo": "RPG",
            "link": "https://wallpaperaccess.com/full/1111446.jpg",
            "preco": "R$ 100,00"
        },
        {
            "id": 4,
            "jogo": "Spider-Man",
            "estilo": "Aventura",
            "link": "https://images2.alphacoders.com/947/947037.jpg",
            "preco": "R$ 85,00"
        },
        {
            "id": 5,
            "jogo": "Uncharted 4",
            "estilo": "Aventura",
            "link": "https://images.alphacoders.com/519/thumb-1920-519792.jpg",
            "preco": "R$ 120,00"
        },
];

const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    </Modal>        
 )

const Jogos = ({nome,estilo,link,compra}) => {

    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={nome}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
      </Pressable>
      <Text style={styles.paragraph}>{nome}</Text>
      <Text style={styles.price}>{compra}</Text>
      <View
        style={{
          marginTop:20,
          marginBottom:20,
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
      />
    </View>
    )
}

export default function App() {
  function meuItem({item}){    
    return(      
      <Jogos  nome={item.jogo}
              estilo={item.estilo}
              link={item.link}
              compra={item.preco}              
      />
    )
  }
  
  return (    
    <View style={styles.container}>
      <Text style={styles.tituloView}>ADO 1 - FLATLIST E MODAIS</Text>
      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white"
  },
  price:{
    margin: 0,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "yellow"
  },
  tinyLogo: {
    marginBottom:10,
    width: 400,
    height: 230,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#bd93f9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tituloView: {
    padding:10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white",
    backgroundColor: 'black',
  }
});