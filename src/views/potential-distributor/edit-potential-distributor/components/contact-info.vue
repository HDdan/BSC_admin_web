<template>
  <div class="contact-info">
    <div class="contact-info__header">
      <div class="contact-info__header__title">
        <span>共{{ personsList_total }}条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="contact-info__header__query">
        <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary" @click="addContactor">联系人</el-button>
      </div>
    </div>
    <div class="contact-info__main">
      <el-table
      :data="personsList"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="position" label="职位"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="fixedphone" label="座机"></el-table-column>
        <el-table-column prop="address" label="联系地址"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="businessRegion" label="操作">
          <template slot-scope="scope">
            <span style="display: flex">
              <div class="mr-15" style="color: #4196ff; cursor: pointer" @click="openEditContactor(scope.row)"
              >修改</div>
              <p>|</p>
              <div class="ml-15" style="color: #4196ff; cursor: pointer" @click="delContactor(scope.row)"
              >删除</div>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="addPersonVisible" class="add-source mt-24">
        <el-input class="mt-34 ml-24" placeholder="姓名" v-model="form.name" style="width: 30%"></el-input>
        <el-input class="mt-34 ml-24" placeholder="职位" v-model="form.position" style="width: 30%"></el-input>
        <el-select class="mt-34 ml-24" v-model="form.gender" placeholder="性别">
          <el-option v-for="item in option.sexOptions" :key="item.value" :value="item.value">
          </el-option>
        </el-select>
        <el-input class="mt-10 ml-24" placeholder="手机号" v-model="form.phone" style="width: 30%"></el-input>
        <el-input class="mt-10 ml-24" placeholder="座机号" v-model="form.fixedphone" style="width: 30%"></el-input>
        <el-select class="mt-10 ml-24" v-model="form.province" placeholder="省份" @change="fetchCity">
          <el-option v-for="item in option.provinceOptions" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
        <el-select class="mt-10 ml-24" v-model="form.city" placeholder="城市">
          <el-option v-for="item in option.cityOptions" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
        <el-input class="mt-10 ml-24" placeholder="详细地址" v-model="form.address" style="width: 30%"></el-input>
        <el-input class="mt-10 ml-24" type="textarea" placeholder="可以在此备注……" v-model="form.remark"></el-input>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="editPotentialDealersPersonsEdit">添加</el-button>
          <el-button @click="cancelPerson">取消</el-button>
        </div>
      </div>
      <pagination v-if="personsList_total>0" :total="personsList_total" :page.sync="meta.currPage" :limit.sync="meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagination from '../../../../components/Pagination';
import { lowerJSONKey } from '../../../../utils/index';

export default {
  props: {
    potentialDealersId: {
      type: Number|String,
    },
  },
  data() {
    return {
      addPersonVisible: false,
      currentEditPersonId: null,
      personsList: null,
      meta: {
        currPage: 1,
        pageSize: 2
      },
      personsList_total: 0,
      option: {
        provinceOptions: null,
        cityOptions: null,
        sexOptions: [{
          value: '男',
        },{
          value: '女',
        }]
      },
      form: {}
    }
  },
  created() {
    this.fetchProvince();
    this.$route.query.Id&&this.fetchPotentialDealersPersonsList();
  },
  methods: {
    addContactor() {
      if (!this.potentialDealersId) {
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
        return;
      }
      this.addPersonVisible = true;
      this.form = {};
    },
    cancelPerson() {
      this.addPersonVisible = false;
    },
    openEditContactor(row) {
      this.addPersonVisible = true;
      this.currentEditPersonId = row.id;
      this.fetchPotentialDealersPersonsDetail(row.id);
    },
    delContactor(row) {
      this.currentEditPersonId = row.id;
      this.deletePotentialDealersPersonsDelete(row.id);
    },
    handlePagination() {
      this.fetchPotentialDealersPersonsList();
    },
    editPotentialDealersPersonsEdit() {
      this.$api({
        action: "PotentialDealersPersonsEdit",
        id: this.currentEditPersonId ? this.currentEditPersonId : 0,
        potentialdealersid: this.$route.query.Id||this.potentialDealersId,
        province: this.form.province,
        position: this.form.position,
        city: this.form.city,
        name: this.form.name,
        gender: this.form.gender,
        phone: this.form.phone,
        fixedPhone: this.form.fixedphone,
        address: this.form.address,
        remark: this.form.remark
      }).then(() => {
        this.fetchPotentialDealersPersonsList();
        this.addPersonVisible = false;
        this.currentEditPersonId = null;
      });
    },
    deletePotentialDealersPersonsDelete(id) {
      this.$api({
        action: "PotentialDealersPersonsDelete",
        id: id,
        potentialdealersid:this.$route.query.Id||this.potentialDealersId,
      }).then(res => {
        this.fetchPotentialDealersPersonsList();
      });
    },
    fetchPotentialDealersPersonsDetail(id) {
      this.$api({
        action: "PotentialDealersPersonsDetail",
        id: id,
        potentialdealersid: this.$route.query.Id||this.potentialDealersId,
      }).then(res => {
        res.data = lowerJSONKey(res.data);
        this.form = res.data;
      });
    },
    fetchPotentialDealersPersonsList() {
      this.$api({
        action: "PotentialDealersPersonsList",
        potentialdealersid:this.$route.query.Id||this.potentialDealersId,
        pageindex: this.meta.currPage,
        pagesize: this.meta.pageSize
      }).then(res => {
        res.data.forEach(item => {
          item = lowerJSONKey(item);
        });
        this.personsList = res.data;
        this.personsList_total = res.count;
      });
    },
    fetchProvince() {
      this.$api({
        action: "DownList",
        type: 'province',
        parentid: 0,
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        res.data.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['provinceOptions'] = res.data;
      });
    },
    fetchCity(value) {
      const currentProvince = this.option['provinceOptions'].filter(item => item.name === value);
      const currentProvinceId = currentProvince.length > 0 ? currentProvince[0].id : 0;
      this.$api({
        action: "DownList",
        type: 'city',
        parentid: currentProvinceId
      }).then((res) => {
        res.data.forEach(item => {
          item = lowerJSONKey(item);
        })
        this.option['cityOptions'] = res.data;
      });
    }
  },
  components: { Pagination }
}
</script>
<style lang="scss">
.contact-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 38px 16px 0;
    &__title {
      >span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        padding-right: 26px;
      }
      >span:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
  }
  &__main {
    padding:16px;
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
  .el-textarea {
    width: 95%;
  }
}
</style>