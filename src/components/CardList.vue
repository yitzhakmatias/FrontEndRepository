<template>
    <div class="columns">
        <div class="column is-3 is-narrow">
            <div class=" column is-3 header">
                <h2 class="title">Reddit posts</h2>
            </div>
            <div class="sideDiv">
                <ul class="item-list">
                    <ul class="list is-hoverable">

                        <li v-for="item in redditLst" :key="item.data.id">
                            <div class="list-item">
                                <card :reddit="item.data" v-on:dismissRow="removeItem" v-on:selectRow="setReddit"/>
                            </div>

                        </li>

                    </ul>
                </ul>
            </div>

            <div class=" column is-3 foot">
                <a v-on:click="dismissAll">
                    <h2 class="subtitle">Dismiss All</h2>
                </a>
            </div>
        </div>
        <div class="column is-8 mainContent">
            <CardDetail :reddit="selectedReddit" v-if="selectedReddit"/>
        </div>
    </div>
</template>
<script>
    import api from '../store/api.js'
    import Card from "./Card";
    import CardDetail from "./CardDetail";


    export default {
        name: "CardList",
        components: {
            CardDetail,
            Card

        },

        async created() {
            await this.getRedditList();
        },
        methods: {
            async getRedditList() {
                this.redditLst = [];
                this.redditLst = await api.getSubRedditsAsync();
            },
            setReddit(reddit) {

                this.selectedReddit = reddit;
            },
            loadMore() {
                this.numElements += 50;
            },
            removeItem(event) {

                this.redditLst = this.redditLst.filter(x => x.data.id !== event);
            },
            dismissAll() {
                this.redditLst = [];
            }
        },
        data() {
            return {
                redditLst: [],
                selectedReddit: undefined,
                numElements: 50
            }
        }
    }
</script>
<style>
    .foot {
        position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
        height: 60px;
        padding: 10px;
        z-index: 1000;
        background-color: white;
    }

    .header {
        position: fixed;
        height: 60px;
        padding: 10px;
        z-index: 1000;
        background-color: white;
        text-align: center;
    }

    .sideDiv {
        margin-top: 62px;
    }

    .mainContent {
        margin-top: 62px;
        position: fixed;
        left: 25%;
    }
</style>
