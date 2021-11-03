<template>
    <div>
        <h1>详情</h1>
        <h4>id:{{this.id}}</h4>
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
        console.log(id)
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style scoped>


</style>