<template>
<md-menu md-align-trigger style="width: 100%;">
  <md-field class="md-chips" :class="[$mdActiveTheme, chipsClasses]">
    <slot />

    <md-chip
      class="md-primary"
      v-for="(chip, key) in value"
      :key="chip"
      :md-deletable="!mdStatic"
      :md-clickable="!mdStatic"
      :md-duplicated="duplicatedChip === chip"
      @keydown.enter="$emit('md-click', chip, key)"
      @click.native="$emit('md-click', chip, key)"
      @md-delete.stop="removeChip(chip)">
      <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">{{chip}}</slot>
      <template v-else>{{chip}}</template>
    </md-chip>

    <md-input
      ref="input"
      v-model.trim="inputValue"
      v-if="!mdStatic && modelRespectLimit"
      :type="mdInputType"
      :id="id"
      :placeholder="mdPlaceholder"
      @input="handleInput"
      @keydown.enter="insertChip"
      @keydown.8="handleBackRemove"
      md-menu-trigger>
    </md-input>
    <span class="md-helper-text">{{mdHelper}}</span>
  </md-field>

  <md-menu-content v-if="mdSelections">
    <md-menu-item
      v-for="(selection) in mdSelections"
      :key="selection.name"
      @click="select(selection.value)"
      v-if="inputValue && selection.name.indexOf(inputValue) >= 0 && !value.includes(selection.value)">
      {{selection.name}}
    </md-menu-item>
  </md-menu-content>
</md-menu>
</template>

<script>
import MdComponent from './MdComponent.js'
import uuid from 'uuid'
export default new MdComponent({
  name: 'bdsMdChips',
  props: {
    value: Array,
    id: {
      type: [String, Number],
      default: () => 'bds-md-chips-' + uuid.v4()
    },
    mdHelper: {
      type: String,
      default: null
    },
    mdInputType: {
      type: [String, Number],
      default: 'text'
    },
    mdPlaceholder: [String, Number],
    mdStatic: Boolean,
    mdLimit: Number,
    mdCheckDuplicated: {
      type: Boolean,
      default: false
    },
    mdFormat: {
      type: Function
    },
    mdSelections: {
      default: null
    }
  },
  data: () => ({
    inputValue: '',
    duplicatedChip: null
  }),
  computed: {
    chipsClasses () {
      return {
        'md-has-value': this.value && this.value.length
      }
    },
    modelRespectLimit () {
      return !this.mdLimit || this.value.length < this.mdLimit
    },
    formattedInputValue () {
      if (!this.mdFormat) {
        return this.inputValue
      }
      return this.mdFormat(this.inputValue)
    }
  },
  methods: {
    insertChip ({target}) {
      let inputValue = this.formattedInputValue

      if (!inputValue || !this.modelRespectLimit) {
        return
      }

      if (this.value.includes(inputValue)) {
        this.duplicatedChip = null
        // to trigger animate
        this.$nextTick(() => {
          this.duplicatedChip = inputValue
        })
        return
      }

      this.value.push(inputValue)
      this.$emit('input', this.value)
      this.$emit('md-insert', inputValue)
      this.inputValue = ''
    },
    removeChip (chip) {
      const index = this.value.indexOf(chip)

      this.value.splice(index, 1)
      this.$emit('input', this.value)
      this.$emit('md-delete', chip, index)
      this.$nextTick(() => this.$refs.input.$el.focus())
    },
    select (selection) {
      this.value.push(selection)
      this.$emit('input', this.value)
      this.$emit('md-insert', selection)
      this.inputValue = ''
    },
    handleBackRemove () {
      if (!this.inputValue) {
        this.removeChip(this.value[this.value.length - 1])
      }
    },
    handleInput () {
      if (this.mdCheckDuplicated) {
        this.checkDuplicated()
      } else {
        this.duplicatedChip = null
      }
    },
    checkDuplicated () {
      if (!this.value.includes(this.formattedInputValue)) {
        this.duplicatedChip = null
        return false
      }

      if (!this.mdCheckDuplicated) {
        return false
      }

      this.duplicatedChip = this.formattedInputValue
    }
  },
  watch: {
    value () {
      this.checkDuplicated()
    }
  }
})
</script>

<style lang="scss">
.md-chips.md-field {
  padding-top: 12px;
  flex-wrap: wrap;
  &.md-has-value {
    label {
      top: -6px;
    }
  }
  .md-chip {
    margin-bottom: 4px;
    &:last-of-type {
      margin-right: 8px;
    }
  }
  .md-input {
    min-width: 128px;
  }
}
</style>
