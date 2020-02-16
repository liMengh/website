<template>
    <div class="product-classify">
        <div class="container">
            <h3 class="product-classify-h3">
                <a href="#">产品分类</a>
            </h3>
            <p class="product-classify-des">
                Product categories
            </p>
        </div>
        <div class="product-blocks">
            <ul class="product-blocks-nav">
                <li class="product-blocks-item" v-for="productBlocksSelectItem in productBlocksSelect" :key="productBlocksSelectItem.id"
                >
                    <span :class="{'on':productBlocksSelectItem.pitchOn}"  @click.stop="selectProductItem(productBlocksSelectItem)">{{productBlocksSelectItem.headline}}</span>
                </li>
            </ul>
            <ul class="product-blocks-des">
                <li class="product-blocks-des-item" v-for="productBlocksSelectDesItem in productBlocksSelectDesResult" :key="productBlocksSelectDesItem.id"
                    @mouseover.stop="productSelectItem(productBlocksSelectDesItem)"
                    @mouseout.stop="productOutItem(productBlocksSelectDesItem)"
                    :style="{left:productBlocksSelectDesItem.left + 'px',top:productBlocksSelectDesItem.top + 'px'}">
                    <div class="product-blocks-des-item-block">
                        <div class="product-img" :class="{'product-img-on':productBlocksSelectDesItem.pitchOn}">
                            <img cl :src="productBlocksSelectDesItem.image" alt="">
                        </div>
                        <div class="project-intro" :class="{'project-intro-on': productBlocksSelectDesItem.pitchOn}">
                            <h4 class="project-title" :class="{'project-title-on':productBlocksSelectDesItem.pitchOn}">{{productBlocksSelectDesItem.title}}</h4>
                            <div class="project-descr" :class="{'project-descr-on':productBlocksSelectDesItem.pitchOn}">{{productBlocksSelectDesItem.descr}}}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import productImg1 from './images/productImg1.png'
    export default {
        name: "ProductClassify",
        data(){
            return{
                screenWidth: document.body.clientWidth,
                productBlocksSelect:[
                    {
                        id:'1',
                        pitchOn:true,
                        headline:'全部',
                        type:'list'
                    },
                    {
                        id:'2',
                        pitchOn:false,
                        headline:'集团型',
                        type:'list_1'
                    },
                    {
                        id:'3',
                        pitchOn:false,
                        headline:'连锁软件系列',
                        type:'list_2'
                    },
                    {
                        id:'4',
                        pitchOn:false,
                        headline:'移动POS',
                        type:'list_3'
                    },
                    {
                        id:'5',
                        pitchOn:false,
                        headline:'通讯工具',
                        type:'list_4'
                    }
                ],
                productBlocksSelectDes:[
                    {
                        id:'1',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'2',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'

                    },
                    {
                        id:'3',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'4',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'5',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'6',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'7',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'8',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'9',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_3'
                    },
                    {
                        id:'10',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_4'
                    }
                ],
                productBlocksSelectDesResult:[
                    {
                        id:'1',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'2',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'

                    },
                    {
                        id:'3',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'4',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_1'
                    },
                    {
                        id:'5',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'6',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'7',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'8',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_2'
                    },
                    {
                        id:'9',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_3'
                    },
                    {
                        id:'10',
                        pitchOn:false,
                        image:productImg1,
                        title:'大型卖场系统',
                        descr:'大型卖场管理系统实现集团总部管理控制、物流配送、智能决策分析...',
                        left:0,
                        top:0,
                        type:'list_4'
                    }
                ]
            }
        },
        methods:{
            selectProductItem(productBlocksSelectItem){
                this.productBlocksSelect.map(item => {
                    item.pitchOn = false
                })
                productBlocksSelectItem.pitchOn = true
                if (productBlocksSelectItem.type === 'list'){
                    return this.productBlocksSelectDesResult = this.productBlocksSelectDes
                }
                this.productBlocksSelectDesResult = this.productBlocksSelectDes.filter(item =>item.type === productBlocksSelectItem.type)
                this.calculateStyle()
            },
            productSelectItem(productBlocksSelectDesItem){
                productBlocksSelectDesItem.pitchOn = true
            },
            productOutItem(productBlocksSelectDesItem){
                productBlocksSelectDesItem.pitchOn = false
            },
            calculateStyle(){
                let i = 5;
                this.productBlocksSelectDesResult.map((item,index) => {
                    item.left = this.screenWidth / 5 * index
                    item.top = 0
                    if (+index >= 5){
                        item.left = this.screenWidth / 5 * (index - i)
                        item.top = 203
                    }
                })
            }
        },
        mounted() {
            this.calculateStyle()
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    this.screenWidth = window.screenWidth
                    this.calculateStyle()
                })()
            }
        },
        watch:{
            screenWidth(val){
                if(!this.timer){
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function(){
                        that.timer = false
                    },400)
                }
            }
        }
    }
</script>

<style lang="scss">
    .product-classify{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        .product-classify-h3{
            font-size: 22px;
            margin-top: 0px;
            text-align: center;
            font-weight: 700;
            margin-bottom: 20px;
            a{
                position: relative;
                &::after{
                    background: none repeat scroll 0 0;
                    background-color: #1868c9;
                    content: "";
                    height: 3px;
                    width: 30%;
                    left: 35%;
                    top: 35px;
                    position: absolute;
                }
            }
        }
        .product-classify-des{
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            color: #676a6c;
            margin: 0px auto;
            margin-bottom: 47px;
        }
        .product-blocks{
            width: 100%;
            height: 100%;
          .product-blocks-nav{
              border-bottom: none;
              margin: 30px auto;
              margin-top: 20px;
              margin-bottom: 40px;
              .product-blocks-item{
                  display: inline-block;
                  margin-left: 20px;
                  cursor: pointer;
                  span{
                      background: #ffffff;
                      color: #676a6c;
                      border: 0;
                      padding: 8px 30px;
                      border-radius: 0px;
                      font-size: 14px;
                      &:hover{
                          background: #1868c9;
                          color: #ffffff;
                      }
                  }
                  .on{
                      background: #1868c9;
                      color: #ffffff;
                  }
              }
          }
          .product-blocks-des{
              position: relative;
              height: 407.774px;
              display: flex;
              .product-blocks-des-item{
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 20%;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  .product-blocks-des-item-block{
                      width: 100%;
                      transition: all 0.3s ease;
                      .product-img{
                          img{
                              transition: all 0.3s ease;
                              width: 100%;
                          }
                          position: relative;
                          overflow: hidden;
                          &::after{
                              content: "";
                              display: block;
                              position: absolute;
                              top: 15px;
                              left: 10px;
                              right: 10px;
                              bottom: 15px;
                              opacity: 0;
                              background: rgb(0, 0, 0);
                          }
                      }
                      .product-img-on{
                          img{
                              width: 100%;
                              transform:scale(1.2);
                              -ms-transform:scale(1.2);
                              -moz-transform:scale(1.2);
                              -webkit-transform:scale(1.2);
                              -o-transform:scale(1.2);
                          }
                          &::after{
                           opacity: 1;
                          }
                      }
                      .project-intro{
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          padding: 32px 30px 0 30px;
                          -webkit-sizing: border-box;
                          -moz-box-sizing: border-box;
                          box-sizing: border-box;
                          position: absolute;
                          top: 0;
                          left: 0;
                          opacity: 0;
                          overflow: hidden;
                          transition: all 0.3s cubic-bezier(0.3,0.1,0.6,1);
                          .project-title{
                              position: relative;
                              z-index: 3;
                              margin: 0 0 20px 0;
                              padding: 0;
                              font-size: 18px;
                              font-weight: 600;
                              line-height: 1.3;
                              text-align: center;
                              color: #ffffff;
                              &:before{
                                  content: "";
                                  border: 1px solid;
                                  border-color: #1868c9;
                                  position: absolute;
                                  bottom: -10px;
                                  left: 0;
                                  width: 10%;
                                  margin: 0 45%;
                              }
                              top: 0;
                              transition: all 0.3s cubic-bezier(0.3,0.1,0.6,1);
                          }
                          .project-title-on{
                              top: 10px;
                          }
                          .project-descr{
                              margin-top: 50px;
                              color: #ffffff;
                              font-size: 1rem;
                              transition: all 0.3s cubic-bezier(0.3,0.1,0.6,1);
                          }
                          .project-descr-on{
                              margin-top: 30px;
                          }
                      }
                      .project-intro-on{
                          opacity: 1;
                      }
                  }
              }
          }
        }
    }
</style>
