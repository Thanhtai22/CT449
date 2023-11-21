import {createStore} from 'vuex';
import router from '../router';
const stores = createStore ({
    state: {
        email: "",
        productId: "",
        quantity: "",
        cart: "",
    },
    getters: {

    },
    mutations: {
        login(state, email){
            state.email = email;
            localStorage.setItem('email', email);
        },
        logout(state) {
            const checkConfirm = confirm('Bạn có chắc chắn muốn đăng xuất không?')
            if(checkConfirm) {
                state.email = "";
                localStorage.removeItem('email'),
                router.push('/login');
            }
        },
        initializeStore(state) {
            if(localStorage.getItem('email')) {
                state.email = localStorage.getItem('email');
            }
        },
       
    },
    actions: {

    },
    modules: {

    }

})

export default stores;