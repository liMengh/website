<template>
    <div class="nav-bar">
        <div class="container">
            <div>
                <h1 style="display: none">软件信息企业响应式网站模板</h1>
                <img src="./images/logo.png" />
            </div>
            <el-menu :default-active="activeIndex"
                     class="nav-bar-menu"
                     mode="horizontal"
                     text-color="#000"
                     active-text-color="#1868c9"
                     @select="handleSelect">
                <el-menu-item index="1">网站首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">关于我们</template>
                    <el-menu-item index="2-1">荣誉奖项</el-menu-item>
                    <el-menu-item index="2-2">联系我们</el-menu-item>
                    <el-menu-item index="2-3">加入我们</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">服务内容</template>
                    <el-menu-item index="3-1">智慧医院</el-menu-item>
                    <el-menu-item index="3-2">区域医疗</el-menu-item>
                    <el-menu-item index="3-3">分级诊疗</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">软件产品</template>
                    <el-menu-item index="4-1">集团型</el-menu-item>
                    <el-menu-item index="4-2">连锁软件系列</el-menu-item>
                    <el-menu-item index="4-3">移动POS</el-menu-item>
                </el-submenu>
                <el-menu-item index="5">新闻动态</el-menu-item>
                <el-menu-item index="6">服务案例</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
    .nav-bar{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        background-color: #ffffff;
        position: fixed;
        z-index: 999;
        .container{
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
        }
    }
</style>
