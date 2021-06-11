<template>
    <div class="loader">
        <b-skeleton-table
            :rows="10"
            :columns="3"
            :table-props="{ bordered: true, striped: true }"
        />
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>

</style>
