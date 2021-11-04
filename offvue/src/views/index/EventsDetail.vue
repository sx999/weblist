<template>
     <div>
       <div class="box">
            <h4>参数:{{this.id}}</h4>
            <div class="title">赛事活动名称活动名称名称名称名称</div>
            <p class="date">2021.11.4</p>
            <hr>
            <div class="text">
                河南独秀科技有限公司是教育国家教育部颁发的《信息化“十三五”规划》、
                《国家信息化建设2.0》等国家相关政策，自主研究并提供安全校园、
                专业智能教育解决方案与集成服务的供应商。 
                “让学校成为'最阳光'、'最安全'的地方”是我们的最终目标和努力方向。公司主营业务分为：教育信息化、
                智能化云平台、大数据治理与运维服务。自主云研究“一山智能·APP”安全校园管理平台
                ，是一个集务管理、班级管理、在线辅导、德育教育等服务平台，包括无障碍门智能管理系统
                、教务管理系统系统、智能教室、同步课堂、宿舍管理系统、云数据分析等教育类科技产品。
                 “让学校成为'最阳光'、'最安全'的地方”是我们的最终目标和努力方向。公司主营业务分为
                 ：教育信息化、智能化云平台、大数据治理与运维服务。自主云研究“一山智能·APP”安全校园管理平台，
                 是一个集务管理、班级管理、在线辅导、德育教育等服务平台，包括无障碍门智能管理系统、
                 教务管理系统系统、智能教室、同步课堂、宿舍管理系统、云数据分析等教育类科技产品。
                  “让学校成为'最阳光'、'最安全'的地方”是我们的最终目标和努力方向。公司主营业务分为：
                  教育信息化、智能化云平台、大数据治理与运维服务。
                  自主云研究“一山智能·APP”安全校园管理平台，是一个集务管理、班级管理、在线辅导、
                  德育教育等服务平台，包括无障碍门智能管理系统、教务管理系统系统、智能教室、同步课堂、
                  宿舍管理系统、云数据分析等教育类科技产品。
            </div>
            <div class="bottom">
              <div class="bottom-img">
                  <img src="../../assets/images/559.jpg" alt="">
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
          id:""
      }
    },
    created(){
        let id=this.$route.query.id;
        this.id = id
        console.log("接收参数:",id)
    },
    mounted(){

    },
    methods:{

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
  .box .date{
      font-size: 20px;
      font-weight: 500;
      color: #777777;
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