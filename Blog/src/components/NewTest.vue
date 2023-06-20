
<div class="background" :style="background">
		<!--中间的卡片-->
		<el-card class="box-card">
    </el-card>
</div>

<script>
export default {
		data() {
			return {
				 background: {
				 		//动态绑定背景图
				 		//require要用到拼接。
				 		//某些时候，../assets可能会失效，改成~@/assets试试
				        backgroundImage: "url(" + require("../assets/background01.png") + ")",
				        backgroundRepeat: "no-repeat",
				        position: "fixed",
				        backgroundSize: "100% 100%",
				      }
			}
		}
	}
</script>
<style>
	.background {
	  padding: 0px;
	  margin: 0px;
	  background-size: 100%;
	  height: 100%;
	  width: 100%;
	}
	/*设置卡片的样式*/
	.box-card {
	  height: 50%;
	  width: 30%;
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  padding: 10px;
	  background-color: rgba(255,255,255,0.6);/*设置透明度*/
	  transform: translate(-50%, -50%);
	}

</style>
