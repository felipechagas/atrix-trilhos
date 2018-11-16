<template lang="pug">

    img(v-if="isRoot" src="/modules/addons/trilhos/www/images/temp_image.jpeg")
        li(v-for="node in getNodes" @click="toggleLayer") 
            | {{ node.label }}

</template>

<script>
    export default {
        name: "node",

        props: {
            nodeData: Object
        }
    };
</script>