<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-plus/index.scss";

	* {
		margin: 0;
		padding: 0;
	}

	body {
		box-sizing: border-box;
		padding: 10rpx;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>