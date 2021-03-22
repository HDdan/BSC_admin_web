<template>
  <div class="merchants-info">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="覆盖医院" name="1">
        <hospital-list></hospital-list>
      </el-collapse-item>
      <el-collapse-item title="招商沟通记录" name="2">
        <connect-list></connect-list>
      </el-collapse-item>
      <el-collapse-item title="推送记录" name="3">
        <push-info-list></push-info-list>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import HospitalList from './merchants-info/hospital-list';
import ConnectList  from './merchants-info/connect-list';
import PushInfoList from './merchants-info/push-info-list';
export default {
  data() {
    return {
      activeNames: ['1','2','3','4'],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: { HospitalList, ConnectList, PushInfoList }
}
</script>