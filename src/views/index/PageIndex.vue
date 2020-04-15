<template>
	<fragment>
		<v-header/>
		<span v-if="!load && !erros">Загрузка</span>
		<span v-else-if="erros">Произошла ошибка при загрузке данных</span>
		<v-view v-else/>
	</fragment>
</template>

<script>
	import view from './ViewIndex.vue'

	import { mapState } from 'vuex';

	export default {
	    data() {
	        return {
	        	load: false,
	        	erros: false
	        }
	    },

	    components: {
	    	'v-view': view
	    },

	    computed: {
	    	...mapState({
                list: state => state.items.list
            })
	    },

	    created() {
	    	this.getData()
	    },

	    methods: {
	    	getData() {
	    		(async() => {
	    			if(!this.list.result) {
	    				try {
	                        await this.$store.dispatch('items/getData');
	                    } catch (error) {
	                    	this.erros = true
	                    }
	    			}
                    
                    this.load = true
                })();
	    	}
	    }
	};
</script>
