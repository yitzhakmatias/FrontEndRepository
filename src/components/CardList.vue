<template>
    <div class="columns">

        <div class="column is-3">
            <h2 class="title">Reddit posts</h2>
            <div v-overflow-scroll="true" scroll-to="last-child">
                <ul class="item-list">
                    <ul class="list is-hoverable">
                        <li v-for="item in redditLst" :key="item.data.id">
                            <a class="list-item" @click="setReddit(item.data)">
                                <card :reddit="item.data"/>
                            </a>

                        </li>
                    </ul>
                </ul>
            </div>

        </div>
        <div class="column is-8">
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
                //console.log(reddit);
                this.selectedReddit = reddit;
            }
        },
        data() {
            return {
                redditLst: [],
                selectedReddit: undefined
            }
        }
    }
</script>
