<template>
    <div
        v-if="checkContent"
        class="package-details"
    >
        <div class="d-flex">
            <p class="package-details__description w-75">
                <span class="package-details__label">Description</span>
                <span>{{ content.description }}</span>
            </p>
            <p class="package-details__version w-25 text-end">
                <span class="package-details__label">Version</span>
                <span>{{ content.version }}</span>
            </p>
        </div>
        <div
            v-if="content.keywords"
            class="package-details__keywords d-flex flex-wrap"
        >
            <span class="package-details__label">Keywords</span>
            <div
                class="package-details__keywords--item d-flex align-items-center justify-content-center"
                v-for="(item, id) in content.keywords"
                :key="id"
            >
                {{ item }}
            </div>
        </div>
        <div class="package-details__publisher">
            <span class="package-details__label mt-2">Publisher</span>
            <p class="package-details__publisher--name my-0">User Name: {{ content.publisher.username }}</p>
            <span>
                Email:
                <a
                        v-if="content.publisher.email"
                        class="package-details__publisher--email"
                        :href="`mailto:${content.publisher.email}`"
                >
                {{ content.publisher.email }}
            </a>
            </span>
        </div>
        <div class="package-details__links d-flex justify-content-end">
            <a
                class="package-details__links--item d-flex align-items-center justify-content-center"
                v-for="(link, id) in Object.keys(content.links)"
                :key="id"
                :href="content.links[link]"
                target="_blank"
            >
                <component :is="icons[link]"/>
            </a>
        </div>
    </div>
</template>

<script>
import GitHub from "@/icons/GitHub";
import Npm from "@/icons/Npm";
import Bug from "@/icons/Bug";
import OpenBase from "@/icons/OpenBase";

export default {
    name: "PackageDetails",
    components: {
        GitHub,
        Npm,
        Bug,
        OpenBase
    },
    props: {
        content: {
            type: Object,
            required: true,
            default: {}
        }
    },
    data() {
        return {
            icons: {
                npm: 'npm',
                homepage: 'open-base',
                repository: 'git-hub',
                bugs: 'bug'
            }
        }
    },
    computed: {
        checkContent() {
            return Object.keys(this.content).length
        }
    }
}
</script>

<style lang="scss">
    .package-details {
        &__label {
            display: block;
            margin-bottom: 4px;
            width: 100%;
            color: #b3bbc6;
            font-size: 14px;
            border: none;
            z-index: 1;
            line-height: 16px;
        }
        &__description {
            margin-top: 0 !important;
            margin-bottom: 12px;
        }
        &__version {
            margin-bottom: 12px;
        }
        &__keywords {
            &--item {
                padding: 4px 8px;
                border-radius: 4px;
                border: 1px solid #dedede;
                margin-right: 4px;
                margin-bottom: 4px;
                font-size: 12px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
        &__publisher {
            color: #123456;
            &--name {
            }
            &--email {

            }
        }
        &__links {
            margin-top: 16px;
            &--item {
                height: 30px;
                width: 30px;
                padding: 5px;
                border: 1px solid #dedede;
                margin-right: 1px;
                color: black;
                &:hover {
                    color: black;
                }
                &:last-child {
                    margin-right: 0;
                }
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
