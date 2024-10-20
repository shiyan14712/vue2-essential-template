export default {
    state: {
        isCollapse: false, // 控制侧边栏的展开和收起
    },
    mutations: {
        collapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}