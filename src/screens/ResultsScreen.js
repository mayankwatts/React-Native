import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Yelp from '../API/Yelp';

const ResultsScreen = ({ navigation }) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={{height:200, width:300}} source={{ uri: item }} />
            }}
        />
    </View>
};

styles = StyleSheet.create({
    image: {
        height:200,
        width: 300
    }
});

export default ResultsScreen;
