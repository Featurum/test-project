const mutations = {
    getData(state, data) {
        state.list.data = data;
        state.list.result = true;
    },

    toggleSelectedlist(state, item) {
    	let index = state.selected.indexOf(item.id);

        function saveLog(type) {
            state.history.push({
                item: item,
                type: type,
                datetime: new Date()
            });
        }

    	if(index !== -1) {
    		state.selected.splice(index, 1);
            saveLog('remove');
    	} else {
    		state.selected.push(item.id);
            saveLog('selected');
    	}
    }
}

export default mutations