import {createStore} from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

const store = createStore({
    modules: {
        todoApp
    }
});

export default store
