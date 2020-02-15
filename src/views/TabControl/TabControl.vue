<template>
    <div class="tab-control">
        <div class="container">
            <div class="tab-text_zh">产品与服务</div>
            <div class="tab-text_en">PRODUCTS AND SERVICES</div>
            <ul class="tab-list">
                <li class="tab-list-item">
                    <i></i>
                    <span>智慧医院</span>
                </li>
                <li class="tab-list-item">
                    <i></i>
                    <span>区域医疗</span>
                </li>
                <li class="tab-list-item">
                    <i></i>
                    <span>分级诊疗</span>
                </li>
                <li class="tab-list-item">
                    <i></i>
                    <span>综合支付</span>
                </li>
                <li class="tab-list-item">
                    <i></i>
                    <span>自助缴费机</span>
                </li>
                <li class="tab-list-item">
                    <i></i>
                    <span>健康管理</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl"
    }
</script>

<style lang="scss">
    .tab-control{
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-text_zh{
            font-size: 32px;
            color: #000000;
            padding: 30px 0 0 0;
            text-transform: uppercase;
            margin-bottom: 2px;
        }
        .tab-text_en{
            padding: 0 0 30px 0;
            font-size: 24px;
            color: #676a6c;
            text-transform: uppercase;
        }
        .tab-list{
            display: flex;
            justify-content: space-around;
            .tab-list-item{
                display: block;
                padding: 0 0 30px 0;
                position: relative;
                margin-bottom: 0;
                cursor: pointer;
                span{
                    display: block;
                    color: #3ba4c1;
                    height: 50px;
                    line-height: 50px;
                    font-size: 14px;
                    margin: 0;
                }
            }
        }
    }
</style>
