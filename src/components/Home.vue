<template lang="pug">
  div.col-lg-6
    tree(:tree-data="tree")
</template>

<script>
import Tree from "../components/Tree.vue";

export default {
    data: () => ({
        tree: {
        label: "Atendimento Prime",
        depth: 0,
        children: [
            {
                label: "Atendimento",
                depth: 1,
            },
            {
                label: "Cancelamento",
                depth: 1,
            },
            {
                label: "Informações",
                depth: 1,
            },
            {
                label: "Reclamação",
                depth: 1,
            },
            {
                label: "Solicitação",
                depth: 1,
                children: [
                    {
                        label: "2ª via de Boleto",
                        depth: 2,
                        children: [
                            {
                                label: "2ª via de Boleto",
                                depth: 3,
                            },
                            {
                                label: "2ª Via de Boleto Smartzap",
                                depth: 3,
                            }
                        ]
                    },
                    {
                        label: "2ª Via de Boleto Smartzap",
                        depth: 2,
                    }
                ]
            }
        ]}
    }),
    
    components: {
        Tree
    },

    name: "home"
};
</script>