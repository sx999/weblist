<template>
    <!-- 内容start -->
    <div class="content">
        <div class="content-a">   
            <div class="content-a-1">
               <div>公<p>司使</p>命</div> 
            </div>
            <div class="content-a-2">
                <div class="div1">
                    <div class="div1-1">
                        <span class="iconfont icon-xuexiao"></span>
                    </div>
                    <div class="div2">
                        <p>安全</p>
                        <p>让学校变的安全</p>
                    </div>
                </div>
                <div class="div1">  
                    <div class="div1-1"> 
                        <span class="iconfont icon-zhuanjiaketang-jihuo" ></span>
                    </div>
                    <div class="div2">
                        <p>便捷</p>
                        <p>让学习变的简单</p>
                    </div>
                </div>
                <div class="div1"  >
                    <div class="div1-1">
                        <span class="iconfont icon-kongzhongketangnormal"></span>
                    </div>
                    <div class="div2">
                        <p>技术</p>
                        <p>让教育不受限制</p>
                    </div>
                </div>
            </div>
        </div>  
        <!-- <div class="content-b">
            <img src="@/assets/images/content.png" alt="">
        </div> -->
        <div class="content-c">
            <div class="content-c-1">
                <div class="title">服<p>务案</p>例</div>
                <div class="content-c-1-div">
                    <div class="content-c-1-div1">
                        <div class="image">
                            <img src="@/assets/images/Rectangle19.png" alt="">
                        </div>
                        <div class="back">
                            <p>我们的经典案例</p>
                            <!-- <p>所有案例-></p> -->
                        </div>
                    </div>
                    <div class="content-c-1-div2">
                        <div class="fordiv" v-for="(item,index) in contentC1" :key="index">
                            <div class="fordiv-img">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><span class="iconfont icon-gistuceng"></span></div>
                            </div>
                            <div class="fordiv-a">
                                <p class="p1">{{item.title}}</p>
                                <p class="p2">{{item.titleD}}</p>
                                <p class="p3">阅读更多 <span class="iconfont icon-single_arrow"></span></p>
                            </div>
                        </div>
                        <!-- <div class="fordiv">
                            <div class="fordiv-img">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><img src="@/assets/images/tc.png" alt=""></div>
                            </div>
                            <div class="fordiv-a">
                                <p class="p1">项目名称</p>
                                <p class="p2">项目详谬昂木的撒旦啊倒萨打算.</p>
                                <p class="p3">阅读更多 <img src="../assets/images/arrows.png" alt=""></p>
                            </div>
                        </div>
                        <div class="fordiv">
                            <div class="fordiv-img">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><img src="@/assets/images/tc.png" alt=""></div>
                            </div>
                            <div class="fordiv-a">
                                <p class="p1">项目名称</p>
                                <p class="p2">项目详谬昂木的撒旦啊倒萨打算.</p>
                                <p class="p3">阅读更多 <img src="@/assets/images/arrows.png" alt=""></p>
                            </div>
                        </div>
                        <div class="fordiv">
                            <div class="fordiv-img">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><img src="@/assets/images/tc.png" alt=""></div>
                            </div>
                            <div class="fordiv-a">
                                <p class="p1">项目名称</p>
                                <p class="p2">项目详谬昂木的撒旦啊倒萨打算.</p>
                                <p class="p3">阅读更多 <img src="@/assets/images/arrows.png" alt=""></p>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="content-c-2">
                <div class="title">赛<p>事活</p>动</div>
                <div class="content-c-2-div">
                    <div class="content-c-2-div-left">
                        <div class="div1" v-for="(item,index) in contentC2" :key="index">
                            <div class="three">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><span>15/12</span></div>
                            </div>
                            <div class="three1">
                                <p class="p1">{{item.title}}</p>
                                <p class="p2">{{item.titleD}}</p>
                                <p class="p3">活动</p>
                            </div>
                            <div class="three2"><p>阅读更多</p><span class="iconfont icon-single_arrow"></span></div>
                        </div>
                        <!-- <div class="div1">
                            <div class="three">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><img src="@/assets/images/yy.png" alt=""></div>
                            </div>
                            <div class="three1">
                                <p class="p1">我们的活动名称</p>
                                <p class="p2">我们的活动名称</p>
                                <p class="p3">活动</p>
                            </div>
                            <div class="three2"><p>阅读更多</p><img src="@/assets/images/arrows.png" alt="" > </div>
                        </div>
                        <div class="div1">
                            <div class="three">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><img src="@/assets/images/yy.png" alt=""></div>
                            </div>
                            <div class="three1">
                                <p class="p1">我们的活动名称</p>
                                <p class="p2">我们的活动名称</p>
                                <p class="p3">活动</p>
                            </div>
                            <div class="three2"><p>阅读更多</p> <img src="@/assets/images/arrows.png" alt=""> </div>
                        </div> -->
                    </div>
                    <div class="content-c-2-div-right">
                        <div class="header">
                            <img src="@/assets/images/Rectangle45.png" alt="">
                            <div class="back">
                                <img src="@/assets/images/guanzhu.png" alt="">
                                <p>关注我们获取更多信息</p>
                            </div>
                        </div>
                        <div class='bottom'>
                            <p>duxiukeji@163.com</p>
                            <hr/>
                            <div>关注我们</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-d">
        </div>
        <div class="content-e">
            <div class="content-e-e">
                <div class="title">专<p>家顾</p>问</div>
                <div class="threediv">
                    <div class="div">
                        <div class="divtop">
                            <img class="he_slideCaptionDown_img" src="@/assets/images/559.jpg" alt="">
                            <div class="he_slideCaptionDown_caption">
                                <img src="@/assets/images/demail.png" alt="">
                                <p>联系我</p>
                                <hr>
                                <p>10086</p>
                                <p>111111.com</p>
                                <a class="he_slideCaptionDown_caption_a" href="javascript:void(0);"></a>
                            </div>
                        </div>
                        <div class="divbottom">
                            <div>
                                <p>张珊</p>
                                <p>资深教师</p>
                            </div>
                        </div>
                    </div>
                    <div class="div">
                        <div class="divtop">
                            <img class="he_slideCaptionDown_img" src="@/assets/images/560.jpg" alt="">
                            <div class="he_slideCaptionDown_caption">
                                <img src="@/assets/images/demail.png" alt="">
                                <p>联系我</p>
                                <hr>
                                <p>10086</p>
                                <p>111111.com</p>
                                <a class="he_slideCaptionDown_caption_a" href="javascript:void(0);"></a>
                            </div>
                        </div>
                        <div class="divbottom">
                            <div>
                                <p>张珊</p>
                                <p>资深教师</p>
                            </div>
                        </div>
                    </div>
                    <div class="div">
                        <div class="divtop">
                            <img class="he_slideCaptionDown_img" src="@/assets/images/562.jpg" alt="">
                            <div class="he_slideCaptionDown_caption">
                                <img src="@/assets/images/demail.png" alt="">
                                <p>联系我</p>
                                <hr>
                                 <p>10086</p>
                                <p>111111.com</p>
                                <a class="he_slideCaptionDown_caption_a" href="javascript:void(0);"></a>
                            </div>
                        </div>
                        <div class="divbottom">
                            <div>
                                <p>张珊</p>
                                <p>资深教师</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-e-e">
                <div class="title">行<p>业新</p>闻</div>
                <div class="threediv2">
                    <div class="divleft">
                        <img class="leftimg" src="@/assets/images/19.jpg" alt="">
                        <div class="divleft-title">关注青少年健康00000000</div>
                    </div>
                    <div class="divright">
                        <div class="div1">
                            <div class="time">10/15 2021</div>
                            <div class="img"></div>
                            <div class="bold">“双减”政策靴子落地</div>
                            <div class="bold5">7月24日，“双减”政策靴子落地；9月1日，新修订的《民办教育促进法实施条例》也将施行。新政</div>
                            <div class="font16">阅读全文</div>
                        </div>
                        <div class="div1">
                            <div class="time">10/15 2021</div>
                            <div class="img"></div> 
                            <div class="bold">“双减”政策靴子落地</div>
                            <div class="bold5">7月24日，“双减”政策靴子落地；9月1日，新修订的《民办教育促进法实施条例》也将施行。新政</div>
                            <div class="font16">阅读全文</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-e-e">
                <div class="title">联<p>系我</p>们</div>
                <div class="threediv3">
                    <div class="div2">
                        <div class="front">
                            <div><img src="@/assets/images/phone1.png" alt=""></div>
                            <div>联系电话</div>
                            <div>17638367045</div>
                        </div>
                        
                        <div class="back" :style="{'background':'url('+imgs[0].src+')'}">

                        </div>
                    </div>
                    <div class="div2">
                        <div class="front">
                            <div><img src="@/assets/images/email1.png" alt=""></div>
                            <div>邮件地址</div>
                            <div>17638367045@163.com</div>
                        </div>
                        <div class="back" :style="{'background':'url('+imgs[1].src+')'}">

                        </div>
                    </div>
                    <div class="div2">
                        <div class="front">
                            <div><img src="@/assets/images/time1.png" alt=""></div>
                            <div>工作时间</div>
                            <div>09：00~17：30</div>
                        </div>
                        <div class="back" :style="{'background':'url('+imgs[2].src+')'}">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 内容end -->
</template>
<script>
    import pic11 from '@/assets/images/559.jpg'
    import pic22 from '@/assets/images/560.jpg'
    import pic33 from '@/assets/images/562.jpg'
    export default {
        data(){
            return{
                imgs:[
                    {src:pic11},
                    {src:pic22},
                    {src:pic33},
                ],
                contentC1:[
                    {title:"项目名称1",titleD:"项目介绍详情项目介绍详情1"},
                    {title:"项目名称2",titleD:"项目介绍详情项目介绍详情2"},
                    {title:"项目名称3",titleD:"项目介绍详情项目介绍详情3"},
                    {title:"项目名称4",titleD:"项目介绍详情项目介绍详情4"},
                ],
                contentC2:[
                    {title:"活动名称1",titleD:"我们的活动地点我们的活动地点1"},
                    {title:"活动名称2",titleD:"我们的活动地点我们的活动地点2"},
                    {title:"活动名称3",titleD:"我们的活动地点我们的活动地点3"},
                ]
            }
        },
        methods:{
         
        }
    }
</script>

<style scoped='scoped'>
    @import '../assets/css/homeCenter.css';
</style>