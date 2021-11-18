<template>
     <div>
        <!-- 内容start -->
        <div class="Events-content">
            <div class="mar-auto">
                <p class="title">热门赛事</p>
                <!-- <p class="title" v-show="!show">研学活动</p> -->
                <div class="data">
                    <div class="data-header">
                        <div class="data-header-l">
                            <span  class="active">赛事</span>
                            <!-- <span class='active' @click="Block"></span> -->
                        </div>
                        <div class="data-header-r">
                            <img src="../../assets/images/search.png" alt="无法显示" @click="Search()"> 
                            <input type="text" placeholder="关键词"  >
                        </div>
                    </div>
                    <!-- 赛事内容 start-->
                    <div class="data-center">
                        <div class="data-list" v-for="(item,index) in dataSource" :key="index">
                            <div class="list-h">
                                <img :src="item.competitionPic" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">{{item.updateTime}}</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">{{item.competitionName}}</p>
                                    <p class="p2" v-html="item.competitionSynopsis"></p>
                                    <p class="p3">赛事</p>
                                </div>
                                <div class="list-b-r" @click="GoDetail(item.id)">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 赛事内容 end-->
                    <div class="data-bottom" @click="Addpage()" v-show="show">
                        <p><span v-show="loading" class="el-icon-loading"></span>加载更多</p>
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
      }
    },
    created(){ 
        var arr=[1,2,3,4,5,6,7,8];
			var newArr = [];
			console.log(arr);
			for(var i=arr.length-1;i>=0;i--){
				newArr.push(arr[i]);
			}
			console.log(newArr)
    },
    mounted(){
        this.Queryall()
    },
    computed:{
        dataSource:function(){
            return this.listData.filter(item=>item.sort == 0)
        }
    },
    methods:{
         // 时间格式化
        Dateformatting(){
            for(var i=0;i<this.listData.length;i++){
                this.listData[i].updateTime = this.moment(this.listData[i].updateTime).format("MM/DD")
            }
        },
        Queryall(){
            this.axios.post(this.$api_router.events+'list?consultTopic='+this.keyword+'&currentPage='+this.page+'&limit=6&sort=0')
            .then(res=>{
                console.log(res)
                if(res.data.code == 200){
                        this.listData =  res.data.data.page.dataList
                        this.maxdata = res.data.data.page.totalRecord
                        this.Dateformatting()
                }else{
                    return false
                }
            })
        },
        //加载更多
        Addpage(){
            if(this.page == this.maxpage){
                
            }else{
                this.page++
            }
           
            this.loading = true
            console.log(this.listData)
            if(this.maxdata == this.listData.length){
                this.show = false
            }else{
                 this.axios.post(this.$api_router.events+'list?consultTopic='+this.keyword+'&currentPage='+this.page+'&limit=6&sort=0')
                .then(res=>{
                    console.log(res)
                    if(res.data.code == 200){
                        var list1 =  res.data.data.page.dataList
                        this.listData.push(...list1)
                        this.loading = false
                        this.Dateformatting()
                    }else{
                        return false
                    }
                })
            }
        },
        GoDetail(id){
              this.$router.push({path:'/events/eventsdetail',query:{id:id}})
        },
       //精确查询
        Search(){
            this.page = 1
            this.axios.post(this.$api_router.events+'list?consultTopic='+this.keyword+'&currentPage='+this.page+'&limit=6&sort=0')
                .then(res=>{
                    console.log(res)
                    if(res.data.code == 200){
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
                        return false
                    }
            })
        }
    }

  }
</script>

<style>
    @import '../../assets/css/EventsStyle.css';
</style>