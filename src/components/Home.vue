<template lang="pug">
    .row
        .col-lg-12
            tree(:treeData="tree")

        //.col-lg-6
            activity
            
</template>

<script>
import Tree from "../components/Tree.vue";
import Activity from "../components/Activity.vue";

export default {
    name: "home",

    data: () => ({
        tree:
        {
            label: "Atendimento Prime",
            depth: 0,
            children: [
                {
                    label: "Atendimento",
                    depth: 1,
                    id_layer: 0
                },
                {
                    label: "Cancelamento",
                    depth: 1,
                    id_layer: 1
                },
                {
                    label: "Informações",
                    depth: 1,
                    id_layer: 2
                },
                {
                    label: "Reclamação",
                    depth: 1,
                    id_layer: 3
                },
                {
                    label: "Solicitação",
                    depth: 1,
                    id_layer: 4,
                 },
                {
                    label: "2ª via de Boleto",
                    depth: 2,
                    id_layer: 0
                },
                {
                    label: "2ª Via de Boleto Smartzap",
                    depth: 2,
                    id_layer: 1
                }
            ]
        }

        /*{
            label: "Departamentos",
            depth: 0,
            children: [
                {
                    label: "Atendimento Prime",
                    depth: 1,
                    children: [
                        {
                            label: "Atendimento",
                            depth: 2,
                        },
                        {
                            label: "Cancelamento",
                            depth: 2,
                        },
                        {
                            label: "Informações",
                            depth: 2,
                        },
                        {
                            label: "Reclamação",
                            depth: 2,
                        },
                        {
                            label: "Solicitação",
                            depth: 2,
                            children: [
                                {
                                    label: "2ª via de Boleto",
                                    depth: 3
                                },
                                {
                                    label: "2ª Via de Boleto Smartzap",
                                    depth: 3,
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Atendimento Varejo",
                    depth: 1
                },
                {
                    label: "Suporte DataCenter",
                    depth: 1
                },
                {
                    label: "CMO - Órgãos Públicos",
                    depth: 1
                },
                {
                    label: "Suporte Corporativo",
                    depth: 1
                }
            ]
        }*/
    }),

    //window.location = '?module=mobix#!/listaDePontos';
    
    components: {
        Tree
    }
};
</script>