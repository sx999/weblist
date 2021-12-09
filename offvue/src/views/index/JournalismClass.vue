<template>
    <div>
        <!-- 内容start -->
        <!-- 测hi尺蛾 测hi尺蛾测hi尺蛾测hi尺蛾-->
        <div class="Journalism-content">
            <div class="mar-auto">
                <p class="title">新闻动态</p>
                <div class="data">
                    <div class="data-header">
                        <div class="data-header-l">
                            <!-- <span>新闻</span> -->
                        </div>
                        <div class="data-header-r">
                            <img src="../../assets/images/search.png" alt="无法显示" @click="Search()"> 
                            <input type="text" placeholder="关键词" v-model="keyword">
                        </div>
                    </div>
                    <!-- 列表数据 -->
                    <div class="data-content">
                        <div class="data-content-a" v-for="(item,index) in countData" :key="index">
                            <div class="data-content-l">
                                <img :src="item.consultPic" alt="">
                            </div>
                            <div class="data-content-r">
                                <div class="data-content-r-1">
                                    <div class="img"><img src="../../assets/images/date.png" alt=""></div>
                                    <span class="span1">{{item.startTime}}</span>
                                    <!-- <div class="data-content-r-2">
                                        <span class="span2">10月</span>
                                        <span class="span2">2020年</span>
                                    </div> -->
                                </div>
                                <p class="p1">{{item.consultTopic}}</p>
                                <!-- <div class="div1" v-html="item.consultSynopsis"></div> -->
                                <div class="div1">{{item.synopsis}}</div>
                                <div class="div2" @click="goDetail(item.id)">
                                        阅读全文 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="data-bottom" @click="Addpages()" v-show="show">
                        <p ><span v-show="loading" class="el-icon-loading"></span> 加载更多</p>
                    </div>
                    <div class="data-bottom" v-show="!show">
                        <p>暂无更多了</p>
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
            page:1,
            maxdata:"",
            keyword:"", //关键词
            loading:false,
            show:true,
            //默认显示条数
            cou: 5,
            timepage:null
        }
    },
    created(){
        this.loading = true
    },
    mounted(){
        this.Queryalls() 
        // 绑定监听事件
		window.addEventListener("keydown", this.keyDown);
    },
    destroyed() {
		    // 销毁事件
		    window.removeEventListener("keydown", this.keyDown, false);
           
		},
    computed:{
        noMore() {
            	// 判断加载条数是否大于列表数据长度
                return this.cou > this.listData.length;
        },
        countData() {  // 计算属性使用切片生成新数组
                this.loading = true
                let data = [];
               	// 大于三条，使用切片，返回新数组
                if (this.listData.length > 5) {
                    data = this.listData.slice(0, this.cou);
                    this.loading = false
                    return data;
                } else {
                	// 否则使用原来数组，不进行切片处理
                    data = this.listData
                    return data;
                }

        },
        //      Cutlist:function(){
        //         return this.listData.slice(0,3)
        //      },
        // "rowData":function(){	
        //         return  this.listData.sort((b,a) => {
        //             Date.parse(a.startTime) - Date.parse(b.startTime);//时间正序
        //         });	
        // }
    },
    methods:{

        // 时间格式化
        Dateformatting(){
            for(var i=0;i<this.listData.length;i++){
                this.listData[i].startTime = this.moment(this.listData[i].startTime).format("YYYY/MM/DD")
            }
            this.MsgSort(this.listData)
        },
        MsgSort(obj){
                obj.sort((a,b)=>{
                let t1 = new Date(Date.parse(a.startTime.replace(/-/g,"/")))
                let t2 = new Date(Date.parse(b.startTime.replace(/-/g,"/")))
                return t2.getTime()-t1.getTime()
                })
                
                //修改 / 为 年月日
                for(var i=0;i<this.listData.length;i++){
                    var newstr="";
                    newstr=this.listData[i].startTime.split("/");
                    this.listData[i].startTime=newstr[0]+"年"+newstr[1]+"月"+newstr[2]+"日";
                }
                // console.log(this.listData)
            return obj
            
        },
        Queryall(){
            this.axios.post(this.$api_router.tradeNews+'list?consultTopic='+this.keyword+'&currentPage='+this.page+'&limit=10')
            .then(res=>{
                ////console.log(res)
                if(res.data.code == 200){
						this.listData =  res.data.data.page.dataList
                        this.maxdata = res.data.data.page.totalRecord
                        this.Dateformatting()
                }else{
                    return false
                }
            })
        },
        Queryalls(){
            this.axios.post(this.$api_router.tradeNews+'findAll')
            .then(res=>{
                console.log(res)
                if(res.data.code == 200){
						this.listData =  res.data.data
                        
                        // this.maxdata = res.data.data.page.totalRecord
                        this.Dateformatting()
                        this.loading = false
                //          return  this.listData.sort((b,a) => {
                //     Date.parse(a.startTime) - Date.parse(b.startTime);//时间正序
                // });	
                }else{
                    return false
                }
            })
        },
        goDetail(id){
            this.$router.push({path:'/journalism/journalismdetail',query:{id:id}})
            // console.log("1")
        },
        Addpages(){
            this.cou += 5;
            this.loading = false   
        },
        //加载更多
        Addpage(){
            if(this.page == this.maxpage){
                
            }else{
                this.page++
            }
            this.loading = true
            //console.log(this.listData)
            if(this.maxdata == this.listData.length){
                this.show = false
            }else{
                 this.axios.post(this.$api_router.tradeNews+'list?currentPage='+this.page+'&limit=6')
                .then(res=>{
                    //console.log(res)
                    if(res.data.code == 200){
                        var list1 =  res.data.data.page.dataList
                        for(var i=0;i<list1.length;i++){
                            list1[i].startTime = this.moment(list1[i].startTime).format("YYYY/MM/DD")
                        }
                        list1.sort((a,b)=>{
                        let t1 = new Date(Date.parse(a.startTime.replace(/-/g,"/")))
                        let t2 = new Date(Date.parse(b.startTime.replace(/-/g,"/")))
                        return t2.getTime()-t1.getTime()
                        })
                         //修改 / 为 年月日
                        for(var i=0;i<list1.length;i++){
                            var newstr1="";
                            newstr1=list1[i].startTime.split("/");
                            list1[i].startTime=newstr1[0]+"年"+newstr1[1]+"月"+newstr1[2]+"日";
                        }
                        
                        // console.log(list1)
                        this.listData.push(...list1)
                        // console.log(this.listData)
                        this.loading = false
                    }else{
                        return false
                    }
                })
            }
        },
        //精确查询
        Search(){
            this.page = 1
            this.axios.post(this.$api_router.tradeNews+'list?consultTopic='+this.keyword+'&currentPage='+this.page+'&limit=6')
                .then(res=>{
                    //console.log(res)
                    if(res.data.code == 200){
                        // var list1 =  res.data.data.page.dataList
                        // this.listData.push(...list1)
                        this.listData = res.data.data.page.dataList
                        this.maxdata = res.data.data.page.totalRecord
                        if(this.maxdata == this.listData.length){
                            this.show = false
                        }else{
                            this.show = true
                        }
                        this.maxpage = res.data.data.page.totalPage
                        this.Dateformatting()
                    }else{
                         this.$message({
                            message: "没有该名称的新闻",
                            type: 'warning'
                        });
                        return false
                    }
            })
        },
        keyDown(e){
            // 回车则执行登录方法 enter键的ASCII是13	
            if (e.keyCode === 13) {
                this.Search(); // 定义的登录方法
            }
        },
    }
}
</script>
<style>
    @import '../../assets/css/JournalismStyle.css';
</style>