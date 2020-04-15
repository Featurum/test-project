<template>
	<li class="item">
		<b>{{ data.item.id }}. {{ data.item.name }}</b> {{ actionText }} в {{ data.datetime | moment('LLLL') }}
	</li>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				required: true
			}
		},

		computed: {
			actionText() {
				switch(this.data.type) {
					case 'remove':
						return 'был удален из списка выбранного';

					case 'selected':
						return 'был выбран';
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
		box-shadow: 0 0 2px rgba(0,0,0,.15);
		background-color: #fff;
		margin-bottom: 5px;
		padding: 5px 15px;
	}
</style>