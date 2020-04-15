function filterList(state, white) {
	return state.list.data.filter(item => {
		let index = state.selected.indexOf(item.id);

		return white ? index === -1 : index !== -1
	})
}

function searchInList(array, search) {
	let searchString = search.toLowerCase();

	try {
		return array.map(item => {
			let searchMain = item.name.toLowerCase().indexOf(searchString) !== -1 ? 1 : 0
			let searchItems = item.items.filter(track => track.name.toLowerCase().indexOf(searchString) !== -1).length;
			return {
				...item,
				entry: searchMain + searchItems
			}
		}).filter(item => item.entry !== 0).sort(function(a, b) { 
			if (a.entry > b.entry) { return -1; } 
			if (a.entry < b.entry) { return 1; } 
			return 0; 
		});
	} catch(_) {
		return []
	}
}

const getters = {
	defaultList: state => search => {
		let blacklistFilter = filterList(state, true);

		if(search) { 
			blacklistFilter = searchInList(blacklistFilter, search)
		}

		return blacklistFilter
	},

	selectedlist: state => search => {
		let blacklistFilter = filterList(state, false);

		if(search) { 
			blacklistFilter = searchInList(blacklistFilter, search)
		}

		return blacklistFilter
	},

	history: state => actionType => {
		if(!actionType) {
			return state.history;
		} else {
			return state.history.filter(item => item.type === actionType)
		}
	}
}

export default getters
