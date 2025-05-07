<template>
    <main class="bbg relative min-h-screen">
        <header>
            <Nav></Nav>
        </header>
        <!-- main body -->
        <!-- header -->
        <div class="my-5 px-12 py-4">
            <h1 class="text-[clamp(1rem,3vw,3rem)] text-[var(--mainColor)] font-bold xl:text-start ">{{ $t('Askills') }}</h1>
            <p class="backgroundAni font-bold xl:text-start" id="text">{{ currentText }}</p>
        </div>
        <!-- skills cards -->
        <div class="flex justify-center items-center mx-auto">
            <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-12 cards">
                <!-- card 1 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <svg width="40px" height="40px" viewBox="0 0 64 64" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xml:space="preserve" xmlns:serif="http://www.serif.com/"
                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect id="Icons" x="-512" y="-128" width="1280" height="800" style="fill:none;"></rect>
                                <g id="Icons1" serif:id="Icons">
                                    <g id="Strike"> </g>
                                    <g id="H1"> </g>
                                    <g id="H2"> </g>
                                    <g id="H3"> </g>
                                    <g id="list-ul"> </g>
                                    <g id="hamburger-1"> </g>
                                    <g id="hamburger-2"> </g>
                                    <g id="list-ol"> </g>
                                    <g id="list-task"> </g>
                                    <g id="trash"> </g>
                                    <g id="vertical-menu"> </g>
                                    <g id="horizontal-menu"> </g>
                                    <g id="sidebar-2"> </g>
                                    <g id="Pen"> </g>
                                    <g id="Pen1" serif:id="Pen"> </g>
                                    <g id="clock"> </g>
                                    <g id="external-link"> </g>
                                    <g id="hr"> </g>
                                    <g id="info"> </g>
                                    <g id="warning"> </g>
                                    <g id="plus-circle"> </g>
                                    <g id="minus-circle"> </g>
                                    <g id="vue">
                                        <path
                                            d="M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z"
                                            style="fill:#435466;"></path>
                                        <path
                                            d="M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z"
                                            style="fill:#4dba87;"></path>
                                    </g>
                                    <g id="cog"> </g>
                                    <g id="logo"> </g>
                                    <g id="radio-check"> </g>
                                    <g id="eye-slash"> </g>
                                    <g id="eye"> </g>
                                    <g id="toggle-off"> </g>
                                    <g id="shredder"> </g>
                                    <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g>
                                    <g id="react"> </g>
                                    <g id="check-selected"> </g>
                                    <g id="turn-off"> </g>
                                    <g id="code-block"> </g>
                                    <g id="user"> </g>
                                    <g id="coffee-bean"> </g>
                                    <g id="coffee-beans">
                                        <g id="coffee-bean1" serif:id="coffee-bean"> </g>
                                    </g>
                                    <g id="coffee-bean-filled"> </g>
                                    <g id="coffee-beans-filled">
                                        <g id="coffee-bean2" serif:id="coffee-bean"> </g>
                                    </g>
                                    <g id="clipboard"> </g>
                                    <g id="clipboard-paste"> </g>
                                    <g id="clipboard-copy"> </g>
                                    <g id="Layer1"> </g>
                                </g>
                            </g>
                        </svg>
                        <!-- title -->
                        <h1 class="font-bold">Vue.js</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.vue') }}!</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">85%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[85%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Vue 3</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Composition
                                API</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Pinia</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Vue
                                Router</span>
                        </div>
                    </div>
                </div>

                <!-- card 2 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>
                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>
                                <path
                                    d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                                    fill="white"></path>
                            </g>
                        </svg>
                        <!-- title -->
                        <h1 class="font-bold">HTML & CSS</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.html-css') }}</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">98%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[98%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">HTML5</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">CSS3</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Responsive</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Accessibility</span>
                        </div>
                    </div>
                </div>

                <!-- card 3 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>file_type_js</title>
                                <path
                                    d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"
                                    style="fill:#f5de19"></path>
                            </g>
                        </svg>
                        <!-- title -->
                        <h1 class="font-bold">JavaScript</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.javaScript') }}!</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">95%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[95%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">ES6+</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">APIs</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">OOP</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Async/Await</span>
                        </div>
                    </div>
                </div>

                <!-- card 4 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>file_type_tailwind</title>
                                <path
                                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                                    style="fill:#44a8b3"></path>
                            </g>
                        </svg>
                        <!-- title -->
                        <h1 class="font-bold">Tailwind CSS</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.tailwind') }}!</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">90%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[90%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Utility-first</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Responsive</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Customization</span>
                        </div>
                    </div>
                </div>

                <!-- card 5 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>file_type_typescript</title>
                                <path
                                    d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
                                    style="fill:#007acc"></path>
                            </g>
                        </svg>
                        <!-- title -->
                        <h1 class="font-bold">TypeScript</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.typeScript') }}!</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">19%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[19%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Typing</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Interfaces</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Vue
                                Integration</span>
                        </div>
                    </div>
                </div>

                <!-- card 6 -->
                <div class="glass-card w-full flex flex-col p-6 text-white skill-card">
                    <!-- card head -->
                    <div class="flex justify-start items-center gap-6">
                        <!-- icon -->
                        <img src="../assets/artboard2_2x_4x.png" height="40px" width="40px" alt="">
                        <!-- title -->
                        <h1 class="font-bold">PrimeVue</h1>
                    </div>
                    <!-- body -->
                    <div class="my-3">
                        <!-- content -->
                        <p class="text-xs h-[45%]">{{ $t('skillsPage.primeVue') }}!</p>
                        <!-- level line -->
                        <div class="mb-4 mt-6">
                            <div class="flex justify-between items-center">
                                <span class="text-white/80 block mb-1 text-xs">{{ $t('skillsPage.Mastery_level')
                                    }}</span>
                                <span class="text-white/70 mt-1 block text-xs">78%</span>
                            </div>
                            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden ">
                                <div class="level-bar w-[78%] h-full"></div>
                            </div>
                        </div>
                    </div>
                    <!-- footer -->
                    <div>
                        <div class="flex gap-2 absolute bottom-4">
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">UI Components</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Themes</span>
                            <span class="px-1 sm:px-3 bg-white/10 rounded-full text-xs text-white">Data Tables</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
            <Footer />
        </div>
    </main>
</template>

<script setup>
import Nav from '../components/nav.vue'
import Footer from '../components/footer.vue'
import { onMounted, ref } from 'vue';

const words = ['Vue.js', 'HTML & CSS', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'PrimeVue'];
const currentIndex = ref(0);
const currentText = ref('s');
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

</script>


<style>
#text {
    font-size: 28px !important;
}
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.skill-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    transform: rotate(30deg);
    pointer-events: none;
}

.skill-card {
    transition: all 1s;
    opacity: 1;
}

.cards {
    animation: enter 3.5s ease;
}

.skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.4);
}

@keyframes enter {
    0% {
        opacity: 0;
    }

    60% {
        opacity: 1;
    }

    80% {
        opacity: .7;
    }

}

.level-bar {
    background: linear-gradient(135deg, #1b1f3b, var(--mainColor), #fff);
    border-radius: 50px;
    animation: levelup 1.5s ease-in-out;
}

@keyframes levelup {
    0% {
        width: 0;
    }

    60% {
        width: 100%;
    }
}
</style>