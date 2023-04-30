<template>
	<view>请登录</view>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	setup() {
		const data = reactive({});

		return { ...toRefs(data) };
	}
});
</script>

<style scoped lang="less"></style>