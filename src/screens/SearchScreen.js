import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </>
};

styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    }

});

export default SearchScreen;