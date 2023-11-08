<template>
  <div class="floating-label border-2w-full">
    <div class="relative">
      <input
        :type="type"
        :name="label"
        :class="[
          'py-[10px] px-[10px] focus:outline-none focus:border-blue-500 placeholder:opacity-0 w-full border-b-[1px] border-gray-500',
          bordered && 'border-[1px]'
        ]"
        placeholder=" "
        ref="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label
        class="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 transition-transform cursor-text"
        @click="showInput()"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref(null);

const showInput = () => {
  input.value.focus();
};

defineProps({
  type: String,
  bordered: Boolean,
  label: String,
  modelValue: String
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.floating-label label {
  transition: transform 0.2s ease, font-size 0.2s ease, top 0.2s ease;
}

.floating-label input:focus + label,
.floating-label input:not(:placeholder-shown) + label {
  transform: translateY(-1rem);
  font-size: 0.75rem;
  top: 0.5rem;
  @apply text-blue-500 bg-white px-[2px];
}
</style>
