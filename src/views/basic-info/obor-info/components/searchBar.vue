<template>
  <div class="potential-distributor__search">
    <el-select
      clearable
      class="mr-15"
      v-model="search.coverprovince"
      placeholder="覆盖省份"
      @change="changeProvince"
    >
      <el-option
        v-for="item in option.province"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15"
      v-model="search.deparment"
      placeholder="重点科室"
    >
      <el-option
        v-for="item in option.department"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15"
      v-model="search.brand"
      placeholder="重点品牌"
    >
      <el-option
        v-for="item in option.Bu"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-button type="primary" @click="onSearch"
      >检索</el-button
    >
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      search: {
      },
      option: {
        department: [],
        brand: [],
        Bu: [],
        businesstype: [
          {
            Id: "地市经销商",
            Name: "地市经销商",
          },
          {
            Id: "区域集团型经销商",
            Name: "区域集团型经销商",
          },
          {
            Id: "省级经销商",
            Name: "省级经销商",
          },
        ],
        equipmentbusiness: [
          {
            Id: "是",
            Name: "是",
          },
          {
            Id: "否",
            Name: "否",
          },
        ],
        visitRecord: [],
        province: [],
      },
    };
  },
  created() {
    this.baseList("BaseList", "department");
    this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("DownList", "province");
    this.baseList("ManagerNameList", "visitRecord");
  },
  methods: {
    changeProvince(val) {
        this.$set(this.search,'covercity','')

      let province = this.option.province.filter((v) => v.Name == val);
      if (province.length>0) this.baseList("DownList", "city", province[0].Id);
    },
    baseList(action, type, parentid) {
      let list = {
        action: action,
        type: type,
        pageindex: 1,
        pagesize: 10000,
      };
      if (parentid) list.parentid = parentid;
      this.$api.execobj(list).then((res) => {
        this.$set(this.option,type,res.data.list || res.data)
        // this.option[type] = res.data.list || res.data;
      });
    },
    onSearch() {
      this.$emit("onSearch", this.search);
    },
  },
};
</script>
