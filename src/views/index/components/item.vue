<template>
	<li class="item">
		<div class="item__content">
			{{ data.name }}
			<ol v-if="data.items" class="item__notes">
				<li v-for="(track, i) in data.items" :key="i">{{ track.name }}</li>
			</ol>
		</div>
		<span class="item__delete" @click="toggleButtonFunction(data)" v-html="toggleButtonText"></span>
	</li>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				required: true
			},

			toggleButtonText: {
				type: String,
				default: ''
			},

			toggleButtonFunction: {
				type: Function,
				default: () => {}
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
		display: flex;

		&__content {
			padding: 5px 15px;
		}

		&__notes {
			margin-top: 10px;
			font-size: 12px;
			padding-left: 20px;
			list-style: decimal;
		}

		&__delete {
			margin-left: auto;
			padding: 5px 15px;
			border-left: 1px solid #f5f5f5;
			cursor: pointer;
			display: flex;
			justify-content: center;
		    align-items: center;

			&:hover {
				background-color: #f8f8f8;
			}
		}
	}
</style>