<template>
	<fragment>
		<v-header/>
		<v-view/>
	</fragment>
</template>

<script>
	import view from './ViewHistory.vue'

	import { mapState } from 'vuex';

	export default {
	    data() {
	        return {

	        }
	    },

	    components: {
	    	'v-view': view
	    },

	    computed: {

	    },

	    created() {

	    },

	    methods: {

	    }
	};
</script>

