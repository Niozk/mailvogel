<template>
    <div class="card">
        <i :class="icon"></i>
        <h2>
            <slot />
        </h2>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: String,
    text: String
});
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25px;
    padding: 40px;
    width: 280px;
    height: 360px;
    opacity: 0.8;
    background-color: var(--secondary-color);
    border: 2px solid #7591ff;
    border-radius: 15px;
    text-align: center;
    transition: 0.4s ease-in-out;
}

.card:hover {
    opacity: 1;
    border-radius: 15px 15px 150px 15px;
}

.card i {
    margin: 25px 0 35px 0;
    font-size: 4.3rem;
    color: var(--letter-color-light);
    transition: transform 0.4s ease-in-out;
}

.card:hover i {
    transform: translateY(-10px);
}

.card h2 {
    margin: 20px 0;
    font-size: 1.6rem;
    font-weight: normal;
    color: var(--letter-color-light);
}

@media only screen 
and (max-width: 420px) {
    .card {
        margin: 0px;
        width: 250px;
    }
}
</style>