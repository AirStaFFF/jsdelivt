<template>
    <home-layout>
        <template #filters>
            <filters
                @searchQuery="setSearchQuery($event)"
            />
        </template>
        <template #content>
            <div class="home-table">
                <b-table
                        ref="table"
                        id="my-table"
                        :items="loadMore"
                        :fields="fields"
                        :per-page="perPage"
                        :filter="$route.query"
                        :current-page="currentPage"
                        thead-class="home-table__header"
                        tbody-class="home-table__content"
                        striped
                        medium
                        show-empty
                >
                    <template #table-busy>
                        <loader v-if="loading"/>
                    </template>
                    <template #empty="scope">
                        <h4>{{ scope.emptyText }}</h4>
                    </template>
                    <template #cell(package)="data">
                        {{ data.value }}
                    </template>
                    <template #cell(version)="data">
                        {{ data.value }}
                    </template>
                    <template
                            v-if="getObjects.length"
                            v-slot:cell(actions)="{ item, index }"
                    >
                        <b-button
                                @click="showMoreInfo(item, index + 1, $event.target)"
                        >
                            Show more
                        </b-button>
                    </template>
                </b-table>
                <b-pagination
                        v-if="getObjects.length"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        align="center"
                ></b-pagination>
                <modal
                        :infoModal="infoModal"
                        @reset="resetInfoModal"
                >
                    <package-details :content="infoModal.content"/>
                </modal>
            </div>
        </template>
    </home-layout>
</template>
<script>
// Components
import HomeLayout from "@/layouts/HomeLayout";
import Filters from "@/components/Filters";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import PackageDetails from "./components/PackageDetails";

// Store
import { mapActions, mapGetters, mapState } from "vuex";

// Constants
import { FIELDS } from '@/constants/home/home-table-fields'
import { FILTERS } from '@/constants/home/home-table-filters'

export default {
    name: 'index.vue',
    components: {
        HomeLayout,
        Filters,
        Loader,
        Modal,
        PackageDetails
    },
    data() {
        return {
            fields: [...FIELDS],
            perPage: 10,
            currentPage: 1,
            infoModal: {
                id: 'info-modal',
                title: '',
                content: {}
            },
            filters: { ...FILTERS }
        }
    },
    async mounted() {
        this.$router.replace({
            query: {
                ...this.filters
            }
        }).catch(() => {})
        await this.ACTIONS_GET_PACKAGES_WITH_QUERY(this.$route.query)
    },
    watch: {
        filters: {
            deep: true,
            handler(val) {
                this.$router.replace({
                    query: {
                        ...val
                    }
                })
            }
        },
        '$route.query.search'(val) {
            if (!val) this.currentPage = 1
        },
        currentPage(val) {
            this.filters.from = val * this.perPage
        }
    },
    computed: {
        ...mapState('home', ['loading']),
        ...mapGetters('home', ['getObjects', 'getTotal']),
        rows() {
            return this.getTotal / this.perPage
        }
    },
    methods: {
        ...mapActions('home', ['ACTIONS_GET_PACKAGES_WITH_QUERY']),
        async loadMore() {
            const response = await this.ACTIONS_GET_PACKAGES_WITH_QUERY({ ...this.$route.query })
            return response.objects
        },
        showMoreInfo(item, index, button) {
            this.infoModal.title = `${item.package.name}`
            this.infoModal.content = item.package
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = {}
        },
        setSearchQuery(event) {
            this.filters.search = event
        }
    }
}

</script>

<style lang="scss">
    .home-table {
        &__header {
            tr th div {
                text-align: left;
            }
            tr th:last-child div {
                text-align: right;
            }

        }
        &__content {
            td {
                &:nth-child(1) {
                    width: 50%;
                }
                &:nth-child(2) {
                    width: 20%;
                }
                &:nth-child(3) {
                    width: 30%;
                }
                text-align: left;
                &:last-child {
                    text-align: right;
                }
            }
        }
    }
</style>
