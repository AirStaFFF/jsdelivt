<template>
    <div class="custom-filters d-flex mb-2">
        <div class="custom-filters__field">
            <div
                class="custom-filters__tooltip"
                v-b-tooltip.right.hover :title="text"
            >
                ?
            </div>
            <b-form-input
                v-model="search"
                :debounce="300"
                placeholder="Name of package"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: "Filters",
    data() {
        return {
            search: '',
            text: 'author:bcoe\n ' +
                'maintainer:bcoe\n' +
                ' keywords:batman\n ' +
                'not:unstable\n' +
                ' not:insecure\n' +
                'is:unstable\n' +
                'is:insecure\n' +
                'boost-exact:false'
        }
    },
    mounted() {
        if (this.$route.query.search) {
            this.search = this.$route.query.search
        }
    },
    watch: {
        search(val) {
            this.$emit('searchQuery', val)
        }
    }
}
</script>

<style lang="scss">
    .custom-filters {
        &__field {
            position: relative;
            width: 100%;
        }
        &__tooltip {
            position: absolute;
            left: -12px;
            top: 50%;
            margin-top: -12px;
            display: block;
            border: 1px solid #dedede;
            background: #fff;
            width: 24px;
            height: 24px;
            font-size: 16px;
            border-radius: 50%;
            color: cornflowerblue;
            font-weight: bold;
        }
    }
</style>
