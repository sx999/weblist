<template>
     <div>
       <div class="box">
            <!-- <h4>接收参数:{{this.id}}</h4> -->
            <div class="title">行由心教育有限公司</div>
            <div class="text">
              <p>公司简介：</p>
              <p>河南行由心教育科技有限公司，以美育教育、体育教育和传承与弘扬中华优秀传统文化为己任，致力于打造中国最优秀的综合素质教育平台。
                公司以青少年为主体在学校、家庭、社会方面齐抓共管，通过策划组织专业赛事、大型活动、电视栏目、专家论坛、在线课堂等形式，
                使青少年筑牢民族文化自信、价值自信。</p>
              <p>企业愿景：</p>
              <p>力争打造中国最优秀的综合素质教育平台，成为美育教育、体育教育和传承与弘扬中华优秀传统文化的新优势、新动能。</p>
              <p>公司团队：</p> 
              <p>团队成员多为80、90后，青春洋溢、活力四射。</p>
              <p>团队意识与强烈的事业心是公司力量不竭的源泉。你会发现个人的聪明才智只有融入团队才会获得更好的发挥、才能取得更大的成就。
                  以公司共同目标和整体形象为前提，公司提倡个性发挥，为职员提供广阔的发展空间。</p>
              <p>企业文化：</p>    
              <p>服务理念：服务创造美好印象</p>  
                 <p>经营理念：诚信、合作共赢、发展</p>
                 <p>团队精神：创新、协作、勤学、超越</p>
                 <p>员工精神：忠诚、协作、专业、进取</p>
                 <p>执行理念：不找不行的理由，只找能行的方法</p>
                 <p>用人理念：能者上 庸者下 闲者弃</p>
                 <p>沟通理念：倾心聆听，用心回应</p>
                 <p>成功理念：脚踏实地实现每一阶段的自我目标</p>
                 <p>态度理念：认真做事只把事情做对，用心做事才能把事情做好</p>
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
        // console.log("接收参数:",id)
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
      margin-top: 70px;
      /* font-family: PingFang SC-Medium, PingFang SC; */
  }
  .box .title{
      margin-bottom: 20px;
      width: 100%;
      white-space:wrap;
      font-size: 40px;
      font-weight: 500;
      color: #333333;
  }
  .box .text{
      font-size: 16px;
      font-weight: 500;
      color: #5B5B5B;
  }
</style>