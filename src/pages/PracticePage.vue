<template>
  <div class="mx-12 my-12">
    <div>Do your prctice here</div>
    {{ name }}
    <CustomInput v-model="name" />
    <CustomInput v-model="x" />
    <CustomInput v-model="y" />
    {{ getSum }}
    <div ref="putsum"></div>
    <button class="p-2 bg-red-500" @click.once="say">say</button>
    <!-- <SlotTest v-slot="slotProps" text="This is prop from parent">
      {{ slotProps.text }}
    </SlotTest> -->
    <component :is="activeComponent" />

    <!-- <div>Mouse position is at: {{ xaxis }}, {{ yaxis }}</div> -->
    <button
      @click="activateComponent(SlotTest)"
      class="p-2 bg-green-200 rounded mx-4"
    >
      Show Component SlotTest
    </button>
    <button
      @click="activateComponent(DeepChild)"
      class="p-2 bg-green-200 rounded mx-4"
    >
      Show Component DeepChild
    </button>
  </div>
</template>
<script setup>
import CustomInput from "src/components/CustomInput.vue";
import SlotTest from "src/components/SlotTest.vue";
import DeepChild from "src/components/DeepChild.vue";
import { useMouse } from "src/composable/mouse";
import { ref, watch, onMounted, provide } from "vue";
const { xaxis, yaxis } = useMouse();
const name = ref("");
const activeComponent = ref(DeepChild);
const x = ref(0);
const y = ref(0);
const getSum = ref(0);
const putsum = ref(null);
const text = ref("This ref attribute text which is putting ref attribute");
// provide(/* key */ "message", /* value */ "hello this is provided funtion!");
const location = ref("North Pole");
const activateComponent = (componentName) => {
  activeComponent.value = componentName;
};
const updateLocation = () => {
  location.value = "South Pole";
};
provide("location", {
  location,
  updateLocation,
});
const say = () => {
  alert("I am Clicked");
};
watch(
  () => Number(x.value) + Number(y.value),
  (sum) => {
    getSum.value = `sum of x and y is ${sum}`;
  }
);
onMounted(() => {
  putsum.value.innerText = text.value;
});
</script>
