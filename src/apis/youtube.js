import axios from 'axios';

const KEY = 'AIzaSyB-YcVEe-8AW1BHR_qMc_3tdTA8EEe-K2U';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});


