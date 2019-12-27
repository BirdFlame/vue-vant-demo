<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
		<app-tab-bar/>
	</div>
</template>
<script>
	import AppTabBar from"./components/content/APPTabBar.vue"
	export default {
		name: 'app',
		components: {
			AppTabBar
		}
	}
</script>
<style>
	@import "assets/css/base.css"
</style>
