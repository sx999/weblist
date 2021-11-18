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
                    <!-- 列表数据 -->
                    <div class="data-content">
                        <div class="data-content-a" v-for="(item,index) in listData" :key="index">
                            <div class="data-content-l">
                                <img :src="item.consultPic" alt="">
                            </div>
                            <div class="data-content-r">
                                <div class="data-content-r-1">
                                    <div class="img"><img src="../../assets/images/date.png" alt=""></div>
                                    <span class="span1">{{item.updateTime}}</span>
                                    <!-- <div class="data-content-r-2">
                                        <span class="span2">10月</span>
                                        <span class="span2">2020年</span>
                                    </div> -->
                                </div>
                                <p class="p1">{{item.consultTopic}}</p>
                                <div class="div1" v-html="item.consultSynopsis"></div>
                                <div class="div2" @click="goDetail(item.id)">
                                        阅读全文 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="data-bottom" @click="Addpage()">
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
            listData:[],
            page:1
        }
    },
    created(){

    },
    mounted(){
        this.Queryall()
        
    },
    computed:{
        //      Cutlist:function(){
        //         return this.listData.slice(0,3)
        //      },
    },
    methods:{
        // 时间格式化
        Dateformatting(){
            for(var i=0;i<this.listData.length;i++){
                this.listData[i].updateTime = this.moment(this.listData[i].updateTime).format("YYYY-MM-DD")
            }
        },
        Queryall(){
            this.axios.post(this.$api_router.tradeNews+'list?currentPage='+this.page+'&limit=6')
            .then(res=>{
                console.log(res)
                if(res.data.code == 200){
						this.listData =  res.data.data.page.dataList	
                        this. Dateformatting()
                }else{
                    return false
                }
            })
        },
        goDetail(id){
            this.$router.push({path:'/journalism/journalismdetail',query:{id:id}})
            // console.log("1")
        },
        //加载更多
        Addpage(){
            this.page++
            this.axios.post(this.$api_router.tradeNews+'list?currentPage='+this.page+'&limit=6')
            .then(res=>{
                console.log(res)
                if(res.data.code == 200){
						var list1 =  res.data.data.page.dataList
                        console.log(list1)
                        for(var i=0;i<list1.length;i++){
                            this.listData.push(list1[i])
                        }
                        
                        console.log(this.listData)
                }else{
                    return false
                }
            })
        }
    }
}
</script>
<style scoped>
    @import '../../assets/css/JournalismStyle.css';
</style>