import OptionMixin from '../../mixins/option.js'
import { UIcon } from '../icon'
import { stopAndPrevent } from '../../utils/event.js'

export default {
  name: 'URadio',
  mixins: [OptionMixin],
  props: {
    val: {
      required: true
    }
  },
  computed: {
    isTrue () {
      return this.value === this.val
    }
  },
  methods: {
    toggle (evt, blur = true) {
      if (this.disable || this.readonly) {
        return
      }
      evt && stopAndPrevent(evt)
      blur && this.$el.blur()

      if (!this.isTrue) {
        this.__update(this.val)
      }
    },
    __getContent (h) {
      return [
        h(UIcon, {
          staticClass: 'u-radio-unchecked cursor-pointer absolute-full',
          props: {
            name: this.uncheckedIcon || this.$uloc.icon.radio.unchecked,
            type: 'material'
          }
        }),
        h(UIcon, {
          staticClass: 'u-radio-checked cursor-pointer absolute-full',
          props: {
            name: this.checkedIcon || this.$uloc.icon.radio.checked,
            type: 'material'
          }
        })
      ]
    }
  },
  beforeCreate () {
    this.__kebabTag = 'u-radio'
  }
}
