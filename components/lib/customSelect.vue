<template lang="html">
  <div class="m-select">

    <div
      @click="list = !list"
      class="m-select__title py-2 px-2"
    >{{ value.text || '' }}
    </div>
    <transition name="fade">
      <div
        class="m-select__list"
        v-if="list"
      >
        <ul>
          <li
            :key="item.value"
            class="m-select__item px-2 py-2"
            v-for="item in items"
            @click="choose(item)"
          >{{ item.text }}
          </li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: false
    }
  },
  props: ['items', 'value'],
  methods: {
    choose (item) {
      this.$emit('input', item)
      this.list = false
    }
  },
  computed: {
    pluginOptions() {
      return this._customSelectOptions || {}
    },
    injectedPluginName() {
      const { pluginOptions } = this
      return pluginOptions.namespace ? '$' + pluginOptions.namespace : undefined
    },
    count() {
      const { injectedPluginName } = this
      return injectedPluginName
        ? this[injectedPluginName].value()
        : undefined
    }
  }
}
</script>

<style>
  .m-select__title {
    background: #dedede;
    height: 40px;
    border: 1px solid black;
    border-radius: 3px;
  }

  .m-select__title:hover {
    cursor: pointer;
    background: #888888;
  }

  .m-select__list {
    background: #dedede;
    border: 1px solid black;
    max-height: 50vh;
    overflow: auto;
  }

  .m-select__item:hover {
    background: #aaaaaa;
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
