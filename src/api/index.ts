import axios from 'axios'


const api = axios.create({
    baseURL:"https://easy-finder.onrender.com/"
})
export {api}