import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        // Example URL api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/state/' + stateName, requestData).then( response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },

    getvisitedStates(stateName, visited) {
        return axios.get('/api/states/' + visited).then( response =>{
            return response.data
        })
    }
    
    

}