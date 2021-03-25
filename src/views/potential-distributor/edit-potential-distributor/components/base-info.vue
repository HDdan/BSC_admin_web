<template>
  <div class="edit-potential-distributor-base">
    <!-- <div
      v-if="baseForm.updatetime"
      class="ml-20 mt-25 mb-25"
      style="color: #333333; font-size: 14px"
    >
      最近更新时间：{{ baseForm.updatetime }}
    </div> -->
    <el-form
      :model="baseForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      :class="{
        'edit-potential-distributor-base__form ': !isCreate,
        'edit-potential-distributor-base__create': isCreate,
      }"
    >
      <el-form-item label="数据来源：" prop="sources">
        <el-select
          clearable
          v-if="edit_flg['sources'] || isCreate"
          v-model="baseForm.sources"
        >
          <el-option
            v-for="item in option.sourceOption"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('sources')"
        >
          <span>{{ baseForm.sources }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="经销商编码/ID:" prop="dealerId">
        <el-input
          :disabled="true"
          v-if="edit_flg['dealerId'] || isCreate"
          v-model="baseForm.dealerid"
        ></el-input>
        <div v-else class="edit-potential-distributor-base__detail">
          <span>{{ baseForm.dealerid }}</span>
        </div>
      </el-form-item>
      <el-form-item label="经销商代码:" prop="dealercode" v-if="!isCreate">
        <el-input
          v-if="edit_flg['dealercode']"
          v-model="baseForm.dealercode"
        ></el-input>
        <!-- <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('dealercode')"
        >
          <span>{{ baseForm.dealercode }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div> -->
        <div v-else class="edit-potential-distributor-base__detail">
          <span>{{ baseForm.dealercode }}</span>
        </div>
      </el-form-item>
      <el-form-item label="经销商状态:" prop="dealerstatus" v-if="!isCreate">
        <div class="edit-potential-distributor-base__detail">
          <span>{{ baseForm.dealerstatus }}</span>
        </div>
      </el-form-item>
      <el-form-item label="潜在经销商名称:" prop="dealername" required>
        <el-input
          v-if="edit_flg['dealername'] || isCreate"
          v-model="baseForm.dealername"
        ></el-input>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('dealername')"
        >
          <span>{{ baseForm.dealername }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="营业范围是否医疗器械:" prop="medicalinstruments">
        <el-select
          clearable
          v-if="edit_flg['medicalinstruments'] || isCreate"
          v-model="baseForm.medicalinstruments"
        >
          <el-option
            v-for="item in option.medicalInstrumentsOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('medicalinstruments')"
        >
          <span>{{ baseForm.medicalinstruments }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="是否从事高值介入产品：" prop="highvalueintervention">
        <el-select
          clearable
          v-if="edit_flg['highvalueintervention'] || isCreate"
          v-model="baseForm.highvalueintervention"
        >
          <el-option
            v-for="item in option.highValueInterventionOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('highvalueintervention')"
        >
          <span>{{ baseForm.highvalueintervention }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="合作科室：" prop="department">
        <el-select
          clearable
          v-if="edit_flg['department'] || isCreate"
          v-model="baseForm.department"
          multiple>
          <el-option
            v-for="item in option.departmentOption"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('department')"
        >
          <span>{{ baseForm.department }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="主营产品类型：" prop="mainproducttypes">
        <el-select
          clearable
          v-if="edit_flg['mainproducttypes'] || isCreate"
          v-model="baseForm.mainproducttypes"
          multiple
        >
          <el-option
            v-for="item in option.mainProductTypesOption"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('mainproducttypes')"
        >
          <span>{{ baseForm.mainproducttypes }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="主营产品明细：" prop="mainproducts">
        <el-input
          v-if="edit_flg['mainproducts'] || isCreate"
          v-model="baseForm.mainproducts"
        ></el-input>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('mainproducts')"
        >
          <span>{{ baseForm.mainproducts }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
      <el-form-item label="主营品牌：" prop="mainbrands">
        <el-select
          clearable
          v-if="edit_flg['mainbrands'] || isCreate"
          v-model="baseForm.mainbrands"
          multiple
        >
          <el-option
            v-for="item in option.brandOption"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <div
          v-else
          class="edit-potential-distributor-base__detail"
          @click="editInfo('mainbrands')"
        >
          <span>{{ baseForm.mainbrands }}</span>
          <span
            class="fz-16 mr-8 iconfont iconxiugai"
            style="color: #9b9b9b"
          ></span>
        </div>
      </el-form-item>
    </el-form>
    <div class="ml-20" v-if="isEdit || isCreate">
      <el-button type="primary" @click="editPotentialDealersBase('ruleForm')"
        >保存</el-button
      >
      <el-button @click="resetForm('ruleForm')">取消</el-button>
    </div>
  </div>
</template>
<script>
import { lowerJSONKey } from "../../../../utils/index";

export default {
  data() {
    return {
      potentialDealersId: this.$route.query.Id || 0,
      isCreate: false,
      isCreateSave: false,
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
        mainbrands: false,
      },
      option: {
        sourceOption: null,
        medicalInstrumentsOption: [
          {
            value: "否",
            lable: "否",
          },
          {
            value: "是",
            lable: "是",
          },
        ],
        highValueInterventionOption: [
          {
            value: "否",
            lable: "否",
          },
          {
            value: "是",
            lable: "是",
          },
          {
            value: "高低值都有",
            lable: "高低值都有",
          },
        ],
        departmentOption: null,
        mainProductTypesOption: null,
        brandOption: null,
      },
      baseForm: {
        medicalinstruments: "",
        department: "",
        updatetime: "",
        sources: "",
        dealerid: "",
        dealercode: "",
        dealername: "",
        medicalinstruments: "",
        highvalueintervention: "",
        mainproducttypes: "",
        mainproducts: "",
        mainbrands: "",
      },
      rules: {
        dealername: [
          {
            required: true,
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {
    this.fetchSourceList();
    this.fetchDepartmentList();
    this.fetchMainProductTypesOption();
    this.fetchBrandOption();
    if (this.$route.query.Id) {
      this.fetchPotentialDealersDetail();
    } else this.isCreate = true;
  },
  methods: {
    editInfo(params) {
      this.$set(this.edit_flg,params,true);
      this.isEdit = true;
    },
    resetForm(formName) {
      if (this.isCreate) this.$refs[formName].resetFields();
      else {
        this.initBaseInfoFlg();
        this.fetchPotentialDealersDetail();
      }
    },
    editPotentialDealersBase(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let department = "", mainproducttypes = "" , mainbrands = "";
          if (typeof this.baseForm.department === "object") {
            this.baseForm.department.forEach((item, index) => {
              department = index === 0 ? item : department + "/" + item;
            });
          } else {
            department = this.baseForm.department;
          }

          if (typeof this.baseForm.mainproducttypes === "object") {
            this.baseForm.mainproducttypes.forEach((item, index) => {
              mainproducttypes = index === 0 ? item : mainproducttypes + "/" + item;
            });
          } else {
            mainproducttypes = this.baseForm.mainproducttypes;
          }

          if (typeof this.baseForm.mainbrands === "object") {
            this.baseForm.mainbrands.forEach((item, index) => {
              mainbrands = index === 0 ? item : mainbrands + "/" + item;
            });
          } else {
            mainbrands = this.baseForm.mainbrands;
          }
          const params = {
            action: "PotentialDealersEditBase",
            id: this.potentialDealersId,
            sources: this.baseForm.sources,
            dealercode: this.baseForm.dealercode,
            dealername: this.baseForm.dealername,
            medicalinstruments: this.baseForm.medicalinstruments,
            highvalueintervention: this.baseForm.highvalueintervention,
            department: department,
            mainproducttypes: mainproducttypes,
            mainproducts: this.baseForm.mainproducts,
            mainbrands: mainbrands,
          };
          this.$api(params).then((res) => {
            if (!this.$route.query.Id) this.isCreateSave = true;
            this.$emit("onBase", res.data, this.baseForm.dealername);
            this.potentialDealersId = res.data
              ? res.data
              : this.potentialDealersId;
            this.fetchPotentialDealersDetail();
          });
        } else {
          return false;
        }
      });
    },
    initBaseInfoFlg() {
      for (var key in this.edit_flg) {
        this.edit_flg[key] = false;
      }
      this.isEdit = false;
    },
    fetchPotentialDealersDetail() {
      this.$api({
        action: "PotentialDealersDetail",
        id: this.$route.query.Id || this.potentialDealersId,
      }).then((res) => {
        this.baseForm = lowerJSONKey(res.data);
        this.$emit("onBase", this.potentialDealersId, this.baseForm.dealername);
        this.initBaseInfoFlg();
        this.isCreate = false;
      });
    },
    fetchSourceList() {
      this.$api({
        action: "BaseList",
        type: "source",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.option["sourceOption"] = res.data.list;
      });
    },
    fetchDepartmentList() {
      this.$api({
        action: "BaseList",
        type: "department",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.option["departmentOption"] = res.data.list;
      });
    },
    fetchMainProductTypesOption() {
      this.$api({
        action: "BaseList",
        type: "product",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.option["mainProductTypesOption"] = res.data.list;
      });
    },
    fetchBrandOption() {
      this.$api({
        action: "BaseList",
        type: "brand",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.option["brandOption"] = res.data.list;
      });
    },
  },
};
</script>
<style lang="scss">
.edit-potential-distributor-base {
  &__form {
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .el-form-item {
      width: 45%;
      display: inline-block;
      margin: 0 20px;
      margin-top: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e9e9e9;
    }
  }

  &__create {
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .el-form-item {
      width: 45%;
      display: inline-block;
      margin: 0 20px;
      margin-top: 10px;
    }
  }

  .el-form-item__label {
    text-align: left !important;
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
.el-form-item__error {
  z-index: 99;
}
</style>