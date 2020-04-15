<template>
    <svg v-if="name" :style="styles">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + name"></use>
    </svg>
</template>

<script>
    /**
     * Компонент иконки
     */
    export default {
        props: {
            /**
             * Имя иконки
             */
            name: {
                type: String,
                required: true
            },

            /**
             * Высота иконки
             */
            height: {
                type: String,
                default: undefined
            },

            /**
             * Ширина иконки
             */
            width: {
                type: String,
                default: undefined
            },

            /**
             * Цвет иконки
             */
            fill: {
                type: String,
                default: undefined
            },

            /**
             * Цвет обводки иконки
             */
            stroke: {
                type: String,
                default: undefined
            }
        },

        computed: {
            styles() {
                let style = {}

                style['width'] = this.width || undefined
                style['height'] = this.height || undefined
                style['fill'] = this.fill || undefined
                style['stroke'] = this.stroke || undefined

                return style
            }
        }
    };
</script>

<style lang="scss" scoped>
    .icon {
        position: relative;
        pointer-events: none;
        color: transparent;
    }
</style>
