<template>
    <div class="flex justify-center w-full h-[50px] bg-transparent text-[var(--mainColor)] bgglass">
        <nav class="flex justify-between items-center  h-full w-[90%]">
            <div class="meniu flex-col h-full w-[30px] justify-center gap-2 hidden cursor-pointer"
                @click="open = !open">
                <span class="w-[20px] bg-[var(--mainColor)] h-0.5 line"></span>
                <span class="w-[15px] bg-[var(--mainColor)] h-0.5 line"></span>
                <span class="w-[25px] bg-[var(--mainColor)] h-0.5 line"></span>
            </div>
            <!-- logo my name -->
            <div class="font-bold text-xl logo w-[30%] flex justify-center items-center gap-1"><img
                    src="../assets/logo.png" width="8%" alt="my logo">MOHAMMAD FALAH</div>
            <!-- sections -->
            <ul class="font-bold flex justify-evenly w-[40%] pages" :class="currentLanguage == 'ar' ? 'ar' : ''"
                v-if="open">
                <li><a href="/">{{ $t('home') }}</a></li>
                <li><a href="/skills">{{ $t('skills') }}</a></li>
                <li><a href="#projects">{{ $t('projects') }}</a></li>
                <li><a href="#about">{{ $t('about') }}</a></li>
            </ul>
            <!-- media -->
            <div class="w-[30%] media">
                <ul class="flex justify-end gap-6 items-center">
                    <li id="colors"
                        class="glowing-circle w-[35px] h-[35px] rounded-full flex justify-center items-center]"
                        @click="colors = !colors">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M10.5 10.5c.002 2.762-2.237 5-5 5s-5.002-2.238-5-5c-.002-2.76 2.237-5 5-5s5.002 2.24 5 5z"
                                    color="#feecec" fill="#ff15a1" stroke="#ffffff" stroke-width=".49999682600000006">
                                </path>
                                <path
                                    d="M8 1.401a4.998 4.998 0 0 0-2.488 9.334c-.004-.078-.012-.155-.012-.234a4.998 4.998 0 0 1 7.488-4.334A4.994 4.994 0 0 0 8 1.4z"
                                    fill="#1583ff"></path>
                                <path
                                    d="M10.5 5.5a4.998 4.998 0 0 0-5 5c0 .08.008.157.012.235A4.998 4.998 0 0 0 13 6.401c0-.079-.008-.156-.012-.234A4.975 4.975 0 0 0 10.5 5.5z"
                                    fill="#00cf2d"></path>
                                <path
                                    d="M12.988 6.167c.004.078.012.155.012.234a4.998 4.998 0 0 1-7.489 4.334 4.994 4.994 0 0 0 4.989 4.766 4.998 4.998 0 0 0 2.488-9.334z"
                                    fill="#f8ff15"></path>
                                <path
                                    d="M5.512 10.735a4.996 4.996 0 0 0 2.486 4.093 4.987 4.987 0 0 0 2.49-4.091A4.978 4.978 0 0 1 8 11.4a4.975 4.975 0 0 1-2.488-.666z"
                                    fill="#ef0000"></path>
                                <path
                                    d="M7.998 6.173A4.991 4.991 0 0 0 5.5 10.5c0 .079.008.156.012.234a4.978 4.978 0 0 0 4.977.002c.003-.079.011-.157.011-.236a4.99 4.99 0 0 0-2.502-4.328z"
                                    fill="#383027"></path>
                                <path
                                    d="M5.5 5.5c-.91 0-1.76.247-2.494.67a4.99 4.99 0 0 0 2.506 4.564c-.004-.077-.012-.154-.012-.233a4.991 4.991 0 0 1 2.498-4.328A4.975 4.975 0 0 0 5.5 5.5z"
                                    fill="#5100cc"></path>
                                <path
                                    d="M8 1.401a4.998 4.998 0 0 0-4.994 4.77 4.998 4.998 0 1 0 4.992 8.658 4.998 4.998 0 1 0 4.99-8.662A4.994 4.994 0 0 0 8 1.4z"
                                    fill="none" stroke="#ffffff" stroke-width=".9999936520000001"></path>
                            </g>
                        </svg>
                    </li>
                    <div v-if="colors" :class="currentLanguage == 'ar' ? 'ar' : ''"
                        class="bg-[#000] animate-pulse absolute top-15  z-[2000] min-w-[100px] h-30px p-[10px] rounded-4xl flex items-center justify-center gap-2">
                        <span class="rounded-full w-[20px] h-[20px] bg-[#92dbff] cursor-pointer"
                            @click="changecolor('#92dbff')"></span>
                        <span class="rounded-full w-[20px] h-[20px] bg-[#ff039a] cursor-pointer"
                            @click="changecolor('#ff039a')"></span>
                        <span class="rounded-full w-[20px] h-[20px] bg-[#7d0505] cursor-pointer"
                            @click="changecolor('#7d0505')"></span>
                        <span class="rounded-full w-[20px] h-[20px] bg-[#6d1d9f] cursor-pointer"
                            @click="changecolor('#6d1d9f')"></span>
                        <span class="rounded-full w-[20px] h-[20px] bg-[#35c00e] cursor-pointer"
                            @click="changecolor('#35c00e')"></span>
                        <span class="rounded-full w-[20px] h-[20px] bg-[#002f2f] cursor-pointer"
                            @click="changecolor('#002f2f')"></span>
                    </div>
                    <li class="glowing-circle w-[35px] h-[35px] rounded-full flex justify-center items-center "
                        @click="changelang">
                        <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                            fill="#ffffff" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#CCCCCC" stroke-width="3.072"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path style="fill:#FFFFFF;"
                                    d="M185.802,105.689h277.06c21.364,0,38.688,17.32,38.688,38.689v318.482 c0.001,21.366-17.318,38.69-38.687,38.69H280.479L185.802,105.689z">
                                </path>
                                <polygon style="fill:#0011ff;" points="361.15,406.306 280.479,501.545 248.789,406.306 ">
                                </polygon>
                                <path style="fill:#0011ff;"
                                    d="M361.15,406.306H49.137c-21.364,0-38.688-17.32-38.688-38.69V49.138 c0-21.365,17.32-38.689,38.688-38.689h182.387L361.15,406.306z">
                                </path>
                                <path
                                    d="M462.863,95.24H270.286L241.455,7.197C240.049,2.904,236.042,0,231.524,0H49.137C22.043,0,0,22.043,0,49.138v318.478 c0,27.095,22.043,49.138,49.137,49.138h192.115l29.311,88.095c1.42,4.269,5.415,7.15,9.914,7.15h182.384 C489.957,512,512,489.957,512,462.862V144.38C512,117.285,489.957,95.24,462.863,95.24z M20.898,367.616V49.138 c0-15.571,12.668-28.24,28.239-28.24h174.814l122.783,374.96H49.137C33.566,395.857,20.898,383.188,20.898,367.616z M411.358,241.371c-5.469,11.908-15.308,30.468-31.079,51.099c-4.545-5.928-8.505-11.556-11.901-16.717 c-9.028-13.722-15.237-25.776-19.184-34.381L411.358,241.371L411.358,241.371z M326.41,241.371 c3.62,8.944,11.118,25.394,24.047,45.165c4.473,6.841,9.853,14.435,16.206,22.461c-5.947,6.704-12.52,13.493-19.759,20.226 l-28.768-87.852H326.41z M263.278,416.755h75.328l-54.084,63.85L263.278,416.755z M491.102,462.862 c0,15.571-12.668,28.24-28.239,28.24H303.018l65.929-77.834c1.657-1.849,2.673-4.284,2.673-6.961c0-1.378-0.266-2.695-0.751-3.9 l-16.85-51.458c9.785-8.559,18.525-17.252,26.302-25.839c17.544,19.367,40.485,39.927,69.799,57.876 c1.703,1.043,3.586,1.539,5.446,1.539c3.516,0,6.951-1.775,8.921-4.994c3.013-4.921,1.466-11.354-3.456-14.367 c-28.471-17.434-50.493-37.492-67.082-56.152c23.199-29.342,35.285-55.429,40.202-67.64h30.828c5.77,0,10.449-4.678,10.449-10.449 s-4.679-10.449-10.449-10.449h-74.907V202.71c0-5.771-4.679-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v17.763h-57.882 l-34.165-104.335h185.734c15.571,0,28.239,12.669,28.239,28.24v318.483H491.102z">
                                </path>
                                <path
                                    d="M147.087,286.44c42.444,0,76.974-34.531,76.974-76.974c0-5.771-4.678-10.449-10.449-10.449h-59.202 c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h47.777c-4.91,25.944-27.75,45.628-55.1,45.628 c-30.921,0-56.077-25.156-56.077-56.077s25.156-56.077,56.077-56.077c13.315,0,26.223,4.747,36.343,13.368 c4.391,3.742,10.988,3.215,14.73-1.178c3.742-4.394,3.214-10.988-1.179-14.73c-13.897-11.839-31.617-18.358-49.894-18.358 c-42.444,0-76.974,34.531-76.974,76.974C70.113,251.909,104.642,286.44,147.087,286.44z">
                                </path>
                                <path
                                    d="M201.622,351.434h-4.678c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h4.678 c5.77,0,10.449-4.678,10.449-10.449C212.071,356.112,207.392,351.434,201.622,351.434z">
                                </path>
                                <path
                                    d="M163.141,351.434H61.649c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h101.492 c5.77,0,10.449-4.678,10.449-10.449C173.59,356.112,168.911,351.434,163.141,351.434z">
                                </path>
                            </g>
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { locale } = useI18n();
const currentLanguage = ref(locale.value);

const colors = ref(false);
let open = ref(true);
onMounted(() => {
    locale.value = localStorage.getItem('lang');
    document.documentElement.style.setProperty('--mainColor', localStorage.getItem('color'));
    document.body.style.direction = localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr';
    if (innerWidth < 420) {
        open.value = false;
    } else {
        open.value = true;
    }
})
const changecolor = (newColor) => {
    document.documentElement.style.setProperty('--mainColor', newColor);
    localStorage.setItem('color', newColor)
    colors.value = false;
}

const changelang = () => {
    currentLanguage.value = currentLanguage.value == 'ar' ? 'en' : 'ar';
    locale.value = currentLanguage.value;
    localStorage.setItem('lang', locale.value)
    document.body.style.direction = currentLanguage.value == 'ar' ? 'rtl' : 'ltr';
}
</script>

<style>
.bgglass {
    background-color: #ffffff16;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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

.meniu:hover span {
    animation: menu 1.5s infinite forwards;
}

.meniu:hover .line:nth-child(1) {
    animation-delay: 0s;
}

.meniu:hover .line:nth-child(2) {
    animation-delay: 0.2s;
}

.meniu:hover .line:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes menu {
    0% {
        width: 10px;
    }

    30% {
        width: 30px;
    }

    60% {
        width: 0px;
    }

    100% {
        width: 10px;
    }
}

@keyframes comefromside {
    0% {
        left: -500px;
    }

    50% {
        left: 20px;
    }

    100% {
        left: 0;
    }
}

@keyframes comefromside2 {
    0% {
        right: -500px;
    }

    50% {
        right: 20px;
    }

    100% {
        right: 0;
    }
}

@keyframes changeColor {

    0%,
    40%,
    80% {
        color: var(--red);
    }

    20%,
    60% {
        color: var(--mainColor);
    }

    100% {
        color: white;
    }
}

.pages li {
    animation: changeColor 1.5s;
}

@media (max-width: 770px) {
    .pages {
        font-size: 12px;
        width: 50%;
        animation: comefromside .5s;
    }

    .logo {
        font-size: clamp(1rem, 2.5vw, 2rem);
        width: 50%;
    }
}

.pages li {
    color: white;
    position: relative;
}

@media (max-width: 520px) {
    .pages {
        position: absolute;
        height: 180px;
        top: 55px;
        left: 0px;
        display: flex;
        flex-direction: column;
        background: #282832d9;
        width: 30%;
        padding-left: 8px;
        font-size: .83rem;
        z-index: 10000;
    }

    .pages.ar {
        left: auto;
        right: 0px;
        animation: comefromside2 .5s;
    }

    .meniu {
        display: flex;
    }



    .pages li:hover {
        color: var(--mainColor);
        transform: none;
    }

    .pages li::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: var(--mainColor);
        bottom: -4px;
        right: 0;
        transition: width 0.4s ease;
    }

    .pages li:hover::after {
        width: 100%;
        left: 0;
        right: auto;
    }

    .logo {
        width: 90%;
        text-align: center;
        font-size: 1.2rem;
    }
}
</style>
