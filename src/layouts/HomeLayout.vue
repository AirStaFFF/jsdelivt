<template>
    <main-layout>
        <div class="home-page">
            <div class="filters">
                <slot name="filters"/>
            </div>
            <div class="content">
                <slot name="content"/>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from "./MainLayout";
    export default {
        name: "HomeLayout",
        components: {
            MainLayout
        }
    }
</script>

<style scoped>

</style>
