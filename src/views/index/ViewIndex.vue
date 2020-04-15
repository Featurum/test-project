<template>
	<div class="dashboard-attach">
		<h1 class="dashboard-title">Главная страница</h1>

		<div class="items-filtered">
			<input type="text" class="items-filtered__input" v-model="filterString" placeholder="Фильтровать">
		</div>

		<div class="items">
			<ul class="items-white">
				<v-item
					v-for="(item, i) in defaultList"
					:key="i"
					:data="item"
					toggleButtonText="+"
					:toggleButtonFunction="toggleSelectedlist"
				/>
			</ul>

			<ul class="items-black">
				<v-item
					v-for="(item, i) in selectedlist"
					:key="i"
					:data="item"
					toggleButtonText="-"
					:toggleButtonFunction="toggleSelectedlist"
				/>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

	import item from './components/item.vue';

	export default {
	    data() {
	        return {
	        	filterString: ''
	        }
	    },

	    components: {
	    	'v-item': item
	    },

	    computed: {
	    	...mapState({
                list: state => state.items.list
            }),

		    defaultList() {
		    	return this.$store.getters['items/defaultList'](this.filterString)
		    },

			selectedlist() {
				return this.$store.getters['items/selectedlist']()
			}
	    },

	    methods: {
	    	toggleSelectedlist(item) {
	    		this.$store.commit('items/toggleSelectedlist', item)
	    	}
	    }
	};
</script>


<style lang="scss" src="./StylesIndex.scss" scoped></style>