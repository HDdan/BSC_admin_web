<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title">
        <span>共6条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="business-info__header__query">
        <el-button type="primary" @click="addBusinessType">+推送记录</el-button>
      </div>
    </div>
    <div class="business-info__main">
      <el-table
      :data="tableData.list"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="推送时间"></el-table-column>
        <el-table-column prop="businessType" label="专员名称"></el-table-column>
        <el-table-column prop="businessRegion" label="意向来源"></el-table-column>
        <el-table-column prop="businessRegion" label="意向BU"></el-table-column>
        <el-table-column prop="businessRegion" label="意向subbu"></el-table-column>
        <el-table-column prop="businessRegion" label="沟通临床"></el-table-column>
        <el-table-column prop="businessRegion" label="进院议价"></el-table-column>
        <el-table-column prop="businessRegion" label="落地达成"></el-table-column>
        <el-table-column prop="businessRegion" label="落地时间"></el-table-column>
      </el-table>
      <div class="add-source ml-20 mr-20 mt-24">
        <el-date-picker
          class="mt-34 ml-24"
          v-model="searchInput"
          placeholder="推送时间"
          type="date">
        </el-date-picker>
        <el-select class="mt-34 ml-24" v-model="city" placeholder="意向来源">
          <el-option v-for="item in roleOptions" :key="item.Id" :value="item.Name">
          </el-option>
        </el-select>
        <el-select class="mt-34 ml-24" v-model="city" placeholder="意向BU">
          <el-option v-for="item in roleOptions" :key="item.Id" :value="item.Name">
          </el-option>
        </el-select>
        <el-select class="mt-34 ml-24" v-model="city" placeholder="意向subbu">
          <el-option v-for="item in roleOptions" :key="item.Id" :value="item.Name">
          </el-option>
        </el-select>
        <el-date-picker
          class="mt-10 ml-24" 
          v-model="searchInput"
          placeholder="沟通临床"
          type="date">
        </el-date-picker>
        <el-date-picker
          class="mt-10 ml-24" 
          v-model="searchInput"
          placeholder="进院议价"
          type="date">
        </el-date-picker>
        <el-select class="mt-34 ml-24" v-model="city" placeholder="落地达成">
          <el-option v-for="item in roleOptions" :key="item.Id" :value="item.Name">
          </el-option>
        </el-select>
        <el-date-picker
          class="mt-10 ml-24" 
          v-model="searchInput"
          placeholder="落地时间"
          type="date">
        </el-date-picker>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="add">添加</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </div>
      <pagination v-if="tableData.meta && tableData.meta.totalNum>0" :total="tableData.meta.totalNum" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagination from '../../../../components/Pagination'
export default {
  data() {
    return {
      tableData: {
        list: [{
          id: 1,
          name: 'ddd',
          businessType: 'jijii',
          businessRegion: 'fssss'
        }],
        meta: {}
      }
    }
  },
  methods: {
    addBusinessType() {

    },
    handlePagination() {
      
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
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 30%;
  }
}
</style>