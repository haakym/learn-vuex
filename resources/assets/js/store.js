export default {
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    },

    actions: {
        increment (context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2500);
        }
    },

    getters: {
        sqrt (state) {
            return Math.sqrt(state.count);
        }
    }
}