<template>
    <div>
        <!-- 内容start -->
        <div class="Journalism-content">
            <div class="mar-auto">
                <p class="title">新闻动态</p>
                <div class="data">
                    <div class="data-header">
                        <div class="data-header-l">
                            <span>国内</span><span style="margin-left:20px">国外</span>
                        </div>
                        <div class="data-header-r">
                            <img src="../../assets/images/search.png" alt=""> 
                            <input type="text" placeholder="关键词">
                        </div>
                    </div>
                    <div class="data-content">
                        <div class="data-content-a">
                            <div class="data-content-l">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="data-content-r">
                                <div class="data-content-r-1">
                                    <span class="span1">25/</span>
                                    <div class="data-content-r-2">
                                        <span class="span2">10月</span>
                                        <span class="span2">2020年</span>
                                    </div>
                                </div>
                                <p class="p1">行由心教育行由心教育行由心教育</p>
                                <div class="div1">
                                    河南独秀科技有限公司是依托国家教育部颁发的《教育信息化“十三 五”规划》、
                                    《国家教育信息化建设2.0》等国家相关政策，自主研 发并提供安全校园、
                                    专业智慧教育解决方案与集成服务的供应商
                                </div>
                                <div class="div2" @click="goDetail()">
                                        阅读全文
                                </div>
                            </div>
                        </div>
                        <div class="data-content-a">
                            <div class="data-content-l">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="data-content-r">
                                <div class="data-content-r-1">
                                    <span class="span1">25/</span>
                                    <div class="data-content-r-2">
                                        <span class="span2">10月</span>
                                        <span class="span2">2020年</span>
                                    </div>
                                </div>
                                <p class="p1">行由心教育行由心教育行由心教育</p>
                                <div class="div1">
                                    河南独秀科技有限公司是依托国家教育部颁发的《教育信息化“十三 五”规划》、
                                    《国家教育信息化建设2.0》等国家相关政策，自主研 发并提供安全校园、
                                    专业智慧教育解决方案与集成服务的供应商
                                </div>
                                <div class="div2">
                                    阅读全文
                                </div>
                            </div>
                        </div>
                        <div class="data-content-a">
                            <div class="data-content-l">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="data-content-r">
                                <div class="data-content-r-1">
                                    <span class="span1">25/</span>
                                    <div class="data-content-r-2">
                                        <span class="span2">10月</span>
                                        <span class="span2">2020年</span>
                                    </div>
                                </div>
                                <p class="p1">行由心教育行由心教育行由心教育</p>
                                <div class="div1">
                                    河南独秀科技有限公司是依托国家教育部颁发的《教育信息化“十三 五”规划》、
                                    《国家教育信息化建设2.0》等国家相关政策，自主研 发并提供安全校园、
                                    专业智慧教育解决方案与集成服务的供应商
                                </div>
                                <div class="div2">
                                    阅读全文
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="data-bottom">
                        <p>加载更多</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 内容end -->
    </div>
</template>
<script>
export default {
     data(){
        return{
            id:"1"
        }
    },
    created(){

    },
    methods:{
        goDetail(){
            this.$router.push({path:'/journalism/journalismdetail',query:{id:this.id}})
            // console.log("1")
        }
    }
}
</script>
<style scoped>
    @import '../../assets/css/JournalismStyle.css';
</style>