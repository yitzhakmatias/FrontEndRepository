<template>
    <div id="app">
        <CardList/>
    </div>
</template>

<script>
    import CardList from "./components/CardList";

    export default {
        name: 'app',
        components: {
            CardList
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
