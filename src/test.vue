<template>
    <div id="MapView">
        <!-- <h1><Map>MapView</Map></h1> -->
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
        <el-steps style="max-width: 600px" :active="2" align-center>
            <el-step title="Step 1" description="Some description" />
            <el-step title="Step 2" description="Some description" />
            <el-step title="Step 3" description="Some description" />
        </el-steps>
        <el-timeline style="max-width: 60px">
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

</style>