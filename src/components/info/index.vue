<template lang="html">
    <div class="info">
        <h2>{{info}}</h2>
        <h3>Project Name: lisketernity</h3>
        <h3>Project Version: 0.0.1</h3>
        <h3>Author: Andrea Baccega </h3>
        <h3>Desc: Lisk Eternity Wall</h3>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import {Message} from "../message/message";

    @Component({
        components: { Message }
    })
    export default class Info extends Vue {
        name: string = 'info';
        info: string = 'project info:';

        beforeRouteEnter (to, from, next) {
            console.log('666666');
            next();
        }
    };
</script>

<style>
    h2{
        margin: 10px;
        font-size: 20px;
    }
</style>
