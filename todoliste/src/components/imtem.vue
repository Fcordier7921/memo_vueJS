<template>
    <div class="card my-2 item-todo">
        <p>{{ tache }}</p>
        <div v-on:click="suppression" class="btn-sup btn btn-danger">X</div>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: ['tache', 'suppression'],
    data() {
        return {
           
        };
    },
    
    
};
</script>

<style scoped>

.item-todo{
    position: relative;
    padding: 20px 60px 20px 30px;
    font-size: 20px;
    height: 88px;
}
.btn-sup{
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    
}
.item-todo p{
    margin-bottom: 0!important;
}

</style>