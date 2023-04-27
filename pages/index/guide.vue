<template>
	<view>
		<swiper class="swiper" :indicator-dots="false" :current="tabIndex">
			<swiper-item class="swiper-item" v-for="(item, index) in guidelList" :key="index">
				<image :src="item.url" style="width: 100%;height: 1000rpx;" />
				<button class="experience-button" plain="true" v-if="index === 2" @click="pushHome">立即体验</button>
				<view class="info-box">
					<h2>{{item.title}}</h2>
					<text>{{item.text}}</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		defineComponent,
		reactive,
		toRefs
	} from 'vue'
	export default defineComponent({
		setup() {
			const data = reactive({
				guidelList: [{
					url: '../../static/front_page/front_page1.jpg',
					title: '通天代 为代练而生',
					text: '10年代练通，已服务数千万玩家'
				}, {
					url: '../../static/front_page/front_page2.jpg',
					title: '接单赚钱 安全担保',
					text: '每日万单随心挑选，平台担保安全放心'
				}, {
					url: '../../static/front_page/front_page3.jpg',
					title: '轻松发单 高效管理',
					text: '快捷发布代练需求，随时跟踪订单状态'
				}],
				tabIndex: 0
			})
			// 立即体验按钮点击事件
			const pushHome = () => {
				uni.switchTab({
					url: '/pages/index/home'
				})
			}
			return {
				...toRefs(data),
				pushHome
			}
		}
	})
</script>

<style lang="less" scoped>
	.swiper {
		height: 100vh;

		.info-box {
			text-align: center;

			h2 {
				margin-bottom: 20rpx;
			}
		}

		.experience-button {
			height: 84rpx;
			line-height: 84rpx;
			position: absolute;
			bottom: 40rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 9999;
			background-color: #88AFFE;
			letter-spacing: 4rpx;
			color: white;
			border: none;
			padding: 0 60rpx;
		}
	}
</style>