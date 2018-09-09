<template>
    <div id="app" class="main-content">
        <h1>
            <svg height="40" viewBox="0 0 349 137" xmlns="http://www.w3.org/2000/svg" style="display:block; float:left;">
                <g fill="#000">
                    <path
                        d="M45.1 136.1l17.8-20c.3-.3.1-.8-.4-.8H42.9c-.1 0-.3-.1-.4-.2L25.9 96.5c-.1-.2-.2-.4-.1-.6l27.8-47.7c.1-.2.1-.4 0-.5L42.1 27.9c-.2-.3-.7-.3-.9 0L.1 98.5c-.1.2-.1.4 0 .6l33 37.1c.1.1.2.2.4.2h11.2c.1-.1.3-.2.4-.3z"></path>
                    <path
                        d="M57.3.3L45.7 20.1c-.1.2-.1.4 0 .5l12 20.6 31.8 54.6c.1.2.1.4-.1.6l-16.8 18.8-17.9 20.2c-.3.3-.1.8.4.8h26.8c.1 0 .3-.1.4-.2l33-37.1c.1-.2.2-.4.1-.6L58.1.3c-.1-.4-.6-.4-.8 0zm107.5 108.2V44.9c0-.5-.6-.7-.9-.3l-19.4 21.7c-.1.1-.1.2-.1.3V129c0 .3.2.5.5.5h49c.3 0 .5-.2.5-.5v-19.5c0-.3-.2-.5-.5-.5h-28.6c-.2 0-.5-.2-.5-.5zm57.8 20.5V69.4c0-.5-.6-.7-.9-.3l-19.4 21.7c-.1.1-.1.2-.1.3V129c0 .3.2.5.5.5h19.4c.3 0 .5-.3.5-.5zm105-29.9c-.1-.2-.1-.4 0-.6l19.9-29.6c.2-.3 0-.8-.4-.8h-22.3c-.2 0-.3.1-.4.2l-14.7 23.8c-.3.4-.9.2-.9-.3v-47c0-.5-.6-.7-.9-.3l-19.4 21.7c-.1.1-.1.2-.1.3V129c0 .3.2.5.5.5h19.4c.3 0 .5-.2.5-.5v-23.9c0-.5.6-.7.9-.3l16.3 24.5c.1.1.3.2.4.2H348c.4 0 .6-.5.4-.8l-20.8-29.6zm-72.1 31.6c12.6 0 26-5.3 26-20.1S269.1 93 260 90.9c-5-1.2-9-2.1-9-4.8 0-2.1 1.9-3.4 5-3.4 3.2 0 5.8 1.6 7.6 4.7.1.2.4.3.6.2l15.4-6.9c.3-.1.4-.4.2-.7-4.7-8.6-12.9-13-24.3-13-16.5-.1-24 10-24 20 0 13.7 12.2 16.8 21.1 19.1 5.2 1.3 8.9 2.3 8.9 4.9 0 1.7-1 3.8-6 3.8-4.6 0-7.9-2-9.6-6-.1-.3-.4-.4-.7-.3l-15.9 8c-.3.1-.4.4-.2.7 4.5 9.1 13.2 13.5 26.4 13.5z"></path>
                </g>
            </svg>
            <span style="line-height: 40px;display:block; float:left; margin-left: 16px; margin-top: 9px;">Eternity Wall</span></h1>
        <div style="clear:both; margin-bottom: 32px;"></div>
        <router-view></router-view>

        <!--<md-button class="md-fab md-primary md-theme-light fab">-->
            <!--<router-link to="/compose">-->
                <!--<md-icon>edit</md-icon>-->
            <!--</router-link>-->
        <!--</md-button>-->
    </div>
</template>
<style lang="scss">
    @import "../../themes/themes.scss";

    .main-content {
        padding: 16px;
        margin: 0px auto;
        max-width: 600px;
        margin-bottom: 60px;
    }

    .fab {
        position: fixed;
        right: 10px;
        bottom: 20px;
    }

</style>
<script lang="ts" src="./app.ts"></script>
