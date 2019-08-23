import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultLIst from '../components/ResultList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return(
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />  
            {errorMessage ? <Text>{errorMessage}</Text>: null} 
            <ScrollView>
                <ResultLIst results={filterResultByPrice("$")} title="Cost Effective" />
                <ResultLIst results={filterResultByPrice("$$")} title="Bit Pricier" />
                <ResultLIst results={filterResultByPrice("$$$")} title="Big Spender!" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen