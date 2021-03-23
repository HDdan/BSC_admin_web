<template>
  <div class="edit-potential-distributor-base">
    <el-form :model="baseForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
      <el-form-item label="数据来源：" prop="sources">
        <el-select v-if="edit_flg['sources']" v-model="baseForm.sources">
          <el-option
            v-for="item in sourcesOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('sources')">
          <span>{{ baseForm.sources }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="经销商编码/ID:" prop="id">
        <el-input v-if="edit_flg['dealerId']" v-model="baseForm.dealerid"></el-input>
        <div v-else class="edit-potential-distributor-base__detail">
          <span>{{ baseForm.dealerid }}</span>
        </div>
      </el-form-item>
      <el-form-item label="经销商代码:" prop="dealercode">
        <el-input v-if="edit_flg['dealercode']" v-model="baseForm.dealercode"></el-input>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('dealercode')">
          <span>{{ baseForm.dealercode }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="经销商状态:" prop="name">
        <el-input v-model="baseForm.DealerStatus" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="潜在经销商名称:" prop="name">
        <el-input v-model="baseForm.dealername" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="营业范围是否医疗器械:" prop="name">
        <el-input v-model="baseForm.medicalinstruments" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="是否从事高值介入产品：" prop="name">
        <el-input v-model="baseForm.highvalueintervention" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="合作科室：" prop="name">
        <el-input v-model="baseForm.department" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="主营产品类型：" prop="name">
        <el-input v-model="baseForm.mainproducttypes" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="主营产品明细：" prop="name">
        <el-input v-model="baseForm.mainproducts" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item label="主营品牌：" prop="name">
        <el-input v-model="baseForm.mainbrands" suffix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <div class="ml-20" v-if="isEdit">
        <el-button type="primary" @click="editPotentialDealersBase('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import { lowerJSONKey } from '../../../../utils/index';

export default {
  data() {
    return {
      // baseForm: {
      //   sources: 'ssss',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   delivery: false,
      //   type: [],
      //   resource: '',
      //   desc: ''
      // },
      isEdit: false,
      edit_flg: {
        sources: false,
        dealerId: false,
        dealercode: false,
        dealername: false,
        medicalinstruments: false,
        highvalueintervention: false,
        mainproducttypes: false,
        mainproducts: false,
        mainbrands: false
      },
      sourcesOption: [{
        value: 1,
        lable: 'ddd'
      }],
      baseForm: null,
      rules: {
        name: [
          { message: '请输入活动名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    this.fetchPotentialDealersDetail();
  },
  methods: {
    editInfo(params) {
      this.edit_flg[params] = true;
      this.isEdit = true;
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    fetchPotentialDealersDetail() {
      this.$api({
        action: "PotentialDealersDetail",
        id: 1
      }).then(res => {
        this.baseForm = lowerJSONKey(res.data);
        this.initBaseInfoFlg();
      });
    },
    editPotentialDealersBase() {
      const params = {
        action: "PotentialDealersEditBase",
        id: this.baseForm.id,
        sources: this.baseForm.sources,
        dealercode: this.baseForm.dealercode,
        dealername: this.baseForm.dealername,
        medicalinstruments: this.baseForm.medicalinstruments,
        highvalueintervention: this.baseForm.highvalueintervention,
        mainproducttypes: this.baseForm.mainproducttypes,
        mainproducts: this.baseForm.mainproducts,
        mainbrands: this.baseForm.mainbrands
      }
      this.$api(params).then(() => {
        this.fetchPotentialDealersDetail();
      });
    },
    initBaseInfoFlg() {
      for (var key in this.edit_flg){
        this.edit_flg[key] = false;
      }
    }
  }
}
</script>
<style lang="scss">
.edit-potential-distributor-base {
  .el-form-item {
    display: inline-block;
    margin-left: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid #E9E9E9;
  }
  .el-form-item__label {
    text-align: left!important;
  }
  .el-input__inner {
    width: 320px;
    height: 36px;
    line-height: 36px;
    // border: none;
  }
  .el-select > .el-input {
    width: 320px;
    height: 36px;
    line-height: 36px;
  }
  .el-form-item__content {
    line-height: 36px;
  }
  .el-form-item__label {
    height: 36px;
  }
  &__detail {
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: 36px;
  }
}
</style>