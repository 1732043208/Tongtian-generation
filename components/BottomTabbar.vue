<template>
	<view class="tabbar" :style="{ 'padding-bottom': paddingBottomHeight + 'rpx' }">
		<view class="tabbar-item" v-for="(item, index) in list" :key="index" @click="tabbarChange(item.path)">
			<image class="item-img" :src="item.icon_a" v-if="current == index" />
			<image class="item-img" :src="item.icon" v-else />
			<view class="item-name" :class="{ tabbarActive: current == index }" v-if="item.text">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
	props: {
		current: Number
	},

	setup(props) {
		const data = reactive({
			paddingBottomHeight: 0, //苹果X以上手机底部适配高度
			list: [
				{
					text: '发单',
					icon: '/static/icons/tabbar/fadan.png', //未选中图标
					icon_a: '/static/icons/tabbar/fadan_active.png', //选中图片
					path: '/pages/index/home' //页面路径
				},
				{
					text: '接单',
					icon: '/static/icons/tabbar/jiedan.png',
					icon_a: '/static/icons/tabbar/jiedan_active.png',
					path: '/pages/order/order'
				},
				{
					text: '消息',
					icon: '/static/icons/tabbar/message.png',
					icon_a: '/static/icons/tabbar/message_active.png',
					path: '/pages/message/message'
				},
				{
					text: '我的',
					icon: '/static/icons/tabbar/mine.png',
					icon_a: '/static/icons/tabbar/mine_active.png',
					path: '/pages/mine/mine'
				}
			]
		});
		// 使用vuex
		const store = useStore();
		uni.getSystemInfo({
			success: function(res) {
				let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
				model.forEach(item => {
					//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
					if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
						data.paddingBottomHeight = 40;
					}
				});
			}
		});
		const tabbarChange = path => {
			const username = computed(() => store.state.token);
			console.log(username.value);
			if (username.value) {
				uni.switchTab({
					url: path
				});
			} else {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		};

		return {
			...toRefs(data),
			...toRefs(props),
			tabbarChange
		};
	}
});
</script>

<style lang="less" scoped>
.tabbarActive {
	color: #5c90fd !important;
}

.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 110rpx;
	background-color: rgba(255, 255, 255, 1);

	.tabbar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 110rpx;

		.item-img {
			margin-bottom: 4rpx;
			width: 46rpx;
			height: 46rpx;
		}

		.item-name {
			font-size: 26rpx;
			color: #a3a3a3;
		}
	}
}
</style>
