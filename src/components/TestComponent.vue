“// TestComponent.vue
<template>
  <div>
    <child :testProp="testProp"/>
    <div>
      <a :href="url">Link</a>
    </div>
    <p style="color: red">Paragrapj</p>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: { Child },
  props: {
    testProp: {
      type: Number,
      default: 0
    },
    url: {
      String,
      default: 'not url'
    }
  }
}
</script>
