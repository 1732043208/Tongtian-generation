<template>
	<view class="register-box">
		<u-input prefixIcon="search" prefixIconStyle="font-size: 22px;color: #929292" placeholder="请输入账号" border="none" class="input" />
		<u-input
			prefixIcon="lock"
			prefixIconStyle="font-size: 22px;color: #929292"
			placeholder="请输入密码"
			border="none"
			class="input"
			:type="isShowPassword ? 'text' : 'password'"
		>
			<template #suffix>
				<u-icon name="eye" @click="inputHideClick"></u-icon>
			</template>
		</u-input>
		<u-button type="primary" :disabled="!isCheck" style="margin-top: 100rpx;" @click="registerClick">注册</u-button>
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	setup() {
		const data = reactive({
			isCheck: false, //是否校验通过
			isShowPassword: false //是否显示密码
		});
		// 密码输入框"眼睛"按钮点击事件
		const inputHideClick = e => {
			console.log(data.isShowPassword);
			data.isShowPassword = !data.isShowPassword;
		};
		// 注册按钮点击事件
		const registerClick = () => {};
		return { ...toRefs(data), inputHideClick, registerClick };
	}
});
</script>

<style scoped lang="less">
.register-box {
	padding: 10rpx;
	.input {
		height: 100rpx;
		border-bottom: 1rpx solid rgba(146, 146, 146, 0.1);
	}
}
</style>
