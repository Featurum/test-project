<template>
	<div class="header">
		<router-link to="/" class="header-logo">
			<v-icon class="header-logo__icon" name="global-logo"></v-icon>
			<span class="header-logo__text">test stand</span>
		</router-link>

		<ul class="header-menu">
			<li v-for="(item, i) in menu" :key="i" :index="i" class="header-menu__li">
				<router-link :to="item.to" class="header-menu__link">{{ item.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	    data() {
	        return {
	        	menu: [
	        		{
	        			title: 'Главная',
	        			to: {
	        				name: 'index'
	        			}
	        		},
					{
						title: 'История',
						to: {
							name: 'history'
						}
					},
					{
						title: 'История добавлений',
						to: {
							name: 'history', params: { action: 'selected' }
						}
					},
					{
						title: 'История удалений',
						to: {
							name: 'history', params: { action: 'remove' }
						}
					},
	        	]
	        }
	    },

	    computed: {

	    },

	    created() {

	    },

	    methods: {

	    }
	};
</script>


<style lang="scss" src="./Header.scss" scoped></style>