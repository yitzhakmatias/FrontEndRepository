<template>
    <div id="app">
        <RedditList/>
        <CardList/>
    </div>
</template>

<script>
    import RedditList from "./components/RedditList";
    import CardList from "./components/CardList";

    export default {
        name: 'app',
        components: {
            CardList,
            RedditList
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
