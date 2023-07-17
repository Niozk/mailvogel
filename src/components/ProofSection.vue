<template>
    <section class="proof-section">
        <div class="container">
            <h2>{{ $t("proofSection.H2") }}</h2>
            <div class="carousel">
                <Splide :options="{ rewind: true, autoplay: true, pauseOnHover: true, gap: '75px', width: widthBreakpoint[currentWidthBreakpoint] }">
                    <SplideSlide>
                        <Proof img="/3j48fqja3jkf3.png" name="Tim Leeuwendijk" company="dSPACE">
                            {{ $t("proofSection.slide1") }}
                        </Proof>
                    </SplideSlide>
                    <SplideSlide>
                        <Proof img="/83afy38jua3da2.png" name="Sara Faro" company="Sara Marketing">
                            {{ $t("proofSection.slide2") }}
                        </Proof>
                    </SplideSlide>
                    <SplideSlide>
                        <Proof img="/8187b161ba3820af63.png" name="Tony Liu" company="Omnichannel">
                            {{ $t("proofSection.slide3") }}
                        </Proof>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Proof from './Proof.vue';

const windowWidth = ref(window.innerWidth);
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const widthBreakpoint = ref([
    '1050px',
    '800px',
    '500px',
    '320px'
])

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

const currentWidthBreakpoint = computed(() => {
    if (windowWidth.value > 1250) {
        return 0;
    } else if (windowWidth.value <= 1250 && windowWidth.value > 1000) {
        return 1;
    } else if (windowWidth.value <= 1000 && windowWidth.value > 700) {
        return 2;
    } else {
        return 3;
    }
});
</script>

<style scoped>
.proof-section {
    display: flex;
    justify-content: center;
    margin: 0 0 300px 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin: 0 80px;
    padding: 75px;
    width: 1350px;
    height: 600px;
    background-color: var(--secondary-color);
    border-radius: 15px;
}

.container h2 {
    margin: 0;
    font-size: 2.4rem;
    color: var(--letter-color-light);
}

@media only screen 
and (max-width: 1000px) {
    .container {
        height: auto;
    }
}

@media only screen 
and (max-width: 800px) {
    .container {
        width: 1000px;
    }
}

@media only screen 
and (max-width: 700px) {
    .container {
        padding: 30px 20px;
        margin: 0;
        width: auto;
    }

    .container h2 {
        font-size: 2rem;
        text-align: center;
    }
}

@media only screen 
and (max-width: 390px) {
    .container {
        padding: 30px 0;
    }
}
</style>