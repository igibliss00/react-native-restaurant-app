import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import ResultDetail from './ResultDetail'

interface ResultListProps {
    title: string
    results: string[]
}

const ResultList: React.SFC<ResultListProps> = ({ title, results, navigation }): any => {
    if(!results.length){
        return null
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )   
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
})

export default withNavigation(ResultList)