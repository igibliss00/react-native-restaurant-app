import axios from 'axios';

export default axios.create({
    baseURL: 'ttps://api.yelp.com/v3/businesses/'
})