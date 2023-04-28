<template>
	<view class="status_bar" />
	<view class="content">
		<!-- 顶部tabbar栏 -->
		<Tabbar title="通天代" label="昨日累计服务 35896 人">
			<template v-slot:button>
				<button type="primary" class="tabbar-button">
					<image src="../../static/icons/add.png" mode="widthFix" style="width: 28rpx;"></image>
					<text>发布订单</text>
				</button>
			</template>
		</Tabbar>
		<!-- 轮播图模块 -->
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" indicator-color="rgba(255,255,255)"
			indicator-active-color="rgba(240,235,234)">
			<swiper-item v-for="(item,index) in bannerList" :key="index" class="swiper-item">
				<view :style="{'background':item}" style="width: 100%;height: 100%;"></view>
			</swiper-item>
		</swiper>
		<!-- 游戏选择模块 -->
		<GameSelectBox />
		<Recommend></Recommend>
		<BottomTabbar :current="0"></BottomTabbar>
	</view>
</template>

<script>
	import {
		defineComponent,
		reactive,
		toRefs,
		onMounted
	} from 'vue'
	import {
		onShow
	} from "@dcloudio/uni-app";
	import Tabbar from '../../components/Tabbar.vue'
	import BottomTabbar from '../../components/BottomTabbar.vue'
	import GameSelectBox from './childs/GameSelectBox.vue'
	import Recommend from './childs/Recommend.vue'
	export default defineComponent({
		components: {
			Tabbar,
			GameSelectBox,
			BottomTabbar,
			Recommend
		},
		setup() {
			const data = reactive({
				bannerList: ['green', 'yellow', 'blue'],
				tabValue: ['示例1', '示例2'],
				tabIndex: 0
			})
			onShow(() => {
				uni.hideTabBar({
					animation: false
				})
			});
			return {
				...toRefs(data)
			}
		}
	})
</script>

<style lang="less" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.content {

		.tabbar-button {
			box-sizing: border-box;
			height: 70rpx;
			font-size: 24rpx;
			line-height: 70rpx;
			background-color: #5C90FD;

			image {
				vertical-align: text-bottom;
				margin-right: 8rpx;
			}
		}

		.swiper {
			margin-top: 12rpx;

			.swiper-item {
				border-radius: 16rpx;
			}
		}


	}
</style>