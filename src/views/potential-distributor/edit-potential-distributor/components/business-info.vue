<template>
  <div class="business-info">
    <div class="business-info__header" >
      <div class="business-info__header__title" v-if="$route.query.Id">
        <span>共{{regionList_total}}条</span>
        <span>最近更新时间：{{ lastupdatetime }}</span>
      </div>
      <div class="business-info__header__query" :class="{'create': !$route.query.Id}">
        <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary" @click="addBusinessType">业务区域</el-button>
      </div>
    </div>
    <div class="business-info__main">
      <el-table
        :empty-text="emptyText"
        :data="regionList"
        style="width: 100%"
      >
        <el-table-column prop="id" label="序号" width="150"></el-table-column>
        <el-table-column prop="province" label="业务省份" width="150"></el-table-column>
        <el-table-column prop="city" label="业务城市" width="150"></el-table-column>
        <el-table-column prop="iscounty" label="是/否县级区域"></el-table-column>
        <el-table-column prop="bscsalesnum" label="可以用作波科销售的业务人数"></el-table-column>
        <el-table-column prop="businessRegion" label="操作">
          <template slot-scope="scope">
          <span style="display: flex">
            <div class="mr-15" style="color: #4196ff; cursor: pointer" @click="openAddRegion(scope.row)"
            >修改</div>
            <p>|</p>
            <div class="ml-15" style="color: #4196ff; cursor: pointer" @click="delRegion(scope.row)"
            >删除</div>
          </span>
        </template>
        </el-table-column>
      </el-table>
      <div v-if="addRegionVisible" class="add-source ml-20 mr-20 mt-24">
        <el-select class="mt-34 ml-24" clearable v-model="form.province" placeholder="业务省份" filterable @change="fetchCity">
          <el-option v-for="item in option.provinceOptions" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
        <el-select class="mt-34 ml-24" clearable v-model="form.city" placeholder="业务城市" filterable>
          <el-option v-for="item in option.cityOptions" :key="item.id" :value="item.name">
          </el-option>
        </el-select>
        <el-select class="mt-34 ml-24" clearable v-model="form.iscounty" placeholder="是/否县级区域">
          <el-option v-for="item in option.isCountyOptions" :key="item.value" :value="item.value">
          </el-option>
        </el-select>
        <el-input class="mt-10 ml-24" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="可以用作波科销售的业务人数" v-model="form.bscsalesnum" style="width: 30%"></el-input>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="editPotentialDealersRegions">添加</el-button>
          <el-button @click="cancelRegion">取消</el-button>
        </div>
      </div>
      <pagination v-if="regionList_total>0" :total="regionList_total" :page.sync="meta.currPage" :limit.sync="meta.pageSize" @pagination="handlePagination" />
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
      emptyText:'',
      lastupdatetime:'',
      addRegionVisible: false,
      currentEditRegionId: null,
      regionList: null,
      meta: {
        currPage: 1,
        pageSize: 2
      },
      regionList_total: 0,
      option: {
        provinceOptions: null,
        cityOptions: null,
        isCountyOptions: [{
          value: '否',
        },{
          value: '是',
        }]
      },
      form: {}
    }
  },
  created() {
    this.fetchProvince();
    this.$route.query.Id&&this.fetchPotentialDealersRegionsList();
  },
  methods: {
    addBusinessType() {
       if(!this.potentialDealersId){
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
        return
      }
      this.emptyText=' '
      this.addRegionVisible = true;
      this.form = {};
    },
    cancelRegion() {
      if(!this.regionList||this.regionList.length==0)this.emptyText='暂无数据'
      this.addRegionVisible = false;
    },
    openAddRegion(row) {
      this.addRegionVisible = true;
      this.currentEditRegionId = row.id;
      this.fetchPotentialDealersRegionsDetail(row.id);
    },
    delRegion(row) {
      this.currentEditRegionId = row.id
      if(this.regionList.length==1 && this.meta.currPage>0)this.meta.currPage--
      this.deletePotentialDealersRegion(row.id);
    },
    handlePagination() {
      this.fetchPotentialDealersRegionsList();
    },
    editPotentialDealersRegions() {
      if (this.form.city && this.form.province) {
        this.$api.execobj({
          action: "PotentialDealersRegionsEdit",
          id: this.currentEditRegionId ? this.currentEditRegionId : 0,
          potentialdealersid:this.$route.query.Id|| this.potentialDealersId,
          provice: this.form.province,
          city: this.form.city,
          iscounty: this.form.iscounty,
          bscsalesnum: this.form.bscsalesnum,
        }).then(() => {
          this.fetchPotentialDealersRegionsList();
          this.addRegionVisible = false;
          this.currentEditRegionId = null;
        });
      } else if (this.form.province) {
        this.$message.error('请选择业务城市');
      } else {
        this.$message.error('请选择业务省份');
      }
    },
    deletePotentialDealersRegion(id) {
      this.$api.execobj({
        action: "PotentialDealersRegionsDelete",
        id: id,
        potentialdealersid:this.$route.query.Id|| this.potentialDealersId,
      }).then(res => {
        this.fetchPotentialDealersRegionsList();
      });
    },
    fetchPotentialDealersRegionsDetail(id) {
      this.$api.execobj({
        action: "PotentialDealersRegionsDetail",
        id: id,
        potentialdealersid:this.$route.query.Id|| this.potentialDealersId,
      }).then(res => {
        res.data = lowerJSONKey(res.data);
        this.form = res.data;
      });
    },
    fetchPotentialDealersRegionsList() {
      this.$api.execobj({
        action: "PotentialDealersRegionsList",
        potentialdealersid:this.$route.query.Id|| this.potentialDealersId,
        pageindex: this.meta.currPage,
        pagesize: this.meta.pageSize
      }).then(res => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        });
        this.regionList = res.data.list;
        this.lastupdatetime = res.data.lastupdatetime;
        this.regionList_total = res.count;
      });
    },
    fetchProvince() {
      this.$api.execobj({
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
      this.$set(this.form,"city", '');
      this.$api.execobj({
        action: "DownList",
        type: 'city',
        parentid: currentProvinceId
      }).then((res) => {
        res.data.forEach(item => {
          item = lowerJSONKey(item);
        });
        res.data.unshift({ name: '全省', id: '全省' });
        this.option['cityOptions'] = res.data;
      });
    }
  },
  components: { Pagination }
}
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 16px 0;
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
    &__query.create {
      position: absolute;
      right: 16px;
      top: 18px;
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
}
</style>