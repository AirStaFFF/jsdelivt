<template>
    <div class="main-layout d-flex flex-wrap align-content-between">
        <div class="w-100">
            <div class="header d-flex align-items-center justify-content-center">
                <h1 class="header-title">This is my small project</h1>
            </div>
            <div class="wrapper">
                <slot/>
            </div>
        </div>
        <v-footer />
    </div>
</template>

<script>
    import VFooter from "../components/VFooter";
    export default {
        name: "MainLayout",
        components: {
            VFooter
        }
    }
</script>

<style lang="scss">
    .main-layout {
        min-height: 100vh;
        .header {
            height: 80px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            background: #fff;
                &-title {
                    font-size: 24px;
                    font-weight: bold;
                }
        }
    }
    .wrapper {
        display: block;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
    }
</style>
