<template>
    <!-- 底部start -->
    <div id="bottom">
        <div class="mar0">
            <div class="bottom-l">
                <div class="bottom-l-t">
                    <p>公司概况</p>
                    <p></p>
                    <p>新闻动态</p>
                    <p></p>
                    <p>赛事活动</p>
                    <p></p>
                    <p>联系我们</p>
                    <p></p>
                </div>
                <div class="bottom-l-b">
                    <ul>
                        <li><router-link to="/about"> 公司简介</router-link></li>
                        <li><router-link to="/contact">联系我们</router-link></li>
                        <li><router-link to="/recruitment">招贤纳士</router-link></li>
                    </ul>
                    <ul>
                        <li><router-link to="/journalism">最新新闻</router-link></li>
                    </ul>
                    <ul>
                        <li><router-link to="/events">热门赛事</router-link></li>
                        <li><router-link to="/activity">研学活动</router-link></li> 
                    </ul>
                    <ul>
                        <li class="orange pitch">电话：{{this.contentE3.phone}}</li>
                        <li class="pitch">邮箱：{{this.contentE3.mailbox}}</li>
                        <li class="pitch">地址：河南省郑州市华强云瓴中心4008室</li>
                    </ul>
                </div>
                <div class="bottom-l-bb">
                    <p>Copyright &copy; 2021-2022 河南行由心教育科技有限公司</p>

                    <p><span>版权所有</span> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=ICP18038316" target="_blank">  豫ICP18038316号</a></p>   
                </div>
            </div>
            <div class="bottom-r">
                <div class="img">
                    <img src="../assets/images/qrcode.jpg" alt="">
                </div>
                <p class="red">扫码关注公众号</p>
            </div>
        </div>
    </div>
    <!-- 底部end -->
</template>
<script>
    export default {
        data(){
            return{
                contentE3:[]
            }
        },
        mounted(){
            this.Queryall()
        },
        computed:{
        //       dataList5:function(){
        //         return this.contentE3.slice(0,1)
        //      }
        },
        methods:{
             //开局查询
            Queryall(){
                this.axios.post(this.$api_router.contact+'findAll')
                .then(res=>{
                    // console.log(res)
                        if(res.data.code == 200){
                                this.contentE3 =  res.data.data[0]
                                // this.Dateformatting()
                        }else{
                            return false
                        }
                })
            }
        }
    }
</script>
<style scoped>
    #bottom a{
         color: #555555;
         text-decoration: none;
    }
    #bottom a:hover{
        color: #EA862A;
    }
    #bottom a::selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
        outline: 0;
    }
    #bottom a::-moz-selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
        outline: 0;
    }
    #bottom a::-webkit-selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
        outline: 0;
    }
    .pitch::selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
    }
    .pitch::-moz-selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
    }
    .pitch::-webkit-selection {
        background: #f88;
        text-shadow: none;
        color: #fff;
    }
    @import '../assets/css/homeBottom.css';
</style>