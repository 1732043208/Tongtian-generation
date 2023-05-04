<template>
	<view>
		<u--form labelPosition="left" :model="model" ref="form" labelWidth="100">
			<u-form-item label="游戏"><u--input v-model="model.gameName" border="none" /></u-form-item>
			<u-form-item label="订单类型"><ReleaseOrder :orderTypeList="orderTypeList" /></u-form-item>
			<u-form-item label="代练类型">
				<u--input v-model="model.powerLevelingType" border="none" placeholder="请选择代练类别" readonly @click="openPicker('powerLevelingTypeList')" />
			</u-form-item>
			<u-form-item label="订单类别">
				<u--input v-model="model.orderCategory" border="none" placeholder="请选择订单类别" readonly @click="openPicker('orderCategoryList')" />
			</u-form-item>
			<u-form-item label="游戏区服"><u--input v-model="model.gameServer" border="none" placeholder="请选择您所在的区服" readonly @click="openPicker()" /></u-form-item>
			<u-form-item label="铭文等级"><u--input v-model="model.inscriptionLevel" border="none" placeholder="请输入铭文等级" readonly @click="openPicker()" /></u-form-item>
			<u-form-item label="英雄数量"><u--input v-model="model.herosNumber" border="none" placeholder="请输入英雄数量1-200" readonly @click="openPicker()" /></u-form-item>
			<u-form-item label="当前段位"><u--input v-model="model.currentRank" border="none" placeholder="请选择角色当前的段位" readonly @click="openPicker()" /></u-form-item>
			<u-form-item label="目标段位"><u--input v-model="model.targetRank" border="none" placeholder="请选择角色目标的段位" readonly @click="openPicker()" /></u-form-item>
		</u--form>
		<u-picker :show="isPickerShow" :columns="columns" :closeOnClickOverlay="true" @close="pickerClose" />
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import ReleaseOrder from '../../components/Radio.vue';
export default defineComponent({
	components: {
		ReleaseOrder
	},
	setup() {
		const data = reactive({
			model: {
				gameName: '王者荣耀', //游戏名称
				orderType: '', //订单类型
				powerLevelingType: '', //代练类型
				orderCategory: '普通订单', //订单类别
				gameServer: '', //游戏区服
				inscriptionLevel: '150', //铭文等级
				herosNumber: '', //英雄数量
				targetRank: '', //目标段位
				currentRank: '' //当前段位
			},
			isPickerShow: false, //选择器是否开启
			columns: [], //选择器数组
			orderTypeList: [{ text: '代练', value: '0' }, { text: '陪练', value: '1' }], //订单类型数组
			orderCategoryList: [{ text: '普通订单', value: '0' }, { text: '全胜订单', value: '1' }], //订单类别数组
			powerLevelingTypeList: [['排位赛', '巅峰赛', '荣耀战力', '大国标', '小国标', '自定义发布']] //代练类型数组
		});
		//设置Picker数组值
		const openPicker = type => {
			console.log(type);
			data.columns = data[type];
			data.isPickerShow = true;
		};
		//Picker选择器关闭
		const pickerClose = () => {
			data.isPickerShow = false;
		};
		return { ...toRefs(data), openPicker, pickerClose };
	}
});
</script>

<style scoped lang="less"></style>
