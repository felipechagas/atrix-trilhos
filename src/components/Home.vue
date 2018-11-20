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
                    id_layer: 0,
                    id_parent: 0
                },
                {
                    label: "2ª Via de Boleto Smartzap",
                    depth: 2,
                    id_layer: 1,
                    id_parent: 0
                },
                {
                    label: "2ª via de Boleto",
                    depth: 3,
                    id_layer: 0,
                    id_parent: 0,
                    actions: [
                        {
                            nome: "Lista de Boletos",
                            link: "https://atrixdev.mobtelecom.com.br/controle/clientsinvoices.php?userid=801"
                        }
                    ]
                },
                {
                    label: "2ª Via de Boleto Smartzap",
                    depth: 3,
                    id_layer: 1,
                    id_parent: 1,
                    actions: [
                        {
                            nome: "Lista de Boletos",
                            link: "https://atrixdev.mobtelecom.com.br/controle/clientsinvoices.php?userid=801"
                        }
                    ]
                }
            ]
        }
    }),
    
    components: {
        Tree
    }
};
</script>