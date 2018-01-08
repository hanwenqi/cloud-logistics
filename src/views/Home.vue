<template>
  <div class="hello">
    <p>这是主页</p>
  <a href="#/lizi">跳到lizi页面</a>
    <p>{{$store.state.a}}</p>
    <button @click="reduce">增加</button>
   <footer class="footer">
    <p>
      Copyright&nbsp;&copy;&nbsp;{{$store.state.author}} - 2016 All rights reserved
    </p>

  </footer>
     <el-button>默认按钮</el-button>  
    <el-button type="primary">主要按钮</el-button>  
    <el-button type="text">文字按钮</el-button>

    <!-- <div v-for="list_each,index in list_page_ajax">
        <div>
            <h3>{{list_each.serviceName}}</h3>
        </div>
    </div>  -->
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
  // computed: {
  //       ...mapGetters(['geta'])
  //   },

//  computed:mapState({
//             count:state=>state.a  //理解为传入state对象，修改state.count属性
//      }),
// computed:mapState(["a","author"]),
computed: {
        ...mapState(["a","author"])
    },
  name: '',
   data () {
      return {
       list_page_ajax:[],
      }
    },
    created(){
        this.getdata()
    },
    
    methods:{
    getdata(){
      let _this = this;
//       this.ajax({
//       method:"get",
//     // url:'http:192.168.1.106:8000/api', 
// })
    },
    ...mapMutations(['reduce'])
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .hello{
        p{
            color: red;
        }
        a{
            color: yellow
        }
    }
</style>
