<template>
    <div class="columns">
        <div class="column is-3">
            <header class="card-header">
                <p class="card-header-title">heroes list</p>
            </header>
            <ul class="list is-hoverable">
                <li v-for="reddit in CardList">
                    <a class="list-item" @click="selectedHero=hero">
                        <span>{{hero.firstName}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "CardList",
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                subreddits: 'getSubreddits',
                categories: 'getCategories',
                category: 'getCategory',
                sortOption: 'getSortOption',
                sortWay: 'getSort'
            })
        }
    }
</script>
