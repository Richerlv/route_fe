<template>
    <div>
        <div style="width: 800px; height: 600px;">
            <RelationGraph ref="graphRef" :options="graphOptions" :on-node-click="onNodeClick"
                :on-line-click="onLineClick" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import RelationGraph from 'relation-graph/vue3';

export default {
    name: 'SiouxNetwork',
    components: { RelationGraph },
    props: {
    // 在 props 中声明 mapInfo
    mapInfo: {
      type: Object, // 声明 mapInfo 的类型为对象
      default: () => ({
        "root":"1",
        "nodes":[],
        "lines":[]
      }) // 设置默认值为空对象，这样在父组件不传递 mapInfo 时也不会报错
    }
  },
    data() {
        return {
            graphOptions: {
                defaultJunctionPoint: 'border',
                // 这里你可以设置图表的选项，具体参考官方文档
                // https://www.relation-graph.com/#/docs/graph
            }
        };
    },
    mounted() {
        this.showGraph();
    },
    watch: {
        // 监听 mapInfo 的变化
        mapInfo: {
            handler() {
                // 可以在这里调用重新加载图表的方法
                this.showGraph();
            },
            deep: true // 深度监听 mapInfo 对象内部值的变化
        }
    },
    methods: {
        showGraph() {
            const jsonData = this.mapInfo;
            this.$refs.graphRef.setJsonData(jsonData, (graphInstance) => {
                // 当关系图完成后执行的回调函数
            });
        },
        // onNodeClick(nodeObject, $event) {
        //     console.log('onNodeClick:', nodeObject);
        // },
        // onLineClick(lineObject, $event) {
        //     console.log('onLineClick:', lineObject);
        // }
    }
};
</script>