import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tG51d2owlaJC3fJhIeeyjvM-9w-BNQAqaUyzbgWOhvnFOJEgc9pC_LO3jljeiymwfEnhzNvc6FqL0u66OYMBUajDrG76059h5RWBbNe_O-pPWVzg_fZVPAqtzObDXnYx',
    }
});