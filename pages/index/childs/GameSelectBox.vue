<template>
	<view>
		<view class="game-select-box">
			<h2 class="title">托管发单 · 平台帮代练免沟通</h2>
			<view class="label">
				<view></view>
				<view>请您选择游戏</view>
			</view>
			<view class="game-box">
				<view v-for="(item,index) in gameList" :key="index" class="game-box-item">
					<view class="game-item">
						<image :src="item.url" mode="widthFix" />
					</view>
					<text class="game-name">{{item.name}}</text>
				</view>
				<view class="game-box-item">
					<!-- 占位符（弹性布局撑开图标） start-->
					<view></view>
					<!-- 占位符（弹性布局撑开图标） end-->
					<view class="game-item">
						<image src="/static/icons/More.png" mode="widthFix" style="width: 60rpx;" />
					</view>
					<text>更多</text>
				</view>
			</view>
		</view>
		<view class="line-box"></view>
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
				gameList: [{
					url: '/static/icons/game/wzry.png',
					name: '王者荣耀'
				}]
			})
			return {
				...toRefs(data)
			}
		}
	})
</script>

<style lang="less" scoped>
	.game-select-box {
		margin-top: 40rpx;
		text-align: center;

		.title {
			font-size: 36rpx;
			color: #5991F5;
		}

		.label {
			margin: 20rpx 0;
			color: #657095;
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
				color: #6C6C6C;

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
		background-color: #F6F6F6;
	}
</style>