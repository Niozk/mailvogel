<template>
    <div class="proof">
        <img class="image" :src="img">
        <div class="proof-content">
            <div class="proof-text">
                <i class="fa-solid fa-quote-left"></i>
                <p>
                    <slot />
                </p>
            </div>
            <div class="proof-author">
                <p class="name">{{ name }}</p>
                <p class="company">{{ company }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    img: String,
    name: String,
    company: String
});
</script>

<style scoped>
.proof {
    display: flex;
    gap: 50px;
    padding: 30px;
    max-width: 1000px;
    height: 400px;
    background-color: var(--letter-color-light);
    border-radius: 15px;
}

.proof img {
    width: 350px;
    height: 400px;
    border-radius: 15px;
}

.proof-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 30px;
}

.proof-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.6rem;
}

.proof-text i {
    font-size: 3.2rem;
    color: var(--secondary-color);
}

.proof-author {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.name {
    font-size: 1.3rem;
    font-weight: bold;
}

.company {
    font-size: 1.2rem;
}
</style>
