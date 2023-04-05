<template>
  <Line :data="salaryData" />
</template>


<script setup>
const props = defineProps({
  salaryData: {
    type: Object,
    required: true,
  }
});

console.log(props.salaryData)
</script>


<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export default {
  components: { Line },
}
</script>