<template>
     <div>
       <div class="box">
            <div class="title">{{this.list.competitionName}}</div>
            <div class="detail">
                <div class="date">
                    <span>主办方:</span>
                    <span class="red">行由心教育</span>
                </div>
                <div class="date">
                    <span>地点:</span>
                    <span class="red">郑州市航海西路小学</span>
                </div>
                <div class="date">
                    <span>时间:</span>  
                    <span>{{this.list.updateTime}}</span>  
                </div>
            </div>
            
            <hr>
            <div class="text" v-html="this.list.competitionSynopsis">
               
            </div>
            <div class="bottom">
              <div class="bottom-img">
                   <img :src="this.list.competitionPic" alt="">
              </div>
              <p>扫码参加活动</p>
            </div>
            <div class="bottom-text">
              <p>已加载全部内容</p>
            </div>
       </div>
    </div>
</template>
<script>
    export default {
    data(){
      return{
          list:[]
      }
    },
    created(){
        let id=this.$route.query.id;
        this.id = id
        //console.log("接收参数:",id)
    },
    mounted(){
        this.Queryall()
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.events+'findAllId?id='+this.id)
            .then(res=>{
                //console.log(res)
                this.list = res.data.data
                this.list.updateTime = this.moment(this.list.updateTime).format("YYYY年MM月DD日")
                // this.Dateformatting()
            })
        }
    }

  }
</script>

<style scoped>
  .box{
      width: 1000px;
      margin: 0 auto;
      font-family: PingFang SC-Medium, PingFang SC;
  }
  .box .title{
      margin-bottom: 10px;
      width: 100%;
      white-space:wrap;
      font-size: 40px;
      font-weight: 500;
      color: #333333;
  }
  .box .detail{
      display: flex;
  }
  .box .date{
      display: flex;
      flex-direction: column;
      font-size: 20px;
      font-weight: 500;
      color: #777777;
  }
  .box .date:nth-child(2),.box .date:nth-child(3){
      margin-left: 50px;
  }
  .box hr{
      width: 100%;
      height: 1px;
      background: #E8E8E8;    
  }

  .box .text{
      font-size: 20px;
      font-weight: 500;
      color: #5B5B5B;
  }
  .bottom{
      margin-top: 56px;
  }
  .bottom-img{
      margin: 0 auto;
      width: 222px;
      height: 204px;
  }
  .bottom-img img{
      width: 100%;
      height: 100%;
  }
  .bottom p{
      margin: 0;
      margin-top:5px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #000000;
  }
  .bottom-text{
      margin-top: 80px;
      width: 100%;
  }
  .bottom-text p{
      margin:0  auto;
      width: 222px;
      height: 44px;
      cursor: pointer;
      line-height: 44px;
      text-align: center;
      border: 1px solid #DFDFDF;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
  }
</style>