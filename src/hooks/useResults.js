import { useState, useEffect } from 'react';
import Yelp from '../API/Yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch (e) {
            setErrorMessage('Something went wrong')    
        }
    };

    useEffect( () => {
        searchAPI('pasta')
    }, []);

    return [searchAPI, results, errorMessage];
};