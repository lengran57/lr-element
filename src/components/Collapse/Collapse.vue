<template>
  <div class="lr-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'LrCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const modelValue = defineModel<NameType[]>({ type: Array, required: true })

const activeNames = ref<NameType[]>(modelValue.value ?? [])

function handleItemClick(item: NameType) {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    if (activeNames.value.includes(item)) {
      activeNames.value = activeNames.value.filter((name) => name !== item)
    } else {
      activeNames.value.push(item)
    }
  }
  modelValue.value = activeNames.value
  emits('change', activeNames.value)
}
watch(
  () => modelValue,
  () => {
    activeNames.value = modelValue.value
  }
)
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped lang="less"></style>
