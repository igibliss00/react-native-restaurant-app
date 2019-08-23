import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async id => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        try {
            getResult(id)
        } catch(err) {
            setErrorMessage(err)
        }
    }, [])
    
    if(!result) {
        return null
    }
    console.log(result)
    console.log(id)
    return(
        <View>
            <Text>{errorMessage}</Text>
            <Text>{result.name}</Text>
            <FlatList
              data={result.photos}
              keyExtractor={photo => photo}
              renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />;
              }}
            />
          </View>
        );
    };
      
const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen