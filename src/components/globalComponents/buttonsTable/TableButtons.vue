<template>
  <div>
    <button class="btn btn-success active" @click="display();">View</button>
    <button class="btn btn-danger active">Edit</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "ButtonDelete",
  methods: {
    display() {
        alert("component");
    },
    triggerSomeAction() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/companies/${this.data.id}`)
    },
    updateCompany() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/companies/update/${this.data.id}`)
    },
    async deleteCompany() {
      this.$Progress.start()
      const id = this.$route.params.id;

      try {
        const response = await axios.delete(`/api/data/companies/${id}`);
        this.$Progress.finish()

        this.company = response.data;

        console.log(response.data);
      } catch (error) {
        this.$Progress.fail()
        console.log(error);
      }
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>