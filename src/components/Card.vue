<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <p class="title is-4">{{this.reddit.author}}</p>
                {{this.reddit.created_utc}}
            </div>
            <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img :src="this.reddit.thumbnail" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-6">{{this.reddit.title}}</p>
                </div>
            </div>

            <div class="content">
                <a href="#">#css</a> <p>{{this.reddit.num_comments}} comments</p>
                <br>
                <time :datetime="new Date()">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            reddit: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>
