<template>
  <div class="slidev-layout default">
    <slot />
    <div
      v-if="$slots.note"
      class="absolute bottom-0 left-0 right-0 px-10 pb-6 pt-3 border-t border-gray-700/50"
    >
      <slot name="note" />
    </div>
  </div>
</template>
