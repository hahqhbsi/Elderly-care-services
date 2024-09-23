<template>
  <el-aside class="index-aside" height="100vh" width="210px">
    <div class="index-aside-inner menulist" style="height:100%">
      <div v-for="item in menuList" :key="item.roleName" v-if="role==item.roleName" class="menulist-item" style="height:100%;broder:0;background-color:#C0C0C0">
        <div class="menulistImg" style="backgroundColor:#ff0000;padding:25px 0" v-if="false && menulistStyle == 'vertical'">
          <el-image v-if="'http://codegen.caihongy.cn/20201021/cc7d45d9c8164b58b18351764eba9be1.jpg'" src="http://codegen.caihongy.cn/20201021/cc7d45d9c8164b58b18351764eba9be1.jpg" fit="cover" />
        </div>
        <el-menu mode="vertical" :unique-opened="true" class="el-menu-demo" style="height:100%;" background-color="#000" text-color="#EAEAEA" active-text-color="#FFFFFF" default-active="0">
          <el-menu-item index="(0).toString()" :style="menulistBorderBottom" @click="menuHandler('')"><i v-if="true" class="el-icon-s-home" />首页</el-menu-item>
          <el-submenu :index="(1).toString()" :style="menulistBorderBottom">
            <template slot="title">
              <i v-if="true" class="el-icon-user-solid" />
              <span>个人中心</span>
            </template>
            <el-menu-item :index="(1-1).toString()" @click="menuHandler('updatePassword')">修改密码</el-menu-item>
            <el-menu-item :index="(1-2).toString()" @click="menuHandler('center')">个人信息</el-menu-item>
          </el-submenu>
          <el-submenu :style="menulistBorderBottom" v-for=" (menu,index) in item.backMenu" :key="menu.menu" :index="(index+2).toString()">
            <template slot="title">
              <i v-if="true" :class="icons[index]" />
              <span>{{ menu.menu }}</span>
            </template>
            <el-menu-item v-for=" (child,sort) in menu.child" :key="sort" :index="((index+2)+'-'+sort).toString()" @click="menuHandler(child.tableName)">{{ child.menu }}</el-menu-item>
          </el-submenu>
        </el-menu>

      </div>
    </div>
  </el-aside>
</template>
<script>
import menu from '@/utils/menu'
export default {
  data() {
    return {
      menuList: [],
      dynamicMenuRoutes: [],
      role: '',
      icons: [
        
      ],
      menulistStyle: 'vertical',
	  menulistBorderBottom: {},
    }
  },
  mounted() {
    const menus = menu.list()
    this.menuList = menus
    this.role = this.$storage.get('role')
  },
  created(){
    setTimeout(()=>{
      this.menulistStyleChange()
    },10)
    this.icons.sort(()=>{
      return (0.5-Math.random())
    })
	this.lineBorder()
  },
  methods: {
	lineBorder() {
		let style = 'vertical'
		let w = '1px'
		let s = 'solid'
		let c = '#FFFFFF'
		if(style == 'vertical') {
			this.menulistBorderBottom = {
				borderBottomWidth: w,
				borderBottomStyle: s,
				borderBottomColor: c
			}
		} else {
			this.menulistBorderBottom = {
				borderRightWidth: w,
				borderRightStyle: s,
				borderRightColor: c
			}
		}
	},
    menuHandler(name) {
      let router = this.$router
      name = '/'+name
      router.push(name).catch(err => err)
    },
    // 菜单
    setMenulistHoverColor(){
      let that = this
      this.$nextTick(()=>{
        document.querySelectorAll('.menulist .el-menu-item').forEach(el=>{
          el.addEventListener("mouseenter", e => {
            e.stopPropagation()
            el.style.backgroundColor = "rgba(52, 55, 1, 1)"
          })
          el.addEventListener("mouseleave", e => {
            e.stopPropagation()
            el.style.backgroundColor = "#808A87"
          })
          el.addEventListener("focus", e => {
            e.stopPropagation()
            el.style.backgroundColor = "rgba(52, 55, 22, 1)"
          })
        })
        document.querySelectorAll('.menulist .el-submenu__title').forEach(el=>{
          el.addEventListener("mouseenter", e => {
            e.stopPropagation()
            el.style.backgroundColor = "#191970"
          })
          el.addEventListener("mouseleave", e => {
            e.stopPropagation()
            el.style.backgroundColor = "#708069"
          })
        })
      })
    },
    setMenulistIconColor() {
      this.$nextTick(()=>{
        document.querySelectorAll('.menulist .el-submenu__title .el-submenu__icon-arrow').forEach(el=>{
          el.style.color = "rgba(255, 255, 255, 1)"
        })
      })
    },
    menulistStyleChange() {
      this.setMenulistIconColor()
      this.setMenulistHoverColor()
      this.setMenulistStyleHeightChange()
      let str = "vertical"
      if("horizontal" === str) {
        this.$nextTick(()=>{
          document.querySelectorAll('.el-container .el-container').forEach(el=>{
            el.style.display = "block"
            el.style.paddingTop = "60px" // header 高度
          })
          document.querySelectorAll('.el-aside').forEach(el=>{
            el.style.width = "100%"
            el.style.height = "60px"
            el.style.paddingTop = '0'
          })
          document.querySelectorAll('.index-aside .index-aside-inner').forEach(el=>{
            el.style.paddingTop = '0'
          })
        })
      }
      if("vertical" === str) {
        this.$nextTick(()=>{
          document.querySelectorAll('.index-aside .index-aside-inner').forEach(el=>{
            el.style.paddingTop = "60px"
          })
        })
      }
    },
    setMenulistStyleHeightChange() {
      this.$nextTick(()=>{
        document.querySelectorAll('.menulist-item>.el-menu--horizontal>.el-menu-item').forEach(el=>{
          el.style.height = "60px"
          el.style.lineHeight = "60px"
        })
        document.querySelectorAll('.menulist-item>.el-menu--horizontal>.el-submenu>.el-submenu__title').forEach(el=>{
          el.style.height = "60px"
          el.style.lineHeight = "60px"
        })
      })
    },
  }
}
</script>
<style lang="scss" scoped>
  .index-aside {
    position: relative;
    overflow: hidden;

    .menulistImg {
      padding: 24px 0;
      box-sizing: border-box;

      .el-image {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: block;
      }
    }

    .index-aside-inner {
      height: 100%;
      margin-right: -17px;
      margin-bottom: -17px;
      overflow: scroll;
      overflow-x: hidden !important;
      padding-top: 60px;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }

      .el-menu {
        border: 0;
      }
    }
  }
</style>
