<link rel="stylesheet" href="//at.alicdn.com/t/font_3181443_0qy5ybeydn8.css">

# 基本 icons

点击图标可以复制代码！！

<div class="icons-list">
<div v-for="item in list" :key="item.name" class="icons-item-wrapper">
  <i class="yf-icons" :class="item.name" @click="copy(item)"></i>
  <span class="icon-name">{{item.name.replace('yf-icons-', '')}}</span>
  <span>{{item.code}}</span>
</div>
</div>

<el-backtop />

<script setup>
// import TinyClipbord from 'tiny-clipboard'
import { ElMessage, ElBacktop } from 'element-plus'
import { ref, onMounted } from 'vue';
import 'element-plus/dist/index.css'
const list = ref([
  {
    name: 'yf-icons-arrow-left-bold',
    code: '&#xe611;'
  },
  {
    name: 'yf-icons-arrow-right-bold',
    code: '&#xe612;'
  },
  {
    name: 'yf-icons-arrow-up-bold',
    code: '&#xe626;'
  },
  {
    name: 'yf-icons-arrow-down-bold',
    code: '&#xe627;'
  },
  {
    name: 'yf-icons-direction-left',
    code: '&#xe623;'
  },
  {
    name: 'yf-icons-direction-right',
    code: '&#xe625;'
  },
  {
    name: 'yf-icons-direction-up',
    code: '&#xe624;'
  },
  {
    name: 'yf-icons-direction-down',
    code: '&#xe622;'
  },
  {
    name: 'yf-icons-add-bold',
    code: '&#xe615;'
  },
  {
    name: 'yf-icons-minus-bold',
    code: '&#xe616;'
  },
  {
    name: 'yf-icons-close-bold',
    code: '&#xe617;'
  },
  {
    name: 'yf-icons-select-bold',
    code: '&#xe618;'
  },
  {
    name: 'yf-icons-arrow-double-right',
    code: '&#xe613;'
  },
  {
    name: 'yf-icons-arrow-double-left',
    code: '&#xe614;'
  },
  {
    name: 'yf-icons-move',
    code: '&#xe619;'
  },
  {
    name: 'yf-icons-refresh',
    code: '&#xe61a;'
  },
  {
    name: 'yf-icons-upload',
    code: '&#xe620;'
  },
  {
    name: 'yf-icons-home',
    code: '&#xe621;'
  },
  {
    name: 'yf-icons-elipsis',
    code: '&#xe62a;'
  },
  {
    name: 'yf-icons-ashbin',
    code: '&#xe629;'
  },
  {
    name: 'yf-icons-user',
    code: '&#xe628;'
  },
  {
    name: 'yf-icons-help',
    code: '&#xe61e;'
  },
  {
    name: 'yf-icons-notification',
    code: '&#xe61f;'
  },
  {
    name: 'yf-icons-favorite',
    code: '&#xe61c;'
  },
  {
    name: 'yf-icons-fabulous',
    code: '&#xe61d;'
  },
  {
    name: 'yf-icons-search',
    code: '&#xe61b;'
  }
])
let TinyClipbord = null

onMounted(() => {
  import('tiny-clipboard').then((data) => {
    TinyClipbord = data.default
  })
})
function copy(data) {
  TinyClipbord && TinyClipbord.copy(`<i class="yf-icons ${data.name}"></i>`, () => {
    ElMessage({
      message: '代码复制成功！',
      type: 'success',
    })
  })
}
</script>

<style scoped>
.icons-list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #eaeefb;
  border-right: none;
  border-bottom: none;
  width: 717px;
}
.icons-item-wrapper {
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 140px;
  width: 179px;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 0 12px
}
.yf-icons {
  font-size: 40px;
  color: #99a9bf;
  cursor: pointer;
}
.icon-name {
  color: #99a9bf
}
</style>
