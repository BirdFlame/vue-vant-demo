<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
		<tab-bar/>
	</div>
</template>
<script>
	import TabBar from"./components/content/TabBar.vue"
	export default {
		name: 'app',
		components: {
			TabBar
		}
	}
</script>
<style>
	@import "assets/css/base.css"
</style>
