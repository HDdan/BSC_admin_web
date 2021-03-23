<template>
  <div class="edit-potential-distributor-base">
    <div class="ml-20 mt-25 mb-25" style="color: #333333;font-size:14px">最近更新时间：{{ baseForm.updatetime }}</div>
    <el-form :model="baseForm" :rules="rules" ref="ruleForm" label-width="200px" class="edit-potential-distributor-base__form">
      <el-form-item label="数据来源：" prop="sources">
        <el-select v-if="edit_flg['sources']" v-model="baseForm.sources">
          <el-option
            v-for="item in option.sourceOption"
            :key="item.id"
            :label="item.name"
            :value="item.name">
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
        <div class="edit-potential-distributor-base__detail">
          <span>{{ baseForm.dealerstatus }}</span>
        </div>
      </el-form-item>
      <el-form-item label="潜在经销商名称:" prop="name">
        <el-input v-if="edit_flg['dealername']" v-model="baseForm.dealername"></el-input>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('dealername')">
          <span>{{ baseForm.dealername }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="营业范围是否医疗器械:" prop="name">
        <el-select v-if="edit_flg['medicalinstruments']" v-model="baseForm.medicalinstruments">
          <el-option
            v-for="item in option.medicalInstrumentsOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('medicalinstruments')">
          <span>{{ baseForm.medicalinstruments }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="是否从事高值介入产品：" prop="name">
        <el-select v-if="edit_flg['highvalueintervention']" v-model="baseForm.highvalueintervention">
          <el-option
            v-for="item in option.highValueInterventionOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('highvalueintervention')">
          <span>{{ baseForm.highvalueintervention }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="合作科室：" prop="name">
        <el-select v-if="edit_flg['department']" v-model="baseForm.department" multiple>
          <el-option
            v-for="item in option.departmentOption"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('department')">
          <span>{{ baseForm.department }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="主营产品类型：" prop="name">
        <el-select v-if="edit_flg['mainproducttypes']" v-model="baseForm.mainproducttypes">
          <el-option
            v-for="item in option.mainProductTypesOption"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('mainproducttypes')">
          <span>{{ baseForm.mainproducttypes }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="主营产品明细：" prop="name">
        <el-input v-if="edit_flg['mainproducts']" v-model="baseForm.mainproducts"></el-input>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('mainproducts')">
          <span>{{ baseForm.mainproducts }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
      <el-form-item label="主营品牌：" prop="mainbrands">
        <el-select v-if="edit_flg['mainbrands']" v-model="baseForm.mainbrands">
          <el-option
            v-for="item in option.brandOption"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        <div v-else class="edit-potential-distributor-base__detail" @click="editInfo('mainbrands')">
          <span>{{ baseForm.mainbrands }}</span>
          <span class="fz-16 mr-8 iconfont iconxiugai" style="color: #9B9B9B;"></span>
        </div>
      </el-form-item>
    </el-form>
    <div class="ml-20" v-if="isEdit">
      <el-button type="primary" @click="editPotentialDealersBase('ruleForm')">保存</el-button>
      <el-button @click="resetForm('ruleForm')">取消</el-button>
    </div>
  </div>
</template>
<script>
import { lowerJSONKey } from '../../../../utils/index';

export default {
  data() {
    return {
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
      option: {
        sourceOption: null,
        medicalInstrumentsOption: [{
          value: '否',
          lable: '否'
        },{
          value: '是',
          lable: '是'
        }],
        highValueInterventionOption:[{
          value: '否',
          lable: '否'
        },{
          value: '是',
          lable: '是'
        }],
        departmentOption: null,
        mainProductTypesOption: null,
        brandOption: null
      },
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
    this.fetchSourceList();
    this.fetchDepartmentList();
    this.fetchMainProductTypesOption();
    this.fetchBrandOption();
    this.fetchPotentialDealersDetail();
  },
  methods: {
    editInfo(params) {
      this.edit_flg[params] = true;
      this.isEdit = true;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    editPotentialDealersBase() {
      let department = '';
      if (typeof this.baseForm.department === 'object') {
        this.baseForm.department.forEach((item,index) => {
          department = index === 0 ? item : department + '/'+ item;
        });
      } else {
        department = this.baseForm.department;
      }
      const params = {
        action: "PotentialDealersEditBase",
        id: this.baseForm.id,
        sources: this.baseForm.sources,
        dealercode: this.baseForm.dealercode,
        dealername: this.baseForm.dealername,
        medicalinstruments: this.baseForm.medicalinstruments,
        highvalueintervention: this.baseForm.highvalueintervention,
        department: department,
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
      this.isEdit = false;
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
    fetchSourceList() {
      this.$api({
        action: "BaseList",
        type: 'source',
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['sourceOption'] = res.data.list;
      });
    },
    fetchDepartmentList() {
      this.$api({
        action: "BaseList",
        type: 'department',
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['departmentOption'] = res.data.list;
      });
    },
    fetchMainProductTypesOption() {
      this.$api({
        action: "BaseList",
        type: 'product',
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['mainProductTypesOption'] = res.data.list;
      });
    },
    fetchBrandOption() {
      this.$api({
        action: "BaseList",
        type: 'brand',
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['brandOption'] = res.data.list;
      });
    }
  }
}
</script>
<style lang="scss">
.edit-potential-distributor-base {
  &__form {
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: 45%;
    display: inline-block;
    margin-left: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid #E9E9E9;
  }
  .el-form-item__label {
    text-align: left!important;
  }
  .el-select {
    width: 100%;
  }
  .el-input {
    width: 100%;
  }
  .el-input__inner {
    width: 100%;
    height: 36px;
    line-height: 36px;
    // border: none;
  }
  .el-select > .el-input {
    width: 100%;
    min-height: 36px;
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
    width: 100%;
    height: 36px;
  }
}
</style>