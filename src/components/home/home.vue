<template>
    <div>
        <compose></compose>
        <md-divider style="margin: 16px 0px;"></md-divider>
        <message v-for="tx in txs" :tx="tx" :key="tx.id"></message>
    </div>

</template>
<script lang="ts" src="./home.ts"/>
