<template>
    <div class="tab-control">
        <div class="container">
            <div class="tab-text_zh">产品与服务</div>
            <div class="tab-text_en">PRODUCTS AND SERVICES</div>
            <ul class="tab-list">
                <li class="tab-list-item" v-for="tabListItem in tabListArr"
                    :key="tabListItem.id"
                    :class="{'on':tabListItem.id === tabListItemId}"
                    @mouseover.stop="selectItem(tabListItem.id)"
                    @mouseout="outItem"
                >
                    <i class="iconfont" :class="tabListItem.classStyle"></i>
                    <span>{{tabListItem.spanText}}</span>
                </li>
            </ul>
        </div>
        <div class="tab-list_details">
            <div class="container">
                <div class="tab-list_details-item" v-for="tabListDetailsItem in tabListDetailsArr" :key="tabListDetailsItem.id"
                    :class="{'on':tabListItemId === tabListDetailsItem.id}"
                >
                    <div class="tab-list_details-item-left">
                        <h3 class="tab-list_details-item-h3">{{tabListDetailsItem.headline}}</h3>
                        <div class="tab-list_details-item-des">
                            {{tabListDetailsItem.tabListDetails}}
                        </div>
                        <a class="tab-list_details-item-more">{{tabListDetailsItem.tabListDetailsMore}}</a>
                    </div>
                    <div class="tab-list_details-item-right">
                        <img :src="tabListDetailsItem.tabListDetailsImg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="countup">
            <div class="container">
                <div class="countup-block">
                    <div class="countup-block-item">
                        <h5>
                            <span>800万</span>
                        </h5>
                        <span>服务单位</span>
                    </div>
                    <div class="countup-block-item">
                        <h5>
                            <span>300万</span>
                        </h5>
                        <span>服务用户</span>
                    </div>
                    <div class="countup-block-item">
                        <h5>
                            <span>30亿</span>
                        </h5>
                        <span>交易额</span>
                    </div>
                    <div class="countup-block-item">
                        <h5>
                            <span>20个省</span>
                        </h5>
                        <span>销售网络覆盖</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
            return {
                tabListArr: [
                    {
                        id: '1',
                        classStyle: 'icon-diamonds',
                        spanText: '智慧医院'
                    },
                    {
                        id: '2',
                        classStyle: 'icon-quyuyiliao',
                        spanText: '区域医疗'
                    },
                    {
                        id: '3',
                        classStyle: 'icon-fenjizhenliao',
                        spanText: '分级诊疗'
                    },
                    {
                        id: '4',
                        classStyle: 'icon-icon-zonghezhifu',
                        spanText: '综合支付'
                    },
                    {
                        id: '5',
                        classStyle: 'icon-zizhujiaofei',
                        spanText: '自助缴费机'
                    },
                    {
                        id: '6',
                        classStyle: 'icon-jiankangguanli',
                        spanText: '健康管理'
                    }
                ],
                tabListDetailsArr:[
                    {
                        id:'1',
                        headline:'智慧医院',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsHospital.36e55957.png'
                    },
                    {
                        id:'2',
                        headline:'区域医疗',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsArea.b9c2faac.png'
                    },
                    {
                        id:'3',
                        headline:'分级诊疗',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsHospital.36e55957.png'
                    }
                    ,
                    {
                        id:'4',
                        headline:'综合支付',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsHospital.36e55957.png'
                    }
                    ,
                    {
                        id:'5',
                        headline:'自助缴费机',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsHospital.36e55957.png'
                    }
                    ,
                    {
                        id:'6',
                        headline:'健康管理',
                        tabListDetails:'基于“以患者为中心”的服务理念，涵盖网站、APP、微信公众号、微信企业号、支付宝生活号等平台，为患者提供智能导诊、预约挂号、排队提醒、诊间支付、报告查询、住院费用预缴等全',
                        tabListDetailsMore:'查询详情',
                        tabListDetailsImg:'/static/img/tabListDetailsHospital.36e55957.png'
                    }
                ],
                tabListItemId:'1'
            }
        },
        methods:{
            selectItem(id){
                this.tabListItemId = id
                console.log(id)
            },
            outItem(){
                console.log("outItem")
            }
        }
    }
</script>

<style lang="scss">
    .tab-control {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .tab-text_zh {
            font-size: 32px;
            color: #000000;
            padding: 30px 0 0 0;
            text-transform: uppercase;
            margin-bottom: 2px;
        }

        .tab-text_en {
            padding: 0 0 30px 0;
            font-size: 24px;
            color: #676a6c;
            text-transform: uppercase;
        }

        .tab-list {
            display: flex;
            justify-content: space-around;

            .tab-list-item {
                display: block;
                padding: 0 0 30px 0;
                position: relative;
                margin-bottom: 0;
                cursor: pointer;
                &::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 0;
                    position: absolute;
                    left: 50%;
                    bottom: -20px;
                    margin-left: -10px;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid #d1d1d1;
                    -webkit-transition: all .5s;
                    -moz-transition: all .5s;
                    -o-transition: all .5s;
                    transition: all .5s;
                }
                i {
                    width: 60px;
                    height: 60px;
                    line-height: 60px;
                    font-size: 50px;
                    color: #3ba4c1;
                    display: block;
                    margin: 0 auto;
                }
                span {
                    display: block;
                    color: #3ba4c1;
                    height: 50px;
                    line-height: 50px;
                    font-size: 14px;
                    margin: 0;
                }
            }
            .on::after{
                bottom: 0px;
            }
        }

        .tab-list_details {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 400px;
            overflow: hidden;
            background: url(./images/tabListDetails.png) center center no-repeat;
            background-size: cover;
            z-index: 10;

            .tab-list_details-item {
                height: 100%;
                position: relative;
                display: none;

                .tab-list_details-item-left {
                    width: 40%;
                    height: 100%;
                    position: absolute;
                    left: 50px;
                    top: 70px;
                    /*opacity: 0;*/
                    -webkit-transition: all .5s;
                    -moz-transition: all .5s;
                    -o-transition: all .5s;
                    transition: all .5s;

                    .tab-list_details-item-h3 {
                        display: block;
                        font-size: 20px;
                        color: #000000;
                        font-weight: bold;
                        text-align: left;
                        margin: 0;
                    }

                    .tab-list_details-item-des {
                        font-size: 14px;
                        line-height: 26px;
                        color: #676a6c;
                        margin: 20px 0;
                        text-align: left;
                    }

                    .tab-list_details-item-more {
                        text-align: center;
                        display: block;
                        width: 120px;
                        height: 40px;
                        line-height: 40px;
                        background-color: #858585;
                        color: #ffffff;
                        font-size: 14px;
                        -moz-border-radius: 30px;
                        -webkit-border-radius: 30px;
                        border-radius: 30px;
                        -webkit-transition: all .5s;
                        -moz-transition: all .5s;
                        -o-transition: all .5s;
                        transition: all .5s;
                    }
                }

                .tab-list_details-item-right {
                    width: 50%;
                    position: absolute;
                    right: 0;
                    bottom: -50px;
                    /*opacity: 0;*/
                    -webkit-transition: all .5s;
                    -moz-transition: all .5s;
                    -o-transition: all .5s;
                    transition: all .5s;

                    img {
                        width: 100%;
                    }
                }
            }

            .on {
                display: block;
            }
        }

        .countup{
            display: flex;
            justify-content: center;
            width: 100%;
            background: url(./images/countupbg.jpg) no-repeat;
            background-size: cover;
            background-position: center;
            padding: 50px 0px;
            .countup-block{
                /*display: flex;*/
                /*justify-content: space-around;*/
                .countup-block-item{
                    display: inline-block;
                    font-size: 1rem;
                    vertical-align: top;
                    margin-bottom: 1.875rem;
                    padding-left: .9375rem;
                    padding-right: .9375rem;
                }
                span{
                    font-size: 18px;
                    color: #ffffff;
                    margin: 0 auto;
                }
                h5{
                    span{
                        font-size: 60px;
                        margin: 0;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>
