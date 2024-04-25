<template>
  <div class="container">
    <div class="map-container">
      <div id="MapView" class="map-view-container">
        <el-dropdown>
          <span class="el-dropdown-link">
            Select Map
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="toSiouxFalls">SiouxFalls</el-dropdown-item>
              <el-dropdown-item @click="toWeekday">weekday_peak_network</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <SiouxNetwork :data="nodes"></SiouxNetwork>
      </div>
    </div>
    <div class="info-container">
      <h1>ROUTE SYSTEM</h1>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="start" :rules="[{ required: true }]">
          <el-input v-model="formInline.start" placeholder="start" clearable />
        </el-form-item>
        <el-form-item label="end" :rules="[{ required: true }]">
          <el-input v-model="formInline.end" placeholder="end" clearable />
        </el-form-item>
        <!-- <el-form-item label="time_budget">
            <el-input v-model="formInline.time_budget" placeholder="time_budget" clearable />
          </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="showSegacDialog">Segac Query</el-button>
        </el-form-item>
        <el-form-item>
          <el-button plain @click="showCtdDialog">Ctd Query</el-button>
        </el-form-item>
      </el-form>
      <h3>推荐路线</h3>
      <el-timeline style="max-width: 600px" direction="horizontal">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
          :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
          :timestamp="activity.timestamp">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { ref } from 'vue'
import SiouxNetwork from '@/components/SiouxNetwork.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const activities = ref([])

const formInline = reactive({
  start: '',
  end: '',
  time: 40,
  zeta: 0.5
})

const toSiouxFalls = async () => {
  alert("toSiouxFalls")
}

const toWeekday = async () => {
  alert("toWeekday")
}

const segac = async () => {
  try {
    // 发送POST请求
    const response = await axios.post('http://127.0.0.1:8888/gpg', formInline)
    console.log('segac POST请求成功:', response.data)

    // 更新 activities 数组
    activities.value = response.data.map(item => ({
      content: item.toString(),
      color: '#0bbd87'
    }))
    console.log('activities:', activities)
  } catch (error) {
    console.error('POST请求失败:', error)
  }
}

const ctd = async () => {
  try {
    // 发送POST请求
    const response = await axios.post('http://127.0.0.1:8888/ctd', formInline)
    console.log('ctd POST请求成功:', response.data)

    // 更新 activities 数组
    activities.value = response.data.map(item => ({
      content: item.toString(),
      color: '#0bbd87'
    }))
    console.log('ctd activities:', activities)
  } catch (error) {
    console.error('ctd POST请求失败:', error)
  }
}

const showSegacDialog = () => {
  ElMessageBox.prompt('Please input your time budget', 'SEGAC', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /^([1-9]\d*(\.\d+)?|1(\.0+)?)$/,
    inputErrorMessage: 'time budget should be more than 0',
  })
    .then(({ value }) => {
      formInline.time = value
      segac();
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}

const showCtdDialog = () => {
  ElMessageBox.prompt('Please input your ζ', 'CTD', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /^(0(\.\d+)?|1(\.0+)?)$/,
    inputErrorMessage: 'ζ should be less than 1 and more than 0',
  })
    .then(({ value }) => {
      formInline.zeta = value
      ctd();
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.map-container {
  flex: 1;
}

.info-container {
  flex: 1;
  margin-left: 20px;
  /* Adjust as needed */
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.map-view-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>