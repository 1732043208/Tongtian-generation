<template>
	<view class="login-box">
		<u-avatar src="../../static/icons/login/xiaodindang.jpg" size="100" style="margin: 0 auto;" />
		<view class="content-box">
			<u--input placeholder="请输入账号" shape="circle" v-model="username" @change="change" clearable class="input" />
			<u--input placeholder="请输入密码" shape="circle" v-model="password" @change="change" clearable class="input" />
			<view class="check-box">
				<u-checkbox-group v-model="isAgree" placement="column"><u-checkbox shape="circle" /></u-checkbox-group>
				<text>登录即代表您已同意</text>
				<u-link text="《用户协议》" />
				<text>和</text>
				<u-link text="《隐私协议》" />
			</view>
		</view>
		<u-button type="primary" shape="circle" :disabled="!isAgree" style="margin-top: 100rpx;" @click="loginClick">登录</u-button>
	</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { onNavigationBarButtonTap } from '@dcloudio/uni-app';
export default defineComponent({
	setup() {
		const data = reactive({
			username: '', //账号
			password: '', //密码
			isAgree: false //是否已勾选同意协议框
		});
		// 使用vuex
		const store = useStore();
		// 登录按钮
		const loginClick = () => {
			console.log('登录按钮点击');
			store.commit('setTokenFunc', 'haha');
			uni.switchTab({
				url: '/pages/index/home'
			});
		};
		// 注册按钮点击事件
		onNavigationBarButtonTap(e => {
			uni.navigateTo({
				url: '/pages/login/register'
			});
		});
		return { ...toRefs(data), loginClick };
	}
});
</script>

<style scoped lang="scss">
.login-box {
	padding: 100rpx 40rpx;
	text-align: center;

	.content-box {
		margin: 80rpx 10rpx 20rpx 10rpx;
		view:nth-child(2) {
			margin-top: 40rpx;
		}
		.input {
			height: 60rpx;
			background-color: #f6f6f6;
			border: none;
		}
		.check-box {
			margin-top: 20rpx;
			display: flex;
			font-size: 26rpx;
			align-items: center;
			color: #919191;
			::v-deep .u-link {
				font-size: 26rpx !important;
				flex: none;
				color: #82a3ef !important;
			}
		}
	}
}
</style>
