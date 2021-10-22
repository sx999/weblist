<template>
      <!-- 底部start -->
    <div id="bottom">
        <div class="bottom-t">
            <div class="bottom-t-l"></div>
            <div class="bottom-t-r">
                <div style="width: 260px;"></div>
                <div class="box">
                    <div class="bimg"></div>
                    <div class="smgz">扫码关注官方公众号</div>
                </div>
                
            </div>
        </div>
        <div class="bottom-b"></div>
    </div>
    <!-- 底部end -->
</template>
<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>
<style scoped>
    #bottom{
        padding:48px 448px 22px 448px;
        margin-top: 60px;
        width: 100%;
        height: 341px;
        background-color: #353535;
    }
    #bottom .bottom-t{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 228px;
    color: #FFFFFF;

    }
    #bottom .bottom-t .bottom-t-l{
        width: 600px;
        /* height: 228px; */
        border: #d35454 1px solid;
    }
    #bottom .bottom-t .bottom-t-r{ 
        display: flex;
        /* justify-content: sp; */
        width: 424px;
        /* height: 228px; */
        /* text-align: right; */
        border: #f8f5f5 1px solid;
    }
    #bottom .bottom-t .bottom-t-r .box{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    }
    #bottom .bottom-t .bottom-t-r .box .bimg{
        width: 115px;
        height: 110px;
        border: 1px solid #f7afaf;
    }
    #bottom .bottom-t .bottom-t-r .box .smgz{
        margin-top: 24px;
        font-size: 16px;
        font-family: PingFang SC-Bold, PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
    }
    #bottom .bottom-b{
        width: 100%;
        height: 48px;
        border-top: 2px solid #FFFFFF;
    }
</style>