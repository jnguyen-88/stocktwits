import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.stocktwits.com/api/2/streams/symbol'
});
