<template>
    <div class="footer d-flex align-items-center">
        <div class="wrapper">
            <span class="created_by">Created by Max</span>
            <div class="links">
                <a
                    href="https://github.com/AirStaFFF"
                    target="_blank"
                >
                    <git-hub/>
                </a>
                <a
                    href="https://www.linkedin.com/in/maksymivanovdev/"
                    target="_blank"
                >
                    <linkedin/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import GitHub from "@/icons/GitHub";
    import Linkedin from "@/icons/Linkedin";
    export default {
        name: "VFooter",
        components: {
            GitHub,
            Linkedin
        }
    }
</script>

<style lang="scss">
    .footer {
        width: 100%;
        height: 150px;
        padding: 20px 20px;
        background: linear-gradient(270deg,#354255 0,#1f2939);
        color: #fff;
        .links {
            display: flex;
            justify-content: center;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px;
                color: #fff;
                transition: .3s;
                svg {
                    width: 24px;
                    height: 24px;
                }
                &:hover {
                    color: cornflowerblue;
                }
            }
        }
    }
</style>
