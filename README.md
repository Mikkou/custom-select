# custom-select
study nuxt module

#Quick start

```npm i @mrmikkou/custom-select```

###nuxt.config.js

```
modules: [
    '@mrmikkou/custom-select'
]
```

vue component example (with TailwindCSS):
```
<template>
  <div>
    <span>{{ selected }}</span>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <custom-select
        :items="items"
        v-model="selected"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: {},
      text: {},
      items: [
        { text: 'test1', value: 'val1' },
        { text: 'test2', value: 'val2' },
        { text: 'test3', value: 'val3' },
        { text: 'test4', value: 'val4' },
        { text: 'test5', value: 'val5' },
        { text: 'test6', value: 'val6' },
        { text: 'test7', value: 'val7' },
        { text: 'test8', value: 'val8' },
        { text: 'test9', value: 'val9' }
      ]
    }
  }
}
</script>
```
