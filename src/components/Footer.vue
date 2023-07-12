<template>
    <footer>
        <div class="content">
            <p>Mailvogel © 2023</p>
            <ul>
                <li v-for="item in linkList"><a :href="item.href" @click="item.click">{{ item.text }}</a></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const linkList = ref([
    {text: 'Onze dienst', href: '#working-section', click: linkToHome},
    {text: 'Over ons', href: '', click: linkToAboutUs},
    {text: 'Contact', href: '#appointment-section', click: linkToHome},
    {text: 'Afspraak maken', href: '#appointment-section', click: linkToHome}
])

const router = useRouter();

function linkToHome() {
    router.push('/');
}

function linkToAboutUs() {
    router.push('/about-us');
}

</script>

<style scoped>
footer {
    padding: 120px 0 200px 150px;
    white-space: nowrap;
    background-color: #205a4d;
}

.content {
    display: flex;
    flex-direction: column;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

p {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--letter-color-light);
}

a {
    font-size: 1rem;
    color: var(--letter-color-light);
}

@media only screen 
and (max-width: 700px) {
    footer {
        display: flex;
        justify-content: center;
        padding: 120px 0 200px 0;
    }
}

</style>