<script setup lang="ts"></script>

<template>
    <p>outfit</p>
</template>

<style scoped>
p {
    font-size: var(--h5-font-size);
    background-color: #eee;
    border-radius: 10px;
    width: 60vw;
    height: 60vh;
    text-align: center;
}

@media (min-width: 600px) {
    p {
        grid-area: 2 / 2 / 4 / 3;
    }
}
</style>
