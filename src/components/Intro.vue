<template>
    <section class="intro-container">
        <h1>Mailvogel</h1>
        <h2>{{ $t("intro.H2") }}</h2>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate } from "motion";

onMounted(() => {
    animate(
        ".intro-container",
        { y: -10, opacity: [0, 1] },
        { duration: 1.2 }
    )
});
</script>

<style scoped>
.intro-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20vh 15px 0 15px;
    height: 70vh;
    text-align: center;
}

h1 {
    margin: 0;
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 3px;
    color: var(--primary-color);
}

h2 {
    margin: 0;
    max-width: 600px;
    font-size: 2rem;
    font-weight: normal;
    color: var(--letter-color-dark);
}

@media only screen 
and (max-width: 500px) {
    h1 {
        font-size: 2.8rem;
    }

    h2 {
        font-size: 1.6rem;
    }
}
</style>
