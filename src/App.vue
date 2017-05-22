<template>
    <div id="app">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <router-view></router-view>
    </div>
</template>

<script>
import { Header, button } from 'mint-ui';
export default {
    name: 'app',
    components: {
        "mt-header": Header,
        "mt-button":　button
    }
}
</script>
<style>
    html, body {margin: 0; padding: 0;}
    /*#app {padding-top: 40px;}*/
</style>
