<template>
    <md-card class="message md-theme-default-dark" v-if="isValid()" >
        <md-card-header>
            <md-avatar>
                <img :src="`https://avatar.lisk.ws/${tx.senderId}.svg`" alt="Avatar">
            </md-avatar>
        </md-card-header>
        <md-card-content :style="{ color: lem.getColor(data.color).hex }">
            <span :class="`text text-${data.textSize} `">{{data.text}}</span>
        </md-card-content>
    </md-card>
</template>
<script lang="ts" src="./message.ts"/>

