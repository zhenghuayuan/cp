<template>
	<div>
		<mt-navbar v-model="active" style="border-bottom: 1px solid #ddd;">
			<template v-for="(item, index) in [0,1,2]">
				<mt-tab-item 
					:id="'tab-container'+(index+1)" 
					@click.native.prevent="active = 'tab-container'+(index+1)" 
					style="border-bottom: 0;">选项一
				</mt-tab-item>
			</template>
		</mt-navbar>
		<my-tab-bar v-model="active" :len="3"></my-tab-bar>
		<mt-tab-container v-model="active" swipeable>
			<template v-for="(item, index) in [0,1,2]">
				<mt-tab-container-item :id="'tab-container'+(index+1)" ref="wrapper" :style="{'height': wrapperHeight + 'px', 'overflow': 'scroll','-webkit-overflow-scrolling': 'touch'}"> 
					<ul class="items"
						v-infinite-scroll="loadMore"
						infinite-scroll-disabled="loading"
						infinite-scroll-distance="20">
						<li v-for="item in [1,2,3,4,5,6,7,8,9,10]">{{ item }}</li>
					</ul>
				</mt-tab-container-item>
			</template>
		</mt-tab-container>
	</div>	
</template>
<script type="text/javascript">
	import {Navbar, TabItem, TabContainer, TabContainerItem, InfiniteScroll  } from 'mint-ui';
	import Vue from 'vue'
	Vue.use(InfiniteScroll)
	export default {
		name: "main",
		data(){
			return {
				active: "tab-container1",
				message: "main",
				wrapperHeight: 0,
			}
		},
		mounted(){
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper[0].$el.getBoundingClientRect().top;
			
		},

		components: { 
			"mt-navbar": Navbar,
			"mt-tab-item": TabItem,
			"mt-tab-container": TabContainer,
			"mt-tab-container-item": TabContainerItem,
			"my-tab-bar": {
				data(){
					return {
						currIndex: 0,
					}
				},
				render(createElement){
					var _this = this;
					return createElement("div", {
						style: {
							width: 100/_this.len+"%",
							transform: "translate("+_this.currIndex*100+"%, 0)",
							webkitTransform: "translate("+_this.currIndex*100+"%, 0)",
							transition: "all 0.4s ease-in-out", 
							webkitTransition: "all 0.4s ease-in-out", 
							marginTop: "-3px",
							height: "2px", 
							backgroundColor: "red",
						},
						domProps: {
						    innerHTML: ""
					  	},
					})
				},
				props: ["value", "len"],
				watch: {
					value(){
						this.currIndex = parseInt(this.value.substr(-1,1)) - 1
						console.log(1)
					}
				}

			}

		},
		methods: {
			loadMore(){
				console.log("加载更多")
			}
		}
		
	}
</script>
<style>
	.items {margin-left: 0; padding: 0; list-style: none;}
	.items li {padding: 20px;}
	/*my-tab-bar component*/
</style>