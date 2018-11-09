<template lang="pug">

    li.node-tree
        div(:class="{bold: (isFolder && open )}" @click="toggle" /*@dblclick="changeType"*/)
            span {{ node.label }}
            span(v-if="isFolder") [{{ open ? '-' : '+' }}]

        div
            transition(name="custom-classes-transition" enter-active-class="animated fadeInDown fastest" leave-active-class="animated fadeOutUp fastest")
                ul(v-show="open" v-if="isFolder" )
                    node-tree(v-for="child, i in node.children" :node="child" :key="i+1" :class="'depth'+node.depth" )

</template>

<script>
    export default {
        name: "node-tree",

        props: {
            node: Object
        },   

        data: function () {
            return {
                open: false
            }
        },

        computed: {
            isFolder: function () { 

            return this.node.children &&
                this.node.children.length
            }
        },

        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },

            /*changeType: function () {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },*/

            /*addChild: function () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }*/
        }
    };
</script>