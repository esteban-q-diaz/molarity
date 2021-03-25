import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';

const image = { uri: 'https://molarity.s3-us-west-1.amazonaws.com/molarity_bg.png'}

export default function App() {
  let [mole, setMole] = useState('')
  let [mass, setMass] = useState()
  let [volume, setVolume] = useState('')
  let [concentration, setConcentration] = useState('')

  const setMoleValue = (value, a, b, c) => {
    setMole(mole = value)
  }
  const setMassValue = (value, a, b, c) => {
    if (value === null) {
      let massCalulataion = Number(a) * (Number(b) / 1000) * Number(c)
      setMass(mass = massCalulataion.toString())
    } else {
      setMass(mass = value)
    }
  }
  const setVolumeValue = (value, a, b, c) => {
    if (value === null) {
      console.log(a, b, c)
      let volumeCalulataion = (Number(a) / Number(b)) * Number(c)
      if (volumeCalulataion.toString().length > 5) {
        let finalVolume = (Math.round(volumeCalulataion * 10) / 10) * 1000
        setVolume(volume = finalVolume.toString())
      } else {
        volumeCalulataion = volumeCalulataion * 1000
        setVolume(volume = volumeCalulataion.toString())
      }
    } else {
      setVolume(volume = value)
    }

  }
  const setConcentrationValue = (value, calculate) => {
    setConcentration(concentration = value)
    if (mass === '') {
      setMassValue(null, concentration, volume, mole)
    }

    if (volume === '') {
      setVolumeValue(null, concentration, mole, mass)
    }
  }

  const clearAll = () => {
    setMole(mole = '')
    setMass(mass = '')
    setVolume(volume = '')
    setConcentration(concentration = '')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://molarity.s3-us-west-1.amazonaws.com/molarity_bg.png'
        }}
        style={styles.image}
      >

      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://molarity.s3-us-west-1.amazonaws.com/molarity_logo.png'
          }}
          style={styles.logo}
        />

        <Text style={styles.molarity}>Molarity</Text>
{/* MOLE */}
        <View style={{paddingBottom: 11, paddingTop: 112,}}>
          <View style={{marginLeft: 5, marginBottom: 5,}}>
          <Text style={styles.text}>Molecular Weight</Text>
          </View>
          <TextInput
            style={styles.molecular}
            placeholder='Type'
            maxLength={5}
            value={mole}
            onChangeText={(text)=> setMoleValue(text)}
          />
        </View>
{/* MASS */}
          <View style={{paddingBottom: 11}}>
            <View style={{marginLeft: 5, marginBottom: 5,}}>
              <Text style={styles.text}>
                Mass
              </Text>
          </View>

          <TextInput
          style={styles.mass}
          placeholder='Type'
          maxLength={5}
          value={mass}
          onChangeText={(text)=> setMassValue(text)}
          />
        </View>

{/* VOLUME */}
        <View style={{paddingBottom: 11}}>
          <View style={{marginLeft: 5, marginBottom: 5,}}>
            <Text style={styles.text}>Volume</Text>
          </View>

        <TextInput
        style={styles.mass}
        placeholder='Type'
        maxLength={5}
        value={volume}
        onChangeText={(text)=> setVolumeValue(text)}
        />
      </View>
{/* Concentration */}
        <View style={{paddingBottom: 11}}>
          <View style={{marginLeft: 5, marginBottom: 5,}}>
            <Text style={styles.text}>Concentration</Text>
          </View>

        <TextInput
        style={styles.mass}
        placeholder='Type'
        maxLength={5}
        value={concentration}
        onChangeText={(text)=> setConcentrationValue(text)}
        />
      </View>

        <View style={styles.clear}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => clearAll()}
          >

{/* Clear all */}
          <Text>Clear all</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <View style={styles.line2}></View>
          <View style={styles.line3}></View>
          <Text style={styles.g}>g</Text>
          <Text style={styles.ml}>ml</Text>
          <Text style={styles.m}>M</Text>
          <Text style={styles.mol}>g/mol</Text>


        </View>
      </View>
      <View styles={styles.inputs}>
      </View>



      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  molarity: {
    fontSize: 45,
  },
  logo: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  inputs: {
    paddingTop: 2200,
    backgroundColor: 'purple'
  },
  molecular: {
    backgroundColor: '#fff',
    width: 311,
    height: 80,
    borderRadius: 12,
    paddingLeft: 40,
    fontSize: 25,
  },
  mass: {
    backgroundColor: '#fff',
    width: 311,
    height: 55,
    borderRadius: 12,
    paddingLeft: 40,
    fontSize: 25,
  },
  line: {
    borderLeftWidth: 1,
    height: 56,
    borderLeftColor: '#dedede',
    position: 'relative',
    top: -279.5,
    left: 60,
  },
  line2: {
    borderLeftWidth: 1,
    height: 56,
    borderLeftColor: '#dedede',
    position: 'relative',
    top: -247,
    left: 60,
  },
  line3: {
    borderLeftWidth: 1,
    height: 56,
    borderLeftColor: '#dedede',
    position: 'relative',
    top: -215.5,
    left: 60,
  },
  g: {
    position: 'relative',
    top: -430,
    left: 110,
    color: '#657099',
    fontSize: 22,
  },
  ml: {
    position: 'relative',
    top: -370,
    left: 110,
    color: '#657099',
    fontSize: 22,
  },
  m: {
    position: 'relative',
    top: -308,
    left: 110,
    color: '#657099',
    fontSize: 22,
  },
  mol: {
    position: 'relative',
    top: -615,
    left: 110,
    color: '#657099',
    fontSize: 22,
  },
  text: {
    color: '#484848',
    fontSize: 14,
  },
  clear: {
    marginTop: 20,
  }
});
