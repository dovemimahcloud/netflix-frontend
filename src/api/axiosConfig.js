import axios from 'axios';

export default axios.create({
    baseURL:'http://44.200.147.175:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});
