<template>
  <i class="lr-icon" :class="{ [`lr-icon--${type}`]: type }" :style="customStyle" v-bind="$attrs">
    <font-awesome-icon v-bind="filterredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'LrIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
const filterredProps = computed(() => omit(props, 'type', 'color'))

const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
