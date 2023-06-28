<template>
    <div class="nav-class">
        <nav>
            <ul class="nav-list-1">
                <li class="logo"><a href="#"><img :src="logoColor[currentIndex]" alt="Logo of site"></a></li>
            </ul>
            <ul class="nav-list-2" v-if="isNavVisible">
                <li v-for="item in navList2Items" :key="item"><a :href="item.href" @click="item.click">{{ item.text }}</a></li>
            </ul>
            <ul class="nav-list-3" v-if="isNavVisible">
                <div class="language-list">
                    <li v-for="item in navList1Items" :key="item"><button @click="item.click"><i :class="item.flag"></i></button></li>
                </div>
                <button class="appointment-button">Afspraak maken</button>
            </ul>
            <button class="fa-solid fa-bars open-button" id="open-button" @click="openSidemenu()" v-if="!isNavVisible"></button>
        </nav>
    </div>
    <aside id="sidemenu">
        <button class="close-button" @click="closeSidemenu()">&times;</button>
        <ul>
            <li v-for="item in navList2Items" :key="item"><a :href="item.href" @click="item.click">{{ item.text }}</a></li>
        </ul>
        <ul class="sidemenu-buttons">
            <li v-for="item in navList1Items" :key="item"><button @click="item.click"><i :class="item.flag"></i></button></li>
        </ul>
    </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const navList1Items = ref([
    {flag: 'fi fi-nl', click: ''},
    {flag: 'fi fi-gb', click: ''}
])

const navList2Items = ref([
    {text: 'Onze dienst', href: '#', click: ''},
    {text: 'Over ons', href: '#', click: ''},
    {text: 'Contact', href: '#', click: ''}
])

const isNavVisible = ref(window.innerWidth > 950);
const logoColor = ref(['logo-mascot.png', 'logo-mascot-light.png'])
const currentIndex = ref(0);

onMounted(() => {
    window.addEventListener('resize', () => {
        isNavVisible.value = window.innerWidth > 950;
    });

    window.addEventListener('scroll', function(){
        const header = document.querySelector('.nav-class');
        header.classList.toggle('sticky', window.scrollY > 60);
        if (window.scrollY > 60) {
            currentIndex.value = 1;
        } else {
            currentIndex.value = 0;
        }
    });

    closeSidemenuOnClick();
});

function openSidemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.width = "285px";
    sidemenu.style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.2)";
    sidemenu.style.opacity = "1";
}

function closeSidemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.width = "0";
    sidemenu.style.opacity = "0";

    setTimeout(() => {
        sidemenu.style.boxShadow = "0";
        document.body.style.marginRight = "0";
    }, 500);
}

function closeSidemenuOnClick() {
    document.addEventListener("click", function(event) {
        const sidemenu = document.getElementById("sidemenu");
        const openBtn = document.getElementById("open-button");
        
        if (sidemenu && openBtn && !sidemenu.contains(event.target) && !openBtn.contains(event.target)) {
            closeSidemenu();
        }
    })
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    gap: 75px; 
    padding: 10px 50px 10px 100px;
    white-space: nowrap;
}

nav ul {
    display: flex;
    align-items: center;
    gap: 2vw;
}

nav a {
    color: var(--letter-color-dark);
}

.logo img {
    width: 45px;
}

.nav-list-2 {
    padding-left: 10vw;
}

.nav-list-2 li a {
    font-size: 1.2rem;
}

.language-list {
    display: flex;
    gap: 5px;
    padding: 3px;
    background-color: var(--letter-color-light);
    box-shadow: 0px 4px 10px #0000001a;
    border-radius: 10px;
}

.language-list:hover {
    box-shadow: 0 5px 10px var(--primary-color);
    transform: translateY(-3px);
    transition: 0.6s;
}

.language-list i {
    padding: 5px;
    border-radius: 5px;
}

.appointment-button {
    padding: 5px 10px;
    font-size: 1.1rem;
    background-color: var(--primary-color);
    color: var(--letter-color-light);
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    transition: 0.3s ease-out;
}

.appointment-button:hover {
    background-color: var(--letter-color-light);
    color: var(--letter-color-dark);
}

.open-button {
    justify-self: flex-end;
    margin: 20px 40px;
    padding: 0;
    font-size: 1.5rem;
    color: var(--letter-color-dark)
}

.nav-class {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    transition: 0.6s;
}

.nav-class.sticky {
    background-color: var(--primary-color);
}

.nav-class.sticky a {
    color: var(--letter-color-light);
}

.nav-class.sticky .appointment-button {
    color: var(--letter-color-dark);
    background-color: var(--letter-color-light);
    border: 2px solid var(--letter-color-light);
}

.nav-class.sticky .appointment-button:hover {
    background-color: var(--primary-color);
    color: var(--letter-color-light);
}

.nav-class.sticky .open-button {
    color: var(--letter-color-light)
}

.nav-class.sticky .nav-list-2 li a:hover {
    color: #ffffffdf;
}

.nav-class.sticky .nav-list-2 li a::after {
    background-color: var(--letter-color-light);
}

@media only screen 
and (max-width: 950px) {
    nav {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0; 
        grid-template-areas: 
            "nav-list-1 . open-button"; 
        padding: 25px 0 0 0;
    }

    .nav-list-1 {
        grid-area: nav-list-1;
        margin: 20px 40px;
    }

    .open-button {
        grid-area: open-button;
    }
}

aside {
    display: flex;
    flex-direction: column; 
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    overflow-x: hidden;
    background-color: var(--letter-color-light);
    font-size: 1.2rem;
    opacity: 0;
    transition: 1s;
}

.close-button {
    align-self: flex-end;
    margin: 20px;
    padding: 0 10px;
    font-size: 2.4rem;
    color: var(--letter-color-dark);
}

.close-button:hover {
    background-color: #0000001a;
    transition: 0.7s;
}

aside ul {
    display: inline-block;
    margin-right: 30px;
}

aside li {
    margin: 10px 15px;
    padding: 8px 15px;
    transition: 0.7s;
}

aside li:hover {
    background-color: #0000001a;
}

.sidemenu-buttons {
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 5px;
    margin: 50px 0 0 0;
    box-shadow: 0px 4px 10px #0000001a;
    border-radius: 10px;
}

.sidemenu-buttons:hover {
    box-shadow: 0 5px 10px var(--primary-color);
    transition: 0.6s;
}

.sidemenu-buttons li {
    margin: 0;
    padding: 3px;
}

.sidemenu-buttons li:hover {
    background-color: unset;
}

.sidemenu-buttons i {
    padding: 5px;
    border-radius: 5px;
}

@media only screen 
and (max-width: 450px) {
    aside {
        max-width: 70vw;
    }
}

.nav-list-2 li a {
    position: relative;
}

.nav-list-2 li a:hover {
    color: #2b2d42af;
    transition: 0.6s ease;
}

.nav-list-2 li a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background-color: #2b2d42af;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
}

.nav-list-2 li a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>