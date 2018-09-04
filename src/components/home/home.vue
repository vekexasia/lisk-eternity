<template>
    <div>meow
        <message v-for="tx in txs" :tx="tx"></message>
    </div>
</template>
<script lang="ts" src="./home.ts"/>
