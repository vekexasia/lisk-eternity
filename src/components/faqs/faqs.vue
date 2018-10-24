<template>
    <div>
        <div v-for="(f, index) in faqs" :key="index">
            <div class="faq">
                <h3 class="q">{{f.q}}</h3>
                <p  class="a" v-html="f.a"></p>
            </div>
            <md-divider></md-divider>
        </div>


    </div>
</template>
<style lang="scss">
    .faq {
        margin: 16px 0px;
        .q {}
        .a {}
    }
</style>
<script lang="ts" src="./faqs.ts"/>

