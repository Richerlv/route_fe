<template>
    <div id="MapView" class="map-view-container">
        <SiouxNetwork :data="nodes"></SiouxNetwork>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="start">
          <el-input v-model="formInline.start" placeholder="start" clearable />
        </el-form-item>
        <el-form-item label="end">
          <el-input v-model="formInline.end" placeholder="end" clearable />
        </el-form-item>
        <!-- <el-form-item label="time_budget">
          <el-input v-model="formInline.time_budget" placeholder="time_budget" clearable />
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
      <h3>推荐路线</h3>
      <el-timeline style="max-width: 600px" direction="horizontal">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import axios from 'axios'
  import { ref } from 'vue'
  import SiouxNetwork from '@/components/SiouxNetwork.vue';

  const nodes = [
    {
        "from": "1",
        "to": "2"
    },
    {
        "from": "1",
        "to": "3"
    },
    {
        "from": "2",
        "to": "1"
    },
    {
        "from": "2",
        "to": "6"
    },
    {
        "from": "3",
        "to": "1"
    },
    {
        "from": "3",
        "to": "4"
    },
    {
        "from": "3",
        "to": "12"
    },
    {
        "from": "4",
        "to": "3"
    },
    {
        "from": "4",
        "to": "5"
    },
    {
        "from": "4",
        "to": "11"
    },
    {
        "from": "5",
        "to": "4"
    },
    {
        "from": "5",
        "to": "6"
    },
    {
        "from": "5",
        "to": "9"
    },
    {
        "from": "6",
        "to": "2"
    },
    {
        "from": "6",
        "to": "5"
    },
    {
        "from": "6",
        "to": "8"
    },
    {
        "from": "7",
        "to": "8"
    },
    {
        "from": "7",
        "to": "18"
    },
    {
        "from": "8",
        "to": "6"
    },
    {
        "from": "8",
        "to": "7"
    },
    {
        "from": "8",
        "to": "9"
    },
    {
        "from": "8",
        "to": "16"
    },
    {
        "from": "9",
        "to": "5"
    },
    {
        "from": "9",
        "to": "8"
    },
    {
        "from": "9",
        "to": "10"
    },
    {
        "from": "10",
        "to": "9"
    },
    {
        "from": "10",
        "to": "11"
    },
    {
        "from": "10",
        "to": "15"
    },
    {
        "from": "10",
        "to": "16"
    },
    {
        "from": "10",
        "to": "17"
    },
    {
        "from": "11",
        "to": "4"
    },
    {
        "from": "11",
        "to": "10"
    },
    {
        "from": "11",
        "to": "12"
    },
    {
        "from": "11",
        "to": "14"
    },
    {
        "from": "12",
        "to": "3"
    },
    {
        "from": "12",
        "to": "11"
    },
    {
        "from": "12",
        "to": "13"
    },
    {
        "from": "13",
        "to": "12"
    },
    {
        "from": "13",
        "to": "24"
    },
    {
        "from": "14",
        "to": "11"
    },
    {
        "from": "14",
        "to": "15"
    },
    {
        "from": "14",
        "to": "23"
    },
    {
        "from": "15",
        "to": "10"
    },
    {
        "from": "15",
        "to": "14"
    },
    {
        "from": "15",
        "to": "19"
    },
    {
        "from": "15",
        "to": "22"
    },
    {
        "from": "16",
        "to": "8"
    },
    {
        "from": "16",
        "to": "10"
    },
    {
        "from": "16",
        "to": "17"
    },
    {
        "from": "16",
        "to": "18"
    },
    {
        "from": "17",
        "to": "10"
    },
    {
        "from": "17",
        "to": "16"
    },
    {
        "from": "17",
        "to": "19"
    },
    {
        "from": "18",
        "to": "7"
    },
    {
        "from": "18",
        "to": "16"
    },
    {
        "from": "18",
        "to": "20"
    },
    {
        "from": "19",
        "to": "15"
    },
    {
        "from": "19",
        "to": "17"
    },
    {
        "from": "19",
        "to": "20"
    },
    {
        "from": "20",
        "to": "18"
    },
    {
        "from": "20",
        "to": "19"
    },
    {
        "from": "20",
        "to": "21"
    },
    {
        "from": "20",
        "to": "22"
    },
    {
        "from": "21",
        "to": "20"
    },
    {
        "from": "21",
        "to": "22"
    },
    {
        "from": "21",
        "to": "24"
    },
    {
        "from": "22",
        "to": "15"
    },
    {
        "from": "22",
        "to": "20"
    },
    {
        "from": "22",
        "to": "21"
    },
    {
        "from": "22",
        "to": "23"
    },
    {
        "from": "23",
        "to": "14"
    },
    {
        "from": "23",
        "to": "22"
    },
    {
        "from": "23",
        "to": "24"
    },
    {
        "from": "24",
        "to": "13"
    },
    {
        "from": "24",
        "to": "21"
    },
    {
        "from": "24",
        "to": "23"
    }
]

  const activities = ref([])
  
  const formInline = reactive({
    start: '',
    end: '',
    time_budget: 40
  })
  
  const onSubmit = async () => {
    try {
      // 发送POST请求
      const response = await axios.post('http://127.0.0.1:8888/gpg', formInline)
      console.log('POST请求成功:', response.data)
  
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
  </script>
  
  <style>
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
  </style>