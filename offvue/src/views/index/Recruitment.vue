<template>
    <div>
        <!-- 头部轮播 -->
        <div class="Recruitment-box">
            <img src="../../assets/images/eventimg.png" alt="">
            <div class="posit">   
                <p class="posit-p1">加入我们</p>
            </div>
        </div>
        <div class="Recruitment-box-content">
            <div class="title">招<p>聘信</p>息</div>
            <div class="promote">   
                <div class="top">
                    <div class="t-l">
                        <img src="../../assets/images/Re-img2.png" alt="">
                    </div>
                    <div class="t-c">
                        <p>运营总监</p>
                        <p>更新时间:2021年11月17日</p>
                    </div>
                    <div class="t-r">
                        <div class="look" @click="isBarShow = !isBarShow">查看详情</div>
                    </div>
                </div>
                <el-collapse-transition >
                    <div class="bottom" v-show="isBarShow">
                        <p class="title-p">岗位职责:</p>
                        <div class="mar-l10">
                            <p class="p1">
                                1、负责公司产品的销售及推广，完成个人销售目标
                            </p>
                            <p class="p2">
                                2、开拓新客户，增大产品销售范围，管理维护新老客户的关系 
                            </p>
                            <p class="p3">
                                3、及时为客户提供服务，通过网络或者电话与客户进行有效沟通，寻找销售机会并完成销售业绩
                            </p>
                        </div>
                        <p class="title-p">任职要求:</p>
                        <div class="mar-l10">
                            <p class="p1">
                                1、学历不限，专业不限
                            </p>
                            <p class="p2">
                                2、有销售、客服、经验者优先考虑 
                            </p>
                            <p class="p3">
                                3、普通话熟练，具备较强的沟通能力和学习能力
                            </p>
                            <p class="p4">
                                4、具有良好的服务意识，团队意识强，能吃苦耐劳
                            </p>
                            <p class="p5">
                                5、及有责任心，能承受工作压力，乐于挑战自我
                            </p>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>
            <div class="promote">   
                <div class="top">
                    <div class="t-l">
                        <img src="../../assets/images/Re-img2.png" alt="">
                    </div>
                    <div class="t-c">
                        <p>市场经理</p>
                        <p>更新时间:2021年11月17日</p>
                    </div>
                    <div class="t-r">
                        <div class="look" @click="isBarShow2 = !isBarShow2">查看详情</div>
                    </div>
                </div>
                <el-collapse-transition >
                    <div class="bottom" v-show="isBarShow2">
                        <p class="title-p">岗位职责:</p>
                        <div class="mar-l10">
                            <p class="p1">
                                1、负责公司产品的销售及推广，完成个人销售目标
                            </p>
                            <p class="p2">
                                2、开拓新客户，增大产品销售范围，管理维护新老客户的关系 
                            </p>
                            <p class="p3">
                                3、及时为客户提供服务，通过网络或者电话与客户进行有效沟通，寻找销售机会并完成销售业绩
                            </p>
                        </div>
                        <p class="title-p">任职要求:</p>
                        <div class="mar-l10">
                            <p class="p1">
                                1、学历不限，专业不限
                            </p>
                            <p class="p2">
                                2、有销售、客服、经验者优先考虑 
                            </p>
                            <p class="p3">
                                3、普通话熟练，具备较强的沟通能力和学习能力
                            </p>
                            <p class="p4">
                                4、具有良好的服务意识，团队意识强，能吃苦耐劳
                            </p>
                            <p class="p5">
                                5、及有责任心，能承受工作压力，乐于挑战自我
                            </p>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        <div class="Recruitment-box-content2">
            <div class="title">加<p>入我</p>们</div>
            <div class="formInput">
                <input type="text" v-model="from.name" placeholder="您的姓名">
                <input type="text" v-model="from.phone" placeholder="联系电话"> 
                <input type="text" v-model="from.email" placeholder="电子邮箱">
            </div>
            <div class="formInput">
                <textarea class="textarea" type="textarea" v-model="from.text" placeholder="请留下您的个人介绍:....."></textarea>
            </div>
            <div class="button">
                <div @click="Submit()">发送</div> 
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            isBarShow:false,
            isBarShow2:false,
            from:{
                name:"",
                phone:"",
                email:"",
                text:"",
            }
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        Submit(){
            console.log(this.from)

        }
    }
}
</script>
<style scoped>
    @import '../../assets/css/Recruitment.css';
</style>