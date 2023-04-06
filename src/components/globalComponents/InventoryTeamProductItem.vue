<template>
    <div>
      <h4 :class="classTeam">Team {{ teamName }}</h4>
      <h2 :class="classPieces">{{ pieces }} </h2>
    </div>
</template>
<script>
export default {
  props: {
    classTeaam: {
      type: String,
      required: true,
      default: "text-small mb-2",
    },
    classPieces: {
        type: String,
        required: true,
        default: "mb-0 fw-bold"
    },
    teamName: {
        type: String,
        required: true,
    },
    pieces: {
        type: String,
        required: true,
    }
  },
};
</script>