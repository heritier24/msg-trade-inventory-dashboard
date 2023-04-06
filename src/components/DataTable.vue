<template>
    <div>
        <data-table v-bind="parameters"/>
    </div>
</template>
<script>
export default {
    props: {
        parameters: {
            type: Object,
            required: true
        }
    }
}
</script>