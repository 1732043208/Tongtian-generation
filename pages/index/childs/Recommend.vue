<template>
	<view>
		<u-tabs :list="tabList" @click="tabsClick" :activeStyle="{ fontWeight: 700, fontSize: '36rpx', color: 'black' }" :inactiveStyle="{ color: '#8A8A8A' }" />

		<view v-if="activeIndex === 0">
			<template v-for="(item, index) in 10" :key="index">
				<view class="recommend-item">
					<image src="../../../static/icons/game/wzry.png" mode="widthFix" style="width: 140rpx;" />
					<view class="right-box">
						<view class="title">九尾(顶尖工作室)</view>
						<view class="label">全职业队伍全天在线接代陪。排位巅峰，英雄</view>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	setup() {
		const data = reactive({
			tabList: [{ name: '聊天室推荐' }, { name: '高手推荐' }],
			activeIndex: 0
		});
		const tabsClick = e => {
			console.log(e.index);
			data.activeIndex = e.index;
		};
		return {
			...toRefs(data),
			tabsClick
		};
	}
});
</script>

<style lang="less">
.recommend-item {
	background-color: aquamarine;
	height: 240rpx;
	margin-top: 20rpx;
	border-radius: 12rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	.right-box {
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 300rpx;
		height: 160rpx;
		.title {
			font-weight: 700;
			color: #000;
		}
		.label {
			font-size: 24rpx;
			color: #656668;
		}
	}
}
</style>
