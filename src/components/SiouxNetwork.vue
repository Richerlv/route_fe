<template>
    <div>
        <div style="width: 800px; height: 800px;">
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
};

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