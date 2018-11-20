<template lang="pug">

    .row(v-show="visible")
        .col-md-12
            span   
                | Ações Recomendadas:

        .col-md-12.actions-tree
            .row
                .col-md-12(v-for="action in nodeData.actions")
                    a.btn.btn-primary.btn-sm.btn-tree(:href="action.link" target="_blank")
                        | {{action.nome}}

                .col-md-12
                    a.btn.btn-primary.btn-sm.btn-tree(href="#")
                        | Nova Ação

        .col-md-12
            span   
                | Pergunte ao cliente antes de finalizar o atendimento:

        .col-md-12
            .input-group.searchTree
                span.input-group-addon
                    i.glyphicon.glyphicon-search
                input.form-control(type="text" v-model="cliente" placeholder="Nome do Cliente")
        
        .col-md-12
            .input-group.searchTree
                span.input-group-addon
                    i.glyphicon.glyphicon-user
                input.form-control(type="text" v-model="telefone" placeholder="Telefone do Cliente")

        .col-md-12
            .input-group.searchTree
                span.input-group-addon
                    i.glyphicon.glyphicon-info-sign
                input.form-control(type="text" placeholder="Observações")

        

        .col-md-12
            a.btn.btn-primary.btn-sm.btn-tree.disabled.disabled-tree(href="" v-show="!canFinish")
                | Finalizar Atendimento
                
            a.btn.btn-primary.btn-sm.btn-tree(href="" v-show="canFinish")
                | Finalizar Atendimento
</template>

<script>
    export default {
        name: "leaf",

        props: {
            nodeData: Object
        },

        data: () => ({
            visible: true,
            cliente: "",
            telefone: "",
        }),

        computed: {
            canFinish: function () {
                return (this.cliente!='' && this.telefone!='');
            }
        },
        
        methods: {
            toggleLayer: function () {
                var nextLayer = this.$parent.$parent.$children[this.$parent.tdepth+1];

                if(nextLayer.visible) {
                    for(var i=this.$parent.tdepth+1; i<=3; i++) {
                        this.$parent.$parent.$children[i].visible = false;
                    }
                }

                nextLayer.visible = true;

                this.updateLayer();
            },

            updateLayer: function () {
                var reference = this.$parent.$parent.$children[this.$parent.tdepth+1].$children;

                for(var i=0; i<reference.length; i++) {
                    if(reference[i].nodeData.id_parent == this.nodeData.id_layer) reference[i].visible = true;
                    else reference[i].visible = false;
                }
            }
        },
    };
</script>