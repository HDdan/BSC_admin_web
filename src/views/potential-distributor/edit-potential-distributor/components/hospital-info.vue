<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title" v-if="$route.query.Id">
        <span>共{{ hospitalList_total }}条</span>
        <span v-if="lastupdatetime">最近更新时间：{{ lastupdatetime }}</span>
      </div>
      <div class="business-info__header__query" :class="{'create': !$route.query.Id}">
        <el-button
          icon="fz-14 mr-8 iconfont iconxinzeng"
          type="primary"
          @click="addHospital"
          >覆盖医院</el-button
        >
      </div>
    </div>
    <div class="business-info__main">
      <el-table :empty-text="emptyText" :data="hospitalsList" style="width: 100%">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="hospitalname" label="医院名称"></el-table-column>
        <el-table-column prop="hospitalcode" label="医院编号"></el-table-column>
        <el-table-column prop="department" label="医院科室"></el-table-column>
        <el-table-column prop="businessRegion" label="操作">
          <template slot-scope="scope">
            <span style="display: flex">
              <div
                class="mr-15"
                style="color: #4196ff; cursor: pointer"
                @click="openEditHospital(scope.row)"
              >
                修改
              </div>
              <p>|</p>
              <div
                class="ml-15"
                style="color: #4196ff; cursor: pointer"
                @click="delHospital(scope.row)"
              >
                删除
              </div>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="addCoverHospitalsVisible" class="add-source ml-20 mr-20 mt-24">
        <el-select
          clearable
          class="mt-34 ml-24"
          v-model="form.hospitalname"
          placeholder="医院名称"
          filterable
          @change="onHospital"
        >
          <el-option
            v-for="item in option.hospitalOption"
            :key="item.Id"
            :value="item.hospitalname"
          >
          </el-option>
        </el-select>
        <el-input
          class="mt-34 ml-24"
          v-model="form.hospitalcode"
          placeholder="医院编号"
        ></el-input>
        <el-select
          multiple
          clearable
          class="mt-34 ml-24"
          v-model="form.department"
          placeholder="医院科室"
        >
          <el-option
            v-for="item in option.departmentOption"
            :key="item.id"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="editPotentialDealersCoverHospitals"
            >添加</el-button
          >
          <el-button @click="cancelHospital">取消</el-button>
        </div>
      </div>
      <pagination
        v-if="hospitalList_total > 0"
        :total="hospitalList_total"
        :page.sync="meta.currPage"
        :limit.sync="meta.pageSize"
        @pagination="handlePagination"
      />
    </div>
    <confirm-action-dialog :dialogVisible.sync="dialogVisible" :tips="'请确认信息无误后删除！'" @confirm="deleteData"></confirm-action-dialog>
  </div>
</template>
<script>
import ConfirmActionDialog from '../../../../components/ConfirmActionDialog';
import Pagination from "../../../../components/Pagination";
import { lowerJSONKey } from "../../../../utils/index";

export default {
  props: {
    potentialDealersId: {
      type: Number | String,
    },
  },
  data() {
    return {
      dialogVisible: false,
      currentActionId: '',
      emptyText:'',
      addCoverHospitalsVisible: false,
      currentEditHospitalId: null,
      hospitalsList: null,
      meta: {
        currPage: 1,
        pageSize: 2,
      },
      hospitalList_total: 0,
      option: {
        departmentOption: null,
        hospitalOption: null,
        sexOptions: [
          {
            value: "男",
          },
          {
            value: "女",
          },
        ],
      },
      form: {},
      lastupdatetime:''
    };
  },
  created() {
    this.fetchDepartmentList();
    this.fetchHospitalList();
    this.$route.query.Id && this.fetchPotentialDealersCoverHospitalsList();
  },
  methods: {
    onHospital(val) {
      this.form.hospitalcode = this.option.hospitalOption.filter(
        (i) => i.hospitalname == val
      )[0].hospitalcode;
    },
    addHospital() {
      if (!this.potentialDealersId) {
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
        return;
      }
      this.emptyText=' '
      this.addCoverHospitalsVisible = true;
      this.form = {};
      this.currentEditHospitalId = 0
    },
    cancelHospital() {
      if(!this.hospitalsList||this.hospitalsList.length==0)this.emptyText='暂无数据'
      this.addCoverHospitalsVisible = false;
    },
    openEditHospital(row) {
      this.addCoverHospitalsVisible = true;
      this.currentEditHospitalId = row.id;
      this.fetchPotentialDealersCoverHospitalsDetail(row.id);
    },
    delHospital(row) {
      this.currentEditHospitalId = row.id;
      if(this.hospitalsList.length==1 && this.meta.currPage>0)this.meta.currPage--
      this.deletePotentialDealersCoverHospitalsDelete(row.id);
    },
    handlePagination() {
      this.fetchPotentialDealersCoverHospitalsList();
    },
    editPotentialDealersCoverHospitals() {
      let department = '';
       if (typeof this.form.department === "object") {
          this.form.department && this.form.department.forEach((item, index) => {
            department = index === 0 ? item : department + "/" + item;
          });
        } else if (this.form.department.length > 0){
          department = this.form.department;
        } else {
          department = '';
        }
      this.$api.execobj({
        action: "PotentialDealersCoverHospitalsEdit",
        id: this.currentEditHospitalId ? this.currentEditHospitalId : 0,
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        hospitalname: this.form.hospitalname,
        department: department,
        hospitalcode: this.form.hospitalcode,
      }).then(() => {
        this.fetchPotentialDealersCoverHospitalsList();
        this.addCoverHospitalsVisible = false;
        this.currentEditHospitalId = null;
      });
    },
    deletePotentialDealersCoverHospitalsDelete(id) {
      this.dialogVisible = true;
      this.currentActionId = id;
    },
    deleteData() {
      this.$api.execobj({
        action: "PotentialDealersCoverHospitalsDelete",
        id: this.currentActionId,
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
      }).then((res) => {
        this.fetchPotentialDealersCoverHospitalsList();
      });
    },
    fetchPotentialDealersCoverHospitalsDetail(id) {
      this.$api.execobj({
        action: "PotentialDealersCoverHospitalsDetail",
        id: id,
        potentialdealersid: this.potentialDealersId,
      }).then((res) => {
        res.data = lowerJSONKey(res.data);
        this.form = res.data;
        this.form.department=this.form.department.split('/')
      });
    },
    fetchPotentialDealersCoverHospitalsList() {
      this.$api.execobj({
        action: "PotentialDealersCoverHospitalsList",
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        pageindex: this.meta.currPage,
        pagesize: this.meta.pageSize,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.hospitalsList = res.data.list;
        this.lastupdatetime = res.data.lastupdatetime;
        this.hospitalList_total = res.count;
      });
    },
    fetchDepartmentList() {
      this.$api.execobj({
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
    fetchHospitalList() {
      this.$api.execobj({
        action: "BaseList",
        type: "hospital",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.list.forEach((item) => {
          item = lowerJSONKey(item);
        });
        this.option["hospitalOption"] = res.data.list;
      });
    },
  },
  components: { Pagination, ConfirmActionDialog },
};
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 16px 0;
    &__title {
      > span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        padding-right: 26px;
      }
      > span:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
    &__query.create {
      position: absolute;
      right: 16px;
      top: 18px;
    }
  }
  &__main {
    padding: 16px;
  }
}

.add-source {
  .el-select {
    width: 30%;
  }
  .el-select > .el-input {
    width: 100%;
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
}
</style>