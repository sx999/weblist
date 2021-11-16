<template>
     <div>
        <!-- 内容start -->
        <div class="Events-content">
            <div class="mar-auto">
                <p class="title" v-show="show">热门赛事</p>
                <p class="title" v-show="!show">研学活动</p>
                <div class="data">
                    <div class="data-header">
                        <div class="data-header-l">
                            <span @click="Block" :class="show ? 'active':''">赛事</span>
                            <span style="margin-left:20px" :class="!show ? 'active':''" @click="Block">活动</span>
                        </div>
                        <div class="data-header-r">
                            <img src="../../assets/images/search.png" alt=""> 
                            <input type="text" placeholder="关键词">
                        </div>
                    </div>
                    <!-- 赛事内容 start-->
                    <div class="data-center" v-show="show">
                        <div class="data-list" v-for="(item,index) in list1" :key="index">
                            <div class="list-h">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">{{item.name}}</p>
                                    <p class="p2">{{item.detail}}</p>
                                    <p class="p3 bor-r">{{item.n}}</p>
                                </div>
                                <div class="list-b-r" @click="GoDetail(item.id)">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的赛事名称</p>
                                    <p class="p2">我们的赛事名称</p>
                                    <p class="p3">赛事</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的赛事名称</p>
                                    <p class="p2">我们的赛事名称</p>
                                    <p class="p3">赛事</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/26.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的赛事名称</p>
                                    <p class="p2">我们的赛事名称</p>
                                    <p class="p3">赛事</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <!-- 赛事内容 end-->
                    <!-- 活动内容start -->
                     <div class="data-center" v-show="!show">
                        <div class="data-list" v-for="(item,index) in list2" :key="index"> 
                            <div class="list-h">
                                <img src="../../assets/images/19.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">{{item.name}}</p>
                                    <p class="p2">{{item.detail}}</p>
                                    <p class="p3">{{item.n}}</p>
                                </div>
                                <div class="list-b-r" @click="GoDetail(item.id)">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/19.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的活动名称</p>
                                    <p class="p2">我们的活动名称</p>
                                    <p class="p3">活动</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/19.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的活动名称</p>
                                    <p class="p2">我们的活动名称</p>
                                    <p class="p3">活动</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="data-list">
                            <div class="list-h">
                                <img src="../../assets/images/19.jpg" alt="">
                            </div>
                            <div class="list-b">
                                <div class="list-b-l">
                                    <div class="across"></div>
                                    <div class="vertical"></div>
                                    <div class="list-b-l-date">15/12</div>
                                </div>
                                <div class="list-b-c">
                                    <p class="p1">我们的活动名称</p>
                                    <p class="p2">我们的活动名称</p>
                                    <p class="p3">活动</p>
                                </div>
                                <div class="list-b-r">
                                    <p>阅读更多</p>
                                    <img src="../../assets/images/left-arraws.png" alt="">
                                </div>
                            </div>
                        </div> -->
                    </div>
                      <!-- 活动内容end-->
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
        //  id:"0",
         show:true,
         list1:[
             {name:"赛事名称1",detail:"赛事详情1",n:"赛事",id:"1"},
             {name:"赛事名称2",detail:"赛事详情2",n:"赛事",id:"2"},
             {name:"赛事名称3",detail:"赛事详情3",n:"赛事",id:"3"},
             {name:"赛事名称3",detail:"赛事详情3",n:"赛事",id:"4"},
         ],
         list2:[
             {name:"活动名称1",detail:"活动详情1",n:"活动",id:"01"},
             {name:"活动名称2",detail:"活动详情2",n:"活动",id:"02"},
             {name:"活动名称3",detail:"活动详情3",n:"活动",id:"03"},
             {name:"活动名称3",detail:"活动详情3",n:"活动",id:"04"},
         ],
      }
    },
    created(){ 
        var arr=[1,2,3,4,5,6,7,8];
			var newArr = [];
			console.log(arr);
			for(var i=arr.length-1;i>=0;i--){
				newArr.push(arr[i]);
			}
			console.log(newArr);

    },
    methods:{
        GoDetail(id){
              this.$router.push({path:'/events/eventsdetail',query:{id:id}})
        },
        Block(){
            this.show = !this.show
        }
    }

  }
</script>

<style>
    @import '../../assets/css/EventsStyle.css';
</style>