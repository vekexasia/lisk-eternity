<template>
    <div>
        <md-steppers :md-active-step.sync="active">
            <md-step id="text" md-label="Text" :md-done="text != ''">

                <md-field>
                    <md-input v-model="text" md-counter="64"></md-input>
                </md-field>
                <div class="step_footer">
                    <div class="fees" ><strong>Fees</strong>: {{fees | fromSatoshi | decimalZeroPad(8)}}</div>
                    <md-button class="continue-btn md-raised md-primary" @click="setDone('text', 'textSize')">Continue</md-button>
                </div>
            </md-step>
            <md-step id="textSize" md-label="Size" :md-done="!!textSize">

                <div>
                    <md-radio v-model="textSize" value="small" class="small-message">{{text || 'message'}}</md-radio>
                </div>
                <div>
                    <md-radio v-model="textSize" value="normal" class="normal-message">{{text || 'message'}}</md-radio>
                </div>
                <div>
                    <md-radio v-model="textSize" value="big" class="big-message">{{text || 'message'}}</md-radio>
                </div>
                <div>
                    <md-radio v-model="textSize" value="huge" class="huge-message">{{text || 'message'}}</md-radio>
                </div>
                <div class="step_footer">
                    <div class="fees" ><strong>Fees</strong>: {{fees | fromSatoshi | decimalZeroPad(8)}}</div>
                    <md-button class="continue-btn md-raised md-primary" @click="setDone('textSize', 'textColor')">Continue</md-button>
                </div>
            </md-step>
            <md-step id="textColor" md-label="Text Color" :md-done="!!textColor">
                <div class="md-layout">
                    <div class="md-layout-item md-size-25" v-for="(color, index) in colors">
                        <md-radio v-model="textColor" :value="index" :style="{ color: color.hex }" :class="`${color.text} textColor`">msg</md-radio>
                    </div>
                </div>
                <div class="step_footer">
                    <div class="fees" ><strong>Fees</strong>: {{fees | fromSatoshi | decimalZeroPad(8)}}</div>
                    <md-button class="continue-btn md-raised md-primary" @click="setDone('textColor', 'confirmation')">Continue</md-button>
                </div>
            </md-step>
            <md-step id="confirmation" md-label="Confirmation" :md-done="tx">
                <h3>Oook! Create the following transaction</h3>
                <div class="conf-item">
                    <h4>Recipient</h4>
                    <span>{{constants.liskAddress}}</span>
                </div>
                <div class="conf-item">
                    <h4>Message</h4>
                    <span>{{text}}</span>
                </div>
                <div class="conf-item">
                    <h4>Amount</h4>
                    <span>{{fees | fromSatoshi | decimalZeroPad(8)}}</span>
                </div>
                <md-divider></md-divider>
                <div style="margin: 16px 0;">
                    <p>You can eventually use one of the following wallets:</p>
                    <div class="md-layout">
                        <div class="md-layout-item md-size-33"><md-button class="md-raised" @click="goToHub()">Lisk Hub</md-button></div>
                        <div class="md-layout-item md-size-33" style="text-align:center"><md-button  class="md-raised" @click="goToNano()">Lisk Nano</md-button></div>
                        <div class="md-layout-item md-size-33"><md-button style="float:right" class="md-raised md-primary" @click="startLedgerProcess()">Ledger Nano</md-button></div>
                    </div>
                </div>
                <md-divider></md-divider>

            </md-step>

        </md-steppers>
        <md-snackbar md-position="center" :md-duration="4000" :md-active.sync="showLedgerSnackbar">
            <span>{{ledgerSnackbarText}}</span>
        </md-snackbar>

    </div>
</template>
<style lang="scss">
    .step_footer {
        .fees {
            float:left;
            margin-top: 36px;
        }
        .continue-btn {
            margin-top: 16px;
            float: right;
        }
    }

    .conf-item {
        * {
            margin-left:0px;
            margin-right:0px;
            padding:0px;
        }
        h4 {
            width: 50%;
            display:inline-block;
        }
        span {
            display:inline-block;
            width: 49%;
            text-align:right;
        }
    }
    .md-radio-label {
        height: auto ! important;
    }
    .md-radio.textColor {
        label {
            margin-left: 8px;
            padding-left: 8px;
            padding-right: 8px;
        }
    }
    .small-message {
        font-size: 14px;
    }
    .big-message {
        font-size: 28px;
        line-height: 29px;
    }
    .huge-message {
        font-size: 48px;
        label {
            line-height: 44px !important;
        }

    }
        .md-radio.dark {
            label {
                background-color: #424242;
            }
        }
</style>
<script lang="ts" src="./compose.ts"/>

