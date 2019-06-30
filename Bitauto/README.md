<!--  加在父级div中 -->
- 垂直居中：align-items:center; display: -webkit-flex;
- 水平居中：justify-content:center; display: -webkit-flex;

- 组件向 vuex中的actions传值时,...mapActions(['increment']) 这种方法不能直接传值
  解决方法:
  1. 点击时调用  fun(){
          this.$store.dispatch('increment',this.checkedNames);
      }
      <!--...mapActions(['increment']) == this.$store.dispatch('increment'); -->
  2. 点击时调用
      fun (){
          this.increment(arg1, arg2)
      }