<template>
	<view class="status_bar"/>
	<view>
		123
		<BottomTabbar :current="2"></BottomTabbar>
	</view>
</template>

<script>
	import {
		onShow
	} from "@dcloudio/uni-app";
	import {
		defineComponent
	} from 'vue'
	import BottomTabbar from '../../components/BottomTabbar.vue'
	export default defineComponent({
		components: {
			BottomTabbar
		},
		setup() {
			onShow(() => {
				uni.hideTabBar({
					animation: false
				})
			});
		}
	})
</script>

<style>

</style>