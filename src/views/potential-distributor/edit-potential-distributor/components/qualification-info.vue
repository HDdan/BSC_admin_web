<template>
  <div class="edit-potential-distributor-base">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      :class="{
        'edit-potential-distributor-base__form ': !isCreate,
        'edit-potential-distributor-base__create': isCreate,
      }"
    >
      <el-form-item label="注册资金：" prop="registeredcapital">
        <el-input
        @blur="inputMoney($event,'registeredcapital')"
          v-if="edit_flg['registeredcapital'] || isCreate"
          v-model="ruleForm.registeredcapital"
        ><span slot="suffix" class="mr-14">万元</span></el-input>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('registeredcapital')"
        >
          <span>{{ ruleForm.registeredcapital }}</span>
          <div>
            <span slot="suffix" class="mr-14" style="color: #9b9b9b">万元</span>
            <span
              class="fz-16 mr-8 iconfont iconxiugai"
              style="color: #9b9b9b"
            ></span>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="经营状态：" prop="operatingstatus">
        <el-select clearable v-if="edit_flg['operatingstatus'] || isCreate" v-model="ruleForm.operatingstatus">
          <el-option v-for="item in option.operatingstatus" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
        <!-- <el-input v-if="edit_flg['operatingstatus'] || isCreate" v-model="ruleForm.operatingstatus"></el-input> -->
         <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('operatingstatus')"
        >
          <span>{{ ruleForm.operatingstatus }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="公司在医疗行业时间（年）:" prop="inmedicaldate">
        <el-input v-if="edit_flg['inmedicaldate'] || isCreate" v-model="ruleForm.inmedicaldate"><span slot="suffix" class="mr-14">年</span></el-input>
          <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('inmedicaldate')"
        >
          <span>{{ ruleForm.inmedicaldate }}</span>
          <div>
            <span slot="suffix" class="mr-14" style="color: #9b9b9b">年</span>
            <span
              class="fz-16 mr-8 iconfont iconxiugai"
              style="color: #9b9b9b"
            ></span>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="有稳定业务的三甲医院数量:" prop="hospitalnumber">
        <el-input v-if="edit_flg['hospitalnumber'] || isCreate" v-model="ruleForm.hospitalnumber"></el-input>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('hospitalnumber')"
        >
          <span>{{ ruleForm.hospitalnumber }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <div v-for="(item,index) in invoicedAmount" :key="index" style="width: 100%;display:flex;align-item:center;">
        <el-form-item :label="`公司开票年份${index+1}:`" prop="invoicedyear" >
          <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-if="edit_flg['invoicedyear'] || edit_flg['invoicedamount'] || isCreate" v-model="invoicedYear[index]" />
          <div v-else
            class="edit-potential-distributor-base__detail"
            @click="editInfo('invoicedyear')"
          >
            <span>{{ invoicedYear[index] }}</span>
            <div>
              <span
                class="fz-16 mr-8 iconfont iconxiugai"
                style="color: #9b9b9b"
              ></span>
            </div>
          </div>
        </el-form-item>
        <el-form-item :label="`公司开票金额：${index+1}:`" prop="invoicedamount" :style="{width: edit_flg['invoicedyear'] || edit_flg['invoicedamount'] || isCreate ? '40%' : '45%'}">
          <el-input v-if="edit_flg['invoicedamount'] || edit_flg['invoicedyear'] || isCreate" v-model="invoicedAmount[index]">
            <span slot="suffix" class="mr-14">万元</span></el-input>
          <div
            v-else
            class="edit-potential-distributor-base__detail"
            @click="editInfo('invoicedamount')"
          >
            <span>{{ invoicedAmount[index] }}</span>
            <div>
              <span slot="suffix" class="mr-14" style="color: #9b9b9b">万元</span>
              <span
                class="fz-16 mr-8 iconfont iconxiugai"
                style="color: #9b9b9b"
              ></span>
            </div>
          </div>
        </el-form-item>
        <div style="display:flex;align-items:center;" v-if="edit_flg['invoicedyear'] || edit_flg['invoicedamount'] || isCreate">
          <img @click="deleteInvoicedConfig(index)" v-if="index<invoicedAmount.length -1" width="36" height="36" src="@/assets/images/delete-invoiced@2x.png" />
          <img @click="addInvoicedConfig" v-else width="36" height="36" src="@/assets/images/add-invoiced@2x.png" />
        </div>
      </div>
    </el-form>
    <div class="ml-20" v-if="isEdit || isCreate">
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">取消</el-button>
    </div>
  </div>
</template>
<script>
import { lowerJSONKey, getInputValue } from "@/utils/index";
export default {
  props: {
    potentialDealersId: {
      type: Number | String,
    },
  },
   watch: {
    // "ruleForm.registeredcapital": function(curVal, oldVal) {
    //   if (!curVal) {
    //     this.$set(this.ruleForm,"registeredcapital", '');
    //     return false;
    //   }
    //   // 实时把非数字的输入过滤掉
    //   this.ruleForm.registeredcapital = curVal.match(/\d/gi) ? curVal.match(/\d/gi).join("") : "";
    //   // this.ruleForm.registeredcapital = getInputValue(this.ruleForm.registeredcapital);
    // },
    "ruleForm.inmedicaldate": function(curVal, oldVal) {
      if (!curVal) {
        this.$set(this.ruleForm,"inmedicaldate", '');
        return false;
      }
      // 实时把非数字的输入过滤掉
      this.ruleForm.inmedicaldate = curVal.match(/\d/gi) ? curVal.match(/\d/gi).join("") : "";
    },
     "ruleForm.hospitalnumber": function(curVal, oldVal) {
      if (!curVal) {
        this.$set(this.ruleForm,"hospitalnumber", '');
        return false;
      }
      // 实时把非数字的输入过滤掉
      this.ruleForm.hospitalnumber = String(curVal).match(/\d/gi) ? String(curVal).match(/\d/gi).join("") : "";
    },
    "ruleForm.invoicedyear": function(curVal, oldVal) {
      if (!curVal) {
        this.$set(this.ruleForm,"invoicedyear", '');
        return false;
      }
      // 实时把非数字的输入过滤掉
      this.ruleForm.invoicedyear = String(curVal).match(/\d/gi) ? String(curVal).match(/\d/gi).join("") : "";
    },
     "ruleForm.invoicedamount": function(curVal, oldVal) {
      if (!curVal) {
        this.$set(this.ruleForm,"invoicedamount", '');
        return false;
      }
      // 实时把非数字的输入过滤掉
      this.ruleForm.invoicedamount = curVal.match(/\d/gi) ? curVal.match(/\d/gi).join("") : "";
    },
  },  
  data() {
    return {
      isCreate: false,
      isCreateSave: false,
      isEdit: false,
      edit_flg: {
        registeredcapital: false,
        operatingstatus: false,
        inmedicaldate: false,
        hospitalnumber: false,
        invoicedamount: false,
        invoicedyear: false
      },
      ruleForm: {
        registeredcapital: "",
        operatingstatus: "",
        inmedicaldate: "",
        hospitalnumber: "",
        invoicedamount: "",
        invoicedyear: ""
      },
      invoicedYear: [null],
      invoicedAmount: [null],
      option: {
        operatingstatus: [{
          id: '正常经营',
          name: '正常经营'
        },{
          id: '倒闭或注销',
          name: '倒闭或注销'
        },{
          id: '被收购',
          name: '被收购'
        }]
      },
      rules: {
        name: [{ message: "请输入活动名称", trigger: "blur" }],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  created() {
    if (!this.$route.query.Id) {
      this.isCreate = true;
    } else this.fetchPotentialDealersDetail();
  },
  methods: {
    addInvoicedConfig() {
      this.invoicedAmount.push('');
      this.invoicedYear.push('');
    },
    deleteInvoicedConfig(index){
      this.invoicedAmount.splice(index,1);
      this.invoicedYear.splice(index,1);
    },
    inputMoney(el,name) {
         this.ruleForm[name] = getInputValue(el);
     },
    editInfo(params) {
      this.edit_flg[params] = true;
      this.isEdit = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.potentialDealersId) {
            this.$message({
              message: "请先添加基本信息",
              type: "warning",
            });
            return;
          }
          this.potentialDealersQualificationEdit();
        } else {
          return false;
        }
      });
    },
    potentialDealersQualificationEdit() {
      let amount = '',year = '';
      this.invoicedAmount.forEach(item => {
        amount = amount + '/' + item;
      });
      this.invoicedYear.forEach(item => {
        year = year + '/' + item;
      });

      this.$set(this.ruleForm, "invoicedamount", amount);
      this.$set(this.ruleForm, "invoicedyear", year);

      this.$api.execobj({
        action: "PotentialDealersQualificationEdit",
        id: this.potentialDealersId ? this.potentialDealersId : 0,
        registeredcapital: this.ruleForm.registeredcapital,
        operatingstatus: this.ruleForm.operatingstatus,
        inmedicaldate: this.ruleForm.inmedicaldate,
        hospitalnumber: this.ruleForm.hospitalnumber,
        invoicedamount: this.ruleForm.invoicedamount,
        invoicedyear: this.ruleForm.invoicedyear
      }).then(() => {
        if (!this.$route.query.Id) this.isCreateSave = true;
        this.fetchPotentialDealersDetail();
      });
    },
    fetchPotentialDealersDetail() {
      this.$api.execobj({
        action: "PotentialDealersDetail",
        id: this.$route.query.Id||this.potentialDealersId,
      }).then((res) => {
        this.ruleForm = lowerJSONKey(res.data);
        this.invoicedYear = this.ruleForm.invoicedyear.split('/')||[];
        this.invoicedAmount = this.ruleForm.invoicedamount.split('/')||[];
        this.initBaseInfoFlg();
        this.isCreate=false
      });
    },
    initBaseInfoFlg() {
      for (var key in this.edit_flg) {
        this.edit_flg[key] = false;
      }
      this.isEdit = false;
    },
    resetForm(formName) {
      if (this.isCreate) this.$refs[formName].resetFields();
      else {
        this.initBaseInfoFlg();
        this.fetchPotentialDealersDetail();
      }
    },
  },
};
</script>
<style lang="scss">
.edit-potential-distributor-qualification {
  .el-form-item {
    display: inline-block;
    margin-left: 20px;
    border-bottom: 1px solid #e9e9e9;
  }
  .el-form-item__label {
    text-align: left !important;
  }
  .el-input__inner {
    width: 320px;
    border: none;
  }
}
</style>