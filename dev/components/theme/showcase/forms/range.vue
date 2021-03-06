<template>
  <u-page padding class="docs-slider row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">
        Standalone
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ standard.min }} to {{ standard.max }} (0 to 50)
          </u-chip>
        </span>
      </p>
      <u-range v-model="standard" :min="0" :max="50" />
      <u-range v-model="standard" :min="0" :max="50" square />

      <p class="caption">
        With Floating Point Precision
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ precision.min }} to {{ precision.max }} (0.1 to 1.5)
          </u-chip>
        </span>
      </p>
      <u-range v-model="precision" :min="0.1" :max="1.5" :step="0.1" :decimals="1" color="amber" />

      <p class="caption">
        With Label
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label.min }} to {{ label.max }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-range v-model="label" :min="-20" :max="20" :step="4" label color="purple" />

      <p class="caption">
        With Step
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ step.min }} to {{ step.max }} (0 to 45, step 5)
          </u-chip>
        </span>
      </p>
      <u-range v-model="step" :min="0" :max="45" :step="5" label color="deep-orange" />

      <p class="caption">
        Snap to Step
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ snap.min }} to {{ snap.max }} (0 to 10, step 2)
          </u-chip>
        </span>
      </p>
      <u-range v-model="snap" :min="0" :max="10" :step="2" label snap />

      <p class="caption">
        With Markers + Snap to Step
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ marker.min }} to {{ marker.max }} (-6 to 10, step 2)
          </u-chip>
        </span>
      </p>
      <u-range v-model="marker" :min="-6" :max="10" :step="2" label snap markers color="orange" />

      <p class="caption">
        Display Label Always
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label.min }} to {{ label.max }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-range v-model="label" :min="-20" :max="20" :step="4" label-always color="brown" />

      <p class="caption">
        Custom Label Values
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ label.min }} to {{ label.max }} (-20 to 20, step 4)
          </u-chip>
        </span>
      </p>
      <u-range
        :left-label-value="`${label.min}px`"
        :right-label-value="`${label.max}px`"
        v-model="label" :min="-20" :max="20" :step="4" label-always
      />

      <p class="caption">
        Drag Range
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ range.min }} to {{ range.max }} (0 to 100, step 1)
          </u-chip>
        </span>
      </p>
      <u-range v-model="range" :min="0" :max="100" label drag-range />

      <p class="caption">
        Drag Range + Snap to Step
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ rangeSnap.min }} to {{ rangeSnap.max }} (0 to 100, step 5)
          </u-chip>
        </span>
      </p>
      <u-range v-model="rangeSnap" :min="0" :max="100" :step="5" drag-range label markers snap color="lime" />

      <p class="caption">
        Drag Only Range (Fixed Interval)
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ onlyRange.min }} to {{ onlyRange.max }} (0 to 100, step 5)
          </u-chip>
        </span>
      </p>
      <u-range v-model="onlyRange" :min="0" :max="100" :step="5" drag-only-range label color="info" />

      <p class="caption">
        Lazy input
        <span class="chip-container">
          <u-chip square color="secondary">
            Model: {{ lazy }}
          </u-chip>
        </span>
      </p>
      <u-range :value="lazy" @change="val => { lazy = val }" :min="0" :max="50" label />

      <p class="caption">
        Readonly State
      </p>
      <u-range v-model="standard" color="secondary" :min="0" :max="50" readonly />

      <p class="caption">
        Disabled State
      </p>
      <u-range v-model="standard" color="secondary" :min="0" :max="50" disable />

      <p class="caption">
        Error State
      </p>
      <div class="u-ma-xs m-b-md">
        <u-toggle class="u-ma-xs" v-model="error" color="negative" label="Toggle error state" />
        <u-toggle class="u-ma-xs" v-model="warning" color="warning" label="Toggle warning state" />
      </div>

      <u-range :error="error" :warning="warning" v-model="standard" :min="0" :max="50" />
      <u-range :error="error" :warning="warning" label-always v-model="standard" :min="0" :max="50" />

      <p class="caption">
        In a Field
      </p>
      <u-field
        icon="local_atm"
        label="Price range"
        helper="Refine price range filter (in USD)"
      >
        <u-range class="orange" v-model="standard" :min="0" :max="50" label />
      </u-field>

      <p class="caption">
        Inside of a List
      </p>
      <u-list>
        <u-item>
          <u-item-side icon="local_atm" />
          <u-item-main>
            <u-range v-model="standard" :min="0" :max="50" label color="secondary " />
          </u-item-main>
        </u-item>
        <u-item>
          <u-item-side icon="euro symbol" />
          <u-item-main>
            <u-range v-model="standard" :min="0" :max="50" label color="amber" />
          </u-item-main>
        </u-item>
      </u-list>
    </div>
  </u-page>
</template>

<script>
import './slider-style.styl'

export default {
  data () {
    return {
      standard: {
        min: 10,
        max: 35
      },

      precision: {
        min: 0.2,
        max: 0.7
      },

      step: {
        min: 10,
        max: 20
      },

      label: {
        min: -12,
        max: 8
      },

      snap: {
        min: 2,
        max: 6
      },

      marker: {
        min: 6,
        max: 8
      },

      range: {
        min: 20,
        max: 65
      },

      rangeSnap: {
        min: 35,
        max: 60
      },

      onlyRange: {
        min: 10,
        max: 35
      },

      lazy: {
        min: 10,
        max: 35
      },

      error: true,
      warning: false
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    }
  }
}
</script>
