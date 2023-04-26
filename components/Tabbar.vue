<template>
	<view class="tabbar-box">
		<view class="left-box">
			<view class="title">{{title}}</view>
			<view class="label" v-if="label">{{label}}</view>
		</view>
		<view class="right-box">
			<slot name="button"></slot>
		</view>
	</view>
</template>

<script>
	import {
		defineComponent,
		onMounted,
		toRefs
	} from 'vue'
	export default defineComponent({
		props: {
			title: {
				type: String
			},
			label: {
				type: String
			}
		},
		setup(props) {
			console.log(props)
			return {
				...toRefs(props)
			}
		}
	})
</script>

<style lang="less" scoped>
	.tabbar-box {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.title {
			font-size: 36rpx;
			font-weight: 700;
			color: #000;
		}
		.label{
			margin-top: 8rpx;
			font-size: 28rpx;
			color: #63699A;
		}
	}
</style>