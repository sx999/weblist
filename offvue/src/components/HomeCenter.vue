<template>
    <!-- 内容start -->
    <div class="content">
        <div class="content-a">
            <div class="mar0h102">   
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
            
        </div>  
        <!-- <div class="content-b">
            <img src="@/assets/images/content.png" alt="">
        </div> -->
        <div class="content-c">
            <div class="mar0h102">
            <div class="content-c-1">
                <div class="title">热<p>门赛</p>事</div>
                <div class="content-c-1-div">
                    <div class="content-c-1-div1">
                        <div class="image">
                            <img src="@/assets/images/Rectangle19.png" alt="">
                        </div>
                        <div class="back">
                            <p>我们的热门赛事</p>
                            <!-- <p>所有案例-></p> -->
                        </div>
                    </div>
                    <div class="content-c-1-div2">
                        <div class="fordiv" v-for="(item,index) in dataList1" :key="index" @click="GoEventsS(item.id)">
                            <div class="fordiv-img">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><span class="iconfont icon-gistuceng"></span></div>
                            </div>
                            <div class="fordiv-a">
                                <p class="p1">{{item.competitionName}}</p>
                                <p class="p2" v-html="item.competitionSynopsis"></p>
                                <p class="p3">阅读更多 <span class="iconfont icon-single_arrow"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-c-2">
                <div class="title">科<p>研活</p>动</div>
                <div class="content-c-2-div">
                    <div class="content-c-2-div-left">
                        <div class="div1" v-for="(item,index) in dataList2" :key="index">
                            <div class="three">
                                <div class="across"></div>
                                <div class='vertical'></div>
                                <div class="image"><span>{{item.updateTime}}</span></div>
                            </div>
                            <div class="three1">
                                <p class="p1">{{item.competitionName}}</p>
                                <p class="p2" v-html="item.competitionSynopsis"></p>
                                <!-- <p class="p3" v-if="item.sort == 0">赛事</p> -->
                                <p class="p3">活动</p>
                            </div>
                            <div class="three2" @click="GoEventsH(item.id)"><p>阅读更多</p><span class="iconfont icon-single_arrow"></span></div>
                        </div>
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
            
        </div>
        <div class="content-d">
            <img src="../assets/images/about-img.png" alt="">
            <!-- <img src="@/assets/images/mp4back.png" alt=""> -->
            <!-- <div class="title">在线视频服务</div>
            <div class="video">
                <video src="../assets/images/fuwu.mp4" ref="movie"></video>、
                <i v-show="isplay" class="el-icon-video-play" @click="handlePlay()"></i>
                <i v-show="!isplay" class="el-icon-video-pause" @click="handlePause()"></i>
            </div> -->
            
        </div>
        <div class="content-e">
            <div class="mar0h102">
                 <!-- <div class="content-e-e">
                <div class="title">专<p>家顾</p>问</div>
                <div class="threediv">
                    <div class="div" v-for="(item,index) in dataList3" :key="index">
                        <div class="divtop">
                            <img class="he_slideCaptionDown_img" :src="item.expertPic" alt="">
                            <div class="he_slideCaptionDown_caption">
                                <img src="@/assets/images/demail.png" alt="">
                                <p>联系我</p>
                                <hr>
                                <p>{{item.expertPhone}}</p>
                                <p>{{item.expertMailbox}}</p>
                                <a class="he_slideCaptionDown_caption_a" href="javascript:void(0);"></a>
                            </div>
                        </div>
                        <div class="divbottom">
                            <div>
                                <p>{{item.expertName}}</p>
                                <p>{{item.expertTitle}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="content-e-e">
                <div class="title">行<p>业新</p>闻</div>
                <div class="threediv2">
                    <div class="divleft">
                        <img class="leftimg" src="@/assets/images/19.jpg" alt="">
                        <div class="divleft-title">关注青少年健康</div>
                    </div>
                    <div class="divright">
                        <div class="div1" v-for="(item,index) in  dataList4" :key="index" @click="GoTradeNews(item.id)">
                            <div class="time">{{item.updateTime}}</div>
                            <div class="img">
                                <img :src="item.consultPic" alt="无法加载">
                            </div>
                            <div class="bold">{{item.consultTopic}}</div>
                            <div class="bold5" v-html="item.consultSynopsis"></div>
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
                            <div>15738505738</div>
                        </div>
                        <!-- <div class="back" :style="{'background':'url('+imgs[0].src+')'}">
                            
                        </div> -->
                        <div class="back" style="background-color:#FFF">

                        </div>
                    </div>
                    <div class="div2">
                        <div class="front">
                            <div><img src="@/assets/images/email1.png" alt=""></div>
                            <div>邮件地址</div>
                            <div>xingyouxin2020@163.com</div>
                        </div>
                        <!-- <div class="back" :style="{'background':'url('+imgs[1].src+')'}">

                        </div> -->
                         <div class="back" style="background-color:#FFF">

                        </div>
                    </div>
                    <div class="div2">
                        <div class="front">
                            <div><img src="@/assets/images/time1.png" alt=""></div>
                            <div>工作时间</div>
                            <div>09：00~17：30</div>
                        </div>
                        <!-- <div class="back" :style="{'background':'url('+imgs[2].src+')'}">
                        </div> -->
                         <div class="back" style="background-color:#FFF">

                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </div>
    <!-- 内容end -->
</template>
<script>
    // import pic11 from '@/assets/images/559.jpg'
    // import pic22 from '@/assets/images/560.jpg'
    // import pic33 from '@/assets/images/562.jpg'
    export default {
        data(){
            return{
                // imgs:[
                //     {src:pic11},
                //     {src:pic22},
                //     {src:pic33},
                // ],
                //项目
                contentC1:[],
                //赛事活动
                contentC2:[],
                //专家顾问
                contentE1:[],
                //新闻资讯
                contentE2:[],
                //联系方式
                contentE3:[],
                // loading:false,
                // isplay:true,
            }
        },
        mounted(){
            this.Queryall()  //查询全部活动
            //音频控件获取ref
            // this.$refs.movie.addEventListener('play',this.handlePlay)
            // this.$refs.movie.addEventListener('pause',this.handlePause)
        },
        computed:{
             dataList1:function(){
        //         return this.contentC2.slice(0,4)
                return this.contentC2.filter(item=>item.sort == 0).slice(0,4)
             },
             dataList2:function(){
                return this.contentC2.filter(item=>item.sort == 1).slice(0,3)
             },
             dataList3:function(){
                return this.contentE1.slice(0,3)
             },
             dataList4:function(){
                return this.contentE2.slice(0,2)
             },
             dataList5:function(){
                return this.contentE3.slice(0,3)
             }
        },
        methods:{
            // 时间格式化
            Dateformatting(){
                for(var i=0;i<this.contentE2.length;i++){
                    this.contentE2[i].updateTime = this.moment(this.contentE2[i].updateTime).format("YYYY年MM月DD日")
                }
            },
            //开局查询
            Queryall(){
                // this.axios.post(this.$api_router.project+'findAll')
                // .then(res=>{
                //         // console.log(res)
                //         if(res.data.code == 200){
                //                 this.contentC1 =  res.data.data
                //         }else{
                //             return false
                //         }
                // })
                this.axios.post(this.$api_router.events+'findAll')
                .then(res=>{
                        // console.log(res)
                        if(res.data.code == 200){
                                this.contentC2 =  res.data.data
                                for(var i=0;i<this.contentC2.length;i++){
                                    this.contentC2[i].updateTime = this.moment(this.contentC2[i].updateTime).format("MM/DD")
                                }
                        }else{
                            return false
                        }
                 })
                this.axios.post(this.$api_router.expert+'findAll')
                .then(res=>{
                        // console.log(res)
                        if(res.data.code == 200){
                                this.contentE1 =  res.data.data
                        }else{
                            return false
                        }
                 })
                this.axios.post(this.$api_router.tradeNews+'findAll')
                .then(res=>{
                        if(res.data.code == 200){
                                this.contentE2 =  res.data.data
                                this.Dateformatting()
                        }else{
                            return false
                        }
                })
                this.axios.post(this.$api_router.contact+'findAll')
                .then(res=>{
                        if(res.data.code == 200){
                                this.contentE3 =  res.data.data
                                this.Dateformatting()
                        }else{
                            return false
                        }
                })
            },
            //赛事精确跳转
            GoEventsS(id){
                 this.$router.push({path:'/events/eventsdetail',query:{id:id}})
            },
            //活动精确跳转
            GoEventsH(id){
                 this.$router.push({path:'/activity/activitydetail',query:{id:id}})
            },
            //新闻精确跳转
            GoTradeNews(id){
                 this.$router.push({path:'/journalism/journalismdetail',query:{id:id}})
            },
            // textHidden,
            //音频控件
            // handlePlay(){
            //     console.log("播放")
            //     this.$refs.movie.play()
            //     this.isplay = false;
            // },
            // handlePause(){
            //      console.log("暂停")
            //     this.$refs.movie.pause()
            //     this.isplay = true;
            // }
        }
    }
</script>

<style scoped='scoped'>
    @import '../assets/css/homeCenter.css';
</style>