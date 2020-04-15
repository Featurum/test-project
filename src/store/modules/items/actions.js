const actions = {
    getData: function({state, commit, getters, rootState}) {
        return new Promise((resolve, reject) => {
            rootState.request({
                type: 'GET',
                url: '/test.php',
                // query: {
                //     limit: 100,
                //     offset: 0
                // }
            }).then(result => {
                commit('getData', result.data);
                resolve(true)
            }, error => {
                reject(error)
            });
        })
    }
}

export default actions
