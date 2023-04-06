import axios from 'axios'
export const errorHandlingMixins = {

    methods:{
        displayUnauthorized(error)
        {
            if(error.response === undefined){
                this.$noty.error("somethinng wrong please contact support");
                return;
            }

            if(error.response.data.errors){
                this.$noty.error(error.response.data.errors[0]);
                return;
            }

            
            
            if (error.response.data.message === 'Unauthenticated.') {

                localStorage.removeItem("token");

                this.$store.commit("removeToken");

                localStorage.removeItem("permissionName");

                this.$store.commit("removePermissionName");

                axios.defaults.headers.common["Authorization"] = "";

                this.$router.push('/login');
            }

            if(error.response.data.message){
                this.$noty.error(error.response.data.message);
                return;
            }
        }
    }
}