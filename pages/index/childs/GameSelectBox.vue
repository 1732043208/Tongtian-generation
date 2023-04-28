<template>
	<view>
		<view class="game-select-box">
			<h2 class="title">托管发单 · 平台帮代练免沟通</h2>
			<view class="label">
				<view class="line-box" />
				<view>请您选择游戏</view>
				<view class="line-box" />
			</view>
			<view class="game-box">
				<view v-for="(item, index) in gameList" :key="index" class="game-box-item">
					<view class="game-item"><image :src="item.url" mode="widthFix" /></view>
					<text class="game-name">{{ item.name }}</text>
				</view>
				<view class="game-box-item" @click="moreClick(true)">
					<!-- 占位符（弹性布局撑开图标） start-->
					<view></view>
					<!-- 占位符（弹性布局撑开图标） end-->
					<view class="game-item"><image src="/static/icons/More.png" mode="widthFix" style="width: 60rpx;" /></view>
					<text>更多</text>
				</view>
			</view>
			<!-- “更多”按钮弹窗 -->
			<u-popup background-color="#fff" :show="isPopupShow" @close="popupClose">
				<view class="popup-content">
					<view>选择游戏</view>
					<view class="game-box">
						<view v-for="(item, index) in gameList" :key="index" class="game-box-item">
							<view class="game-item"><image :src="item.url" mode="widthFix" /></view>
							<text class="game-name">{{ item.name }}</text>
						</view>
						<view class="game-box-item" @click="moreClick">
							<!-- 占位符（弹性布局撑开图标） start-->
							<view></view>
							<!-- 占位符（弹性布局撑开图标） end-->
							<view class="game-item"><image src="/static/icons/More.png" mode="widthFix" style="width: 60rpx;" /></view>
							<text>更多</text>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
		<view class="line-box" />
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue';
export default defineComponent({
	setup() {
		const data = reactive({
			gameList: [
				{
					url: '/static/icons/game/wzry.png',
					name: '王者荣耀'
				}
			],
			isPopupShow: false
		});

		// 更多按钮点击事件
		const moreClick = isPopup => {
			isPopup ? (data.isPopupShow = true) : null;
		};
		const popupClose = () => {
			data.isPopupShow = false;
		};
		return {
			...toRefs(data),
			moreClick,
			popupClose
		};
	}
});
</script>

<style lang="less" scoped>
.game-select-box {
	margin-top: 40rpx;
	text-align: center;

	.title {
		font-size: 36rpx;
		color: #5991f5;
	}

	.label {
		margin: 20rpx 0;
		color: #657095;
		display: flex;
		align-items: center;
		justify-content: center;

		.line-box {
			margin: 0 20rpx;
			width: 38rpx;
			height: 2rpx;
			background-color: #a9a9a9;
		}
	}

	.game-box {
		display: flex;
		flex-wrap: wrap;
		padding: 24rpx 20rpx;
		margin-bottom: 30rpx;

		.game-box-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 25%;
			height: 160rpx;
			font-size: 28rpx;
			color: #6c6c6c;

			.game-item {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				margin-bottom: 10rpx;

				image {
					width: 110rpx;
				}
			}
		}
	}
}

.line-box {
	width: 100vw;
	height: 16rpx;
	background-color: #f6f6f6;
}

.popup-content {
	padding: 15px;
	height: 500rpx;
	background-color: #fff;
	text-align: center;
}
</style>
