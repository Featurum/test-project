<template>
	<div class="dashboard-attach">
		<h1 class="dashboard-title">История изменений</h1>

		<ul class="history-list">
			<v-item v-for="(item, i) in history" :key="i" :data="item"></v-item>
		</ul>
	</div>
</template>

<script>
	import item from './components/item.vue';

	export default {
	    components: {
	    	'v-item': item
	    },

	    computed: {
	    	actionType() {
	    		try {
		    		return this.$route.params.action
		    	} catch (_) {
		    		return false
		    	}
	    	},

	    	history() {
				return this.$store.getters['items/history'](this.actionType)
			}
	    }
	};
</script>

<style lang="scss" src="./StylesHistory.scss" scoped></style>