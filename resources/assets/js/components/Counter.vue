<template>
    <div class="container">
        {{ count }}
        <div>
            <button @click="increment">+1</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: mapState(['count']),
        methods: {
            ...mapMutations(['increment'])
        }
    }
</script>
