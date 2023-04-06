<template>
  <div>
    <button class="btn btn-success active" @click="viewInventoryProduct()">
      View Product Details
    </button>
  </div>
</template>
<script>
export default {
  name: "ButtonDelete",
  methods: {
    async viewInventoryProduct() {
      this.$Progress.start();
      this.$router.push(`/inventory/product/${this.data.id}`);
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