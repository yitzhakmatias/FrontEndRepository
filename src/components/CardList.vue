<template>
    <div class="columns">
        <div class="column is-3">
            <ul class="item-list">
                <ul class="list is-hoverable">
                    <li v-for="item in redditLst" :key="item">
                        <a class="list-item" @click="selectedHero=item.data.id">
                            <span>{{item.data.title}}</span>
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>
<script>
    import api from '../store/api.js'

    export default {
        name: "CardList",

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
