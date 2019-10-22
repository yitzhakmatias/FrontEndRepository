<template>
    <div class="card">

        <div class="card-content">
            <div class="content">
                <div class="media-content">
                    <p class="title is-4">{{this.reddit.author}}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>
            <div class="card-image">
                <figure class="image  is-128x128">
                    <img :src="this.reddit.thumbnail" alt="Placeholder image">
                </figure>
            </div>

            <div class="content">
                {{this.reddit.title}}.
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardDetail",
        props: {
            reddit: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>
