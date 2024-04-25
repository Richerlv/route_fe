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
        <SiouxNetwork :mapInfo="toMapInfo"></SiouxNetwork>
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

const siouxfallsInfo = {
  "rootId": "1",
  "nodes": [
    {
      "id": "1",
      "text": "1",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "2",
      "text": "2",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "3",
      "text": "3",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "4",
      "text": "4",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "5",
      "text": "5",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "6",
      "text": "6",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "7",
      "text": "7",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "8",
      "text": "8",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "9",
      "text": "9",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "10",
      "text": "10",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "11",
      "text": "11",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "12",
      "text": "12",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "13",
      "text": "13",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "14",
      "text": "14",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "15",
      "text": "15",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "16",
      "text": "16",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "17",
      "text": "17",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "18",
      "text": "18",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "19",
      "text": "19",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "20",
      "text": "20",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "21",
      "text": "21",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "22",
      "text": "22",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "23",
      "text": "23",
      "color": "#43a2f1",
      "fontColor": "yellow"
    },
    {
      "id": "24",
      "text": "24",
      "color": "#43a2f1",
      "fontColor": "yellow"
    }
  ],
  "lines": [
    {
      "from": "1",
      "to": "2",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "1",
      "to": "3",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "2",
      "to": "1",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "2",
      "to": "6",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "3",
      "to": "1",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "3",
      "to": "4",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "3",
      "to": "12",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "4",
      "to": "3",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "4",
      "to": "5",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "4",
      "to": "11",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "5",
      "to": "4",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "5",
      "to": "6",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "5",
      "to": "9",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "6",
      "to": "2",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "6",
      "to": "5",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "6",
      "to": "8",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "7",
      "to": "8",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "7",
      "to": "18",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "8",
      "to": "6",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "8",
      "to": "7",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "8",
      "to": "9",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "8",
      "to": "16",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "9",
      "to": "5",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "9",
      "to": "8",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "9",
      "to": "10",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "10",
      "to": "9",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "10",
      "to": "11",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "10",
      "to": "15",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "10",
      "to": "16",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "10",
      "to": "17",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "11",
      "to": "4",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "11",
      "to": "10",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "11",
      "to": "12",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "11",
      "to": "14",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "12",
      "to": "3",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "12",
      "to": "11",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "12",
      "to": "13",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "13",
      "to": "12",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "13",
      "to": "24",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "14",
      "to": "11",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "14",
      "to": "15",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "14",
      "to": "23",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "15",
      "to": "10",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "15",
      "to": "14",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "15",
      "to": "19",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "15",
      "to": "22",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "16",
      "to": "8",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "16",
      "to": "10",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "16",
      "to": "17",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "16",
      "to": "18",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "17",
      "to": "10",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "17",
      "to": "16",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "17",
      "to": "19",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "18",
      "to": "7",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "18",
      "to": "16",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "18",
      "to": "20",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "19",
      "to": "15",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "19",
      "to": "17",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "19",
      "to": "20",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "20",
      "to": "18",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "20",
      "to": "19",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "20",
      "to": "21",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "20",
      "to": "22",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "21",
      "to": "20",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "21",
      "to": "22",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "21",
      "to": "24",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "22",
      "to": "15",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "22",
      "to": "20",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "22",
      "to": "21",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "22",
      "to": "23",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "23",
      "to": "14",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "23",
      "to": "22",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "23",
      "to": "24",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "24",
      "to": "13",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "24",
      "to": "21",
      "color": "#43a2f1",
      "text": null
    },
    {
      "from": "24",
      "to": "23",
      "color": "#43a2f1",
      "text": null
    }
  ]
}

const WeekInfo = {
  "rootId": "1",
  "nodes": [
    {
      "id": "1",
      "text": "1",
      "color": "#43a2f1",
      "fontColor": "yellow"
    }],
    "lines":[]
}

const activities = ref([])

var toMapInfo = ref(siouxfallsInfo)

const formInline = reactive({
  start: '',
  end: '',
  time: 40,
  zeta: 0.5
})

const toSiouxFalls = async () => {
  toMapInfo.value=siouxfallsInfo
}

const toWeekday = async () => {
  toMapInfo.value=WeekInfo
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