<template>
    <main class="h-[100vh] bbg relative z-[1]">
        <header class="relative z-10">
            <Nav />
        </header>
        <section
            class="content flex flex-col lg:gap-0 gap-8 lg:flex-row lg:mt-60 lg:justify-between justify-start mt-30 items-center p-[0] lg:px-[10%] text-white">
            <!-- main image -->
            <div class="myphoto rounded-full relative xl:w-[400px] xl:h-[400px] mt-8 xl:mt-0"></div>
            <!-- main content -->
            <div class="scale-110 max-w-[50%] Maincontent flex items-center flex-col">
                <h1
                    class="lg:text-[clamp(1rem,2vw,2.8rem)] text-[clamp(1rem,2.8vw,2rem)] mb-[-10px] font-bold  xl:text-start">
                    {{ $t('homePage.MOHAMMAD_AWAD_FALAH_DEVELOPER') }}</h1>
                <h1 class="lg:text-[clamp(2rem,4.5vw,4.5rem)] text-[clamp(2rem,4.5vw,4rem)] backgroundAni font-bold xl:text-start "
                    id="text">{{ currentText }}</h1>
                <p class=" text-[.7rem] text-center">{{ $t('homePage.aboutme') }}</p>
            </div>
        </section>
        <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
            <Footer />
        </div>
        <div class="media z-auto w-[100%] mt-8 absolute top-16">
            <ul class="flex justify-evenly gap-6 items-center lg:justify-center" style="z-index: 2;">
                <li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center ">
                    <a href="https://web.facebook.com/mohamad.flah.988" target="_blank"> <svg
                            xmlns="http://www.w3.org/2000/svg" width="9" viewBox="0 0 224 432">
                            <path fill="#ffffff"
                                d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z">
                            </path>
                        </svg></a>
                </li>
                <li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center ">
                    <a href="https://www.instagram.com/sa.dp1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                            width="25" viewBox="0 0 24 24">
                            <path fill="#ffffff"
                                d="M12 7.9a4.1 4.1 0 1 0 4.1 4.1A4.09 4.09 0 0 0 12 7.9Zm0 6.77A2.67 2.67 0 1 1 14.67 12A2.67 2.67 0 0 1 12 14.67Zm5.23-6.94a1 1 0 1 1-1-1a1 1 0 0 1 1 1Zm2.71 1a4.71 4.71 0 0 0-1.29-3.35a4.71 4.71 0 0 0-3.35-1.32C14 4 10 4 8.7 4.06a4.73 4.73 0 0 0-3.35 1.29A4.71 4.71 0 0 0 4.06 8.7C4 10 4 14 4.06 15.3a4.71 4.71 0 0 0 1.29 3.35a4.73 4.73 0 0 0 3.35 1.29c1.32.08 5.28.08 6.6 0a4.71 4.71 0 0 0 3.35-1.29a4.71 4.71 0 0 0 1.29-3.35c.06-1.3.06-5.3 0-6.6Zm-1.7 8a2.7 2.7 0 0 1-1.52 1.52a18 18 0 0 1-4.72.32a17.91 17.91 0 0 1-4.71-.32a2.7 2.7 0 0 1-1.52-1.52c-.42-1.06-.33-3.56-.33-4.72s-.09-3.67.33-4.72a2.65 2.65 0 0 1 1.52-1.53A17.91 17.91 0 0 1 12 5.44a18 18 0 0 1 4.72.32a2.7 2.7 0 0 1 1.52 1.52c.42 1.06.32 3.56.32 4.72s.1 3.67-.32 4.72Z">
                            </path>
                        </svg></a>
                </li>
                <li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center ">
                    <a href="https://github.com/MohammadFalahFront" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                            width="20" viewBox="0 0 432 416">
                            <path fill="#ffffff"
                                d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z">
                            </path>
                        </svg></a>
                </li>
                <li class="glowing-circle w-[55px] h-[55px] rounded-full flex justify-center items-center ">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 750 850">
                            <path fill="#ffffff"
                                d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58zM0 750h165V214H0v536zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13z">
                            </path>
                        </svg></a>
                </li>
            </ul>
        </div>
        <SpaceBackground
  :star-count="100"
  :shape-count="100"
  :colors="{
    star: '#f0f0f0',
    cube: ['var(--blue)', 'var(--mainColor)'],
    pyramid: 'var(--dark)',
    comet: 'var(--red)',
    ripple: 'var(--blue)'
  }"
/>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
import SpaceBackground from '../components/SpaceBackground.vue'

const words = ['Frontend Dev', 'Web Designer', 'Performance', 'Interactivity', 'Creativity'];
const currentIndex = ref(0);
const currentText = ref('');
const isDeleting = ref(false);

const typeSpeed = 150;
const deleteSpeed = 50;
const pauseDuration = 1000;

function startTyping() {
    const currentWord = words[currentIndex.value];

    if (!isDeleting.value) {
        currentText.value = currentWord.slice(0, currentText.value.length + 1);

        if (currentText.value === currentWord) {
            setTimeout(() => {
                isDeleting.value = true;
                startTyping();
            }, pauseDuration);
            return;
        }
    } else {
        currentText.value = currentText.value.slice(0, -1);

        if (currentText.value === '') {
            isDeleting.value = false;
            currentIndex.value = (currentIndex.value + 1) % words.length;
            setTimeout(startTyping, typeSpeed);
            return;
        }
    }

    setTimeout(startTyping, isDeleting.value ? deleteSpeed : typeSpeed);
}

onMounted(startTyping);


window.addEventListener('resize', () => location.reload());

</script>
<style>
body,
html {
    overflow-x: hidden !important;
}

.glowing-circle {
    border: 3px solid var(--mainColor);
    background: var(--mainColor);
    box-shadow: 0 0 15px var(--mainColor), 0 0 30px var(--mainColor);
    animation: pulseGlow 2s infinite alternate;
    transition: background .5s;
}

.glowing-circle:hover {
    background: var(--mainColor);
}

li:hover {
    cursor: pointer;
    transition: all .3s;
    transform: scale(1.2);
}

@keyframes pulseGlow {
    0% {
        box-shadow: 0 0 10px var(--mainColor), 0 0 20px var(--mainColor);
        background-color: var(--mainColor);
    }

    100% {
        box-shadow: 0 0 20px var(--mainColor), 0 0 40px var(--mainColor);
        background-color: transparent;
    }
}

.myphoto {
    background: url('../assets/myPhoto.jpg');
    background-size: cover;
    min-height: 300px;
    min-width: 300px;
    transition: all .5s;
}

.myphoto::after {
    content: '';
    width: 105%;
    height: 105%;
    position: absolute;
    right: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(50%, -50%);
    z-index: -1;
    background: linear-gradient(90deg, #002f2f, var(--mainColor), #fff);
    background-size: 400% 400%;
    animation: gradientAnimation 5s ease infinite;
    box-shadow: 0 0 10px var(--mainColor), 0 0 20px var(--mainColor);
    animation: start 1s;
}

#text {
    font-size: 2.5rem;
    position: relative;
    min-width: 300px;
}

#text::after {
    content: "|";
    animation: cursor 1s infinite;
    font-weight: 200;
}

@keyframes cursor {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

.content {
    position: relative;
    color: #fff;
    text-align: center;
    font-family: 'Arial', sans-serif;
}

.Maincontent {
    animation: start2 1s ease-in-out;
}

@keyframes start {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes start2 {
    from {
        transform: translateX(900px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
