<template>
    <md-card class="message" :md-theme="lem.getTheme(data.color)" v-if="isValid() && isRenderable()">
        <md-card-header>
            <md-avatar>
                <img :src="`https://avatar.lisk.ws/${tx.senderId}.svg`" alt="Avatar">
            </md-avatar>
        </md-card-header>
        <md-card-content >
            <span :class="`text text-${data.textSize} `" :style="{ color: data && lem.getColor(data.color).hex }">{{data.text}}</span>
            <div style="clear:both"></div>
            <div class="infos md-layout md-gutter" style="margin-top: 16px; margin-bottom: 4px;">
                <small class="md-layout-item md-size-40"><md-icon>fingerprint<md-tooltip md-direction="bottom">Transaction ID</md-tooltip></md-icon> {{tx.id}}</small>
                <small class="md-layout-item md-size-30"><md-icon>alarm<md-tooltip md-direction="bottom">Confirmation time</md-tooltip></md-icon> {{tx.timestamp | timestampRelative}}</small>
                <small class="md-layout-item md-size-30"><md-icon>attach_money<md-tooltip md-direction="bottom">TX Price</md-tooltip></md-icon> {{usdPrice | truncateNumber(2)}}</small>
                <small class="md-layout-item md-size-40"><md-icon>record_voice_over<md-tooltip md-direction="bottom">Sender Address</md-tooltip></md-icon> {{tx.senderId}}</small>
                <small class="md-layout-item md-size-30"><md-icon>done_all<md-tooltip md-direction="bottom">Confirmations</md-tooltip></md-icon> {{tx.confirmations}}</small>
                <small class="md-layout-item md-size-30"><md-icon>verified_user<md-tooltip md-direction="bottom">Block Producer</md-tooltip></md-icon> {{delegate}}</small>
            </div>
        </md-card-content>
    </md-card>
</template>
<style lang="scss">
    .message {
        margin-bottom: 32px;
    }
    .text {
        font-size: 20px;
        display: block;
        margin-top: -7px;
        &.text-small {
            font-size: 14px;

        }
        &.text-big {
            font-size: 28px;
            line-height: 29px;

        }
        &.text-huge {
            font-size: 48px;
            line-height: 48px;
            margin-top: -18px;
        }
    }
    .infos small {
        margin-top: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .center {
        text-align: center;
    }
    .right {
        text-align: right;
    }
</style>
<script lang="ts" src="./message.ts"/>

