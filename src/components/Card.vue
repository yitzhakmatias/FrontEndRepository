<template>
    <div class="card">
        <div class="card-content">

            <div class="content">
                <p class="title is-4">{{this.reddit.author}}</p>
                {{this.reddit.created_utc}}
            </div>
            <div class="media">
                <div class="columns">
                    <div class="column ">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img :src="this.reddit.thumbnail" alt="Placeholder image">
                            </figure>
                        </div>
                    </div>
                    <div class="column ">
                        <div class="media-content">
                            <p class="subtitle is-6">{{this.reddit.title}}</p>
                        </div>
                    </div>
                    <div class="column">
                        <a  v-on:click="(event)=>this.$emit('selectRow',this.reddit)">
                            <div style="width: 1em">
                                <font-awesome-icon :icon="['fas', 'angle-right']"/>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <div class="columns">
                <div class="column">
                    <a  title=" Dismiss Post" :id="this.reddit.id"
                       v-on:click="(event)=>this.$emit('dismissRow',this.reddit.id)">
                        <div style="width: 2em ; float: left">
                            <font-awesome-icon :icon="icon"/>
                        </div>
                        <div style="margin-left: 3em"> Dismiss Post</div>
                    </a>
                </div>
                <div class="column"><p>{{this.reddit.num_comments}} comments</p></div>
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
        },
        computed: {
            icon() {
                return ['fas', 'times-circle']
            }
        }
    }
</script>

<style scoped>

</style>
