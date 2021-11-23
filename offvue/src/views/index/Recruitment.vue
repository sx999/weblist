<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Recruitment-box">
             <img :src="this.BannerData.rotationUrl" alt="加入我们">
            <div class="posit">   
                <p class="posit-p1">加入我们</p>
            </div>
        </div>
        <div class="Recruitment-box-content">
            <div class="title">招<p>聘信</p>息</div>
            <div class="promote" v-for="(item,index) in dataList" :key="index">   
                <div class="top">
                    <div class="t-l">
                        <img src="../../assets/images/Re-img2.png" alt="">
                    </div>
                    <div class="t-c">
                        <p>{{item.position}}</p>
                        <p>更新时间:{{item.updateTime}}</p>
                    </div>
                    <div class="t-r">
                        <div class="look" :class="index ==i ?'activebook' :''" @click="isBarShow(index)">查看详情</div>
                    </div>
                </div>
                <el-collapse-transition >
                    <div class="bottom" v-show="index == i">
                        <div v-html="item.demand" class="marp-l18"></div>
                        <div v-html="item.conditions" class="mar-t10 marp-l18"></div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        <div class="Recruitment-box-content2">
            <div class="title">加<p>入我</p>们</div>
            <div class="formInput">
                <input type="text" v-model="from.name" @blur="nameBlur()" placeholder="您的姓名">
                <input type="number" v-model="from.phone" @blur="phoneBlur()" placeholder="联系电话"> 
                <input type="text" v-model="from.email" @blur="emailBlur()" placeholder="电子邮箱">
            </div>
            <div class="formInput">
                <textarea class="textarea" type="textarea" v-model="from.personal"  placeholder="请留下您的个人介绍:....."></textarea>
            </div>
            <div class="button">
                <div @click="Submit()">发送</div> 
            </div>
        </div>

    </div>
</template>
<script>
export default {
    // name:'Recruitment',
    data(){
        return{
            BannerData:[],
            ListData:[],
            i:"",
            from:{
                createTime:"",
                id: "",
                deleted: 0,
                name:"",
                phone:"",
                email:"",
                personal:"",
                updateTime: ""
            },
            
        }
    },
    created(){

    },
    mounted(){
        this.Queryall()
        this.QueryallData()
    },
    computed:{
        dataList:function(){
            return this.ListData.slice(0,3)
        },
    },
    methods:{
        Queryall(){
            this.axios.post(this.$api_router.banner+'list?currentPage=1&limit=1&sort=7')
            .then(res=>{
                //console.log(res)
                if(res.data.code == 200){
                        this.BannerData =  res.data.data.page.dataList[0]
                }else{
                    return false
                }
            })
        },
        QueryallData(){
                this.axios.post(this.$api_router.invite+'findAll')
                .then(res=>{
                    ////console.log(res)
                    if(res.data.code == 200){
                            this.ListData =  res.data.data
                            this.Dateformatting()
                    }else{
                        return false
                    }
                })
        },
        Dateformatting(){
                for(var i=0;i<this.ListData.length;i++){
                    this. ListData[i].updateTime = this.moment(this.ListData[i].updateTime).format("YYYY年MM月DD日")
                }
        },
        Submit(){
            if(this.from.name != "" && this.from.phone != "" &&this.from.email != "" &&this.from.personal != ""){
                this.$confirm("确定发送, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(()=>{
                this.axios.post(this.$api_router.recruitment+'saveOne',this.from)
                .then(res=>{
                    //console.log(res)
                    if(res.data.code == 200){
                        this.$message({
                            message: '成功',
                            type: 'success'
                        });
                        this.from.name="",
                        this.from.phone="",
                        this.from.email="",
                        this.from.personal=""
                    }else{
                         this.$message({
                            showClose: true,
                            message: res.data.msg
                        });
                    }
                })
            })
            }else{
               
                 this.$message({
                    message: '您的信息没有填完整',
                    type: 'warning',
                    offset:100
                });
            }
            
        },
        isBarShow(index){
            this.i = index
        },
        nameBlur(){
            var reg = /^[\u4e00-\u9fa5]{2,9}$/;
            // console.log(this.from.name)
            if(!reg.test(this.from.name)){
                this.$message({
                    message: '姓名格式错误！',
                    type: 'warning'
                });
            }else{
                return true
            }
          
           
        },
        phoneBlur(){
            var reg = /^[1][3,4,5,7,8][0-9]{9}$/; 
            // console.log(this.from.phone)
            if(!reg.test(this.from.phone)){
                this.$message({
                    message: '手机号格式错误！',
                    type: 'warning'
                });
            }else{
                return true
            }
           
        },
        emailBlur(){
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            // console.log(this.from.email)
            if(!reg.test(this.from.email)){
                this.$message({
                    message: '邮箱格式错误！',
                    type: 'warning'
                });
            }else{
                return true
            }
        },
    }
}
</script>
<style scoped>
    @import '../../assets/css/Recruitment.css';
</style>