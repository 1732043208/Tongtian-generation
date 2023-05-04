<template>
	<view class="radio-box">
		<template v-for="(item, index) in orderTypeList">
			<u-button :type="item.value == radioActive ? 'primary' : 'info'" :text="item.text" class="radio-item-box" plain @click="radioClick(item)" />
		</template>
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	props: {
		orderTypeList: {
			type: Array,
			default: []
		}
	},
	setup(props) {
		const data = reactive({
			radioActive: 0 //当前高亮索引
		});
		// 单选框点击事件
		const radioClick = e => {
			console.log(e);
			data.radioActive = e.value;
		};
		return { ...toRefs(data), ...toRefs(props), radioClick };
	}
});
</script>

<style lang="less" scoped>
.radio-box {
	display: flex;
	flex-wrap: wrap;
	.radio-item-box {
		margin-right: 20rpx;
		width: 120rpx;
		height: 60rpx;
	}
}
</style>
