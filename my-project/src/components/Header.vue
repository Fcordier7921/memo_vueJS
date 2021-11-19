<template>
    <div  class="header-top">
        <p>{{ titre }}</p>
    </div >
</template>
<script>
import { bus } from '../main'
export default {
    name: 'header',
    data() {
        return {
            titre: 'Mon titre de bas',
        }
    },
    beforeCreate() {
        console.log('il va être créer: beforeCreate');
    },
    created() {
        console.log(' le composent est créer : created');
        bus.$on('changetitre', (data) => {
            this.titre = data;
        })
    },
    beforeMount() {
        console.log('il va être monté dans le DOM : beforeMount');
    },
    mounted() {
        console.log('il est intégrer au DOM:mounted');
    },
    beforeUpdate() {
        console.log('Il va semettre a jour: beforeUpdate');
    },
    updated() {
        console.log('il est mis a jour: updated');
    },
}
</script>
<style scoped>
    .header-top{
        position: fixed;
        top: 0;
        height: 50px;
        background: #333;
        color: #f1f1f1;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 25px;
        }
</style>