<template>
    <div class="columns">
        <div class="column is-3">
            <ul class="item-list">
                <ul class="list is-hoverable">
                    <li v-for="item in redditLst" :key="item.data.id">
                        <a class="list-item" @click="selectedHero=item.data.id">
                            <card :reddit="item.data"/>
                        </a>

                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>
<script>
    import api from '../store/api.js'
    import Card from "./Card";

    export default {
        name: "CardList",
        components: {
            Card
        },

        async created() {
            await this.getRedditList();
        },
        methods: {
            async getRedditList() {
                this.redditLst = [];
                this.redditLst = await api.getSubRedditsAsync();
            }
        },
        data() {
            return {
                redditLst: []
            }
        }
    }
</script>
