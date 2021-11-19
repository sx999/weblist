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
                        <li class="orange pitch">15738505738</li>
                        <li class="pitch">邮箱：xingyouxin2020@163.com</li>
                        <li class="pitch">地址：河南省郑州市华强云瓴中心4008室</li>
                    </ul>
                </div>
            </div>
            <div class="bottom-r">
                <div class="img">
                    <img src="../assets/images/qrcode.jpg" alt="">
                </div>
                <p class="red">扫码关注公众号</p>
            </div>
        </div>
       
        <!-- <div class="bottom-t">
            <div class="bottom-t-l">
               <ul>
                   <ol>公司概况</ol>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
               </ul>
               <ul>
                   <ol>公司概况</ol>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
               </ul>
                <ul>
                   <ol>公司概况</ol>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
               </ul>
                <ul>
                   <ol>公司概况</ol>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
               </ul>
               <ul>
                   <ol>公司概况</ol>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
                   <li>公司概况</li>
               </ul>
            </div>
            <div class="bottom-t-r">
                <div class="w260"></div>
                <div class="box">
                    <div class="bimg"></div>
                    <div class="smgz">扫码关注官方公众号</div>
                </div>
                
            </div>
        </div>
        <div class="bottom-b">
            <div class="bottom-b-left">
                <a href="" class="mar0"><img src="@/assets/images/qq.png" class="mar0" alt=""></a> 
                <a href=""><img src="@/assets/images/wx.png" alt=""></a> 
                <a href=""><img src="@/assets/images/wb.png" alt=""></a>  
            </div>
            <div>最终解释权归行由心教育有限公司所有</div>
        </div> -->
    </div>
    <!-- 底部end -->
</template>
<script>
    export default {
        data(){
            return{
                
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