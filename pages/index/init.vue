<template>
	<view>
		haha
	</view>
</template>

<script>
	import {
		defineComponent
	} from 'vue'
	export default defineComponent({
		setup() {
			// 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
			const value = uni.getStorageSync('launchFlag');
			console.log('123')
			console.log(value)
			console.log('123')
			if (value) {
				// 如何已经有，直接去home首页
				uni.redirectTo({
					url: '/pages/index/home'
				});
			} else {
				// 没有值，跳到引导页，并存储，下次打开就不会进去引导页
				uni.setStorage({
					key: 'launchFlag',
					data: true
				});
				uni.redirectTo({
					url: '/pages/index/guide'
				});
			}
		}
	})
</script>

<style>

</style>