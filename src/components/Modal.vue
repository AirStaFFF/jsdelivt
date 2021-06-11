<template>
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <slot/>
    </b-modal>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            infoModal: {
                type: Object,
                required: true
            }
        },
        methods: {
            resetInfoModal() {
                this.$emit('reset')
            }
        }
    }
</script>

<style scoped>

</style>
