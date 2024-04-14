<template>
    <div>
        <div style="width: 600px; height: 400px;">
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
    methods: {
        showGraph() {
            const jsonData = {
                rootId: 'a',
                nodes: [
                    { id: '1', text: '1', color: '#43a2f1', fontColor: 'yellow' },
                    { id: '2', text: '2', color: '#43a2f1', fontColor: 'yellow' },
                    { id: '3', text: '3', color: '#43a2f1', fontColor: 'yellow' },
                    { id: '4', text: '4', color: '#43a2f1', fontColor: 'yellow' },
                ],
                lines: [
                    { from: '1', to: '2', text: 'line1', color: '#43a2f1' },
                    { from: '2', to: '3', text: 'line1', color: '#43a2f1' },
                    { from: '1', to: '3', text: 'line1', color: '#43a2f1' },
                    { from: '2', to: '4', text: 'line1', color: '#43a2f1' },
                    { from: '1', to: '4', text: 'line1', color: '#43a2f1' }
                ]
            };

            this.$refs.graphRef.setJsonData(jsonData, (graphInstance) => {
                // 当关系图完成后执行的回调函数
            });
        },
        onNodeClick(nodeObject, $event) {
            console.log('onNodeClick:', nodeObject);
        },
        onLineClick(lineObject, $event) {
            console.log('onLineClick:', lineObject);
        }
    }
};
</script>