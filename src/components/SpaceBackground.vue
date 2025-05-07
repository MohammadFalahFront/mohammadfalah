<template>
    <div class="space-container" ref="spaceContainer"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, defineProps } from 'vue';

const props = defineProps({
    starCount: { type: Number, default: 200 },
    shapeCount: { type: Number, default: 30 },
    speed: { type: Number, default: 1 },
    colors: {
        type: Object,
        default: () => ({
            star: '#ffffff',
            cube: ['#3a86ff', '#003049'],
            pyramid: '#ff006e',
            comet: '#ffbe0b',
            ripple: '#4cc9f0'
        })
    }
});

const spaceContainer = ref(null);
let animationFrame;

class SpaceAnimation {
    constructor(container, props) {
        this.container = container;
        this.props = props;
        this.shapes = [];
        this.init();
    }

    init() {
        this.createStars();
        this.createShapes();
        this.setupEventListeners();
        this.animate();
    }

    createStars() {
        for (let i = 0; i < this.props.starCount; i++) {
            const star = document.createElement('div');
            Object.assign(star.style, {
                position: 'absolute',
                borderRadius: '50%',
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: this.props.colors.star,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${this.props.colors.star}`,
                animation: `twinkle ${2 + Math.random() * 2}s infinite`,
                willChange: 'transform, opacity'
            });
            this.container.appendChild(star);
        }
    }

    createShapes() {
        const shapes = ['cube', 'pyramid', 'comet'];
        for (let i = 0; i < this.props.shapeCount; i++) {
            const shape = document.createElement('div');
            this.setShapeProperties(shape, shapes);
            this.shapes.push(shape);
            this.container.appendChild(shape);
        }
    }

    setShapeProperties(shape, shapes) {
        const type = shapes[Math.floor(Math.random() * shapes.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * this.props.speed;
        const size = 10 + Math.random() * 30;

        Object.assign(shape.style, {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s linear',
            transformOrigin: 'center',
            willChange: 'transform, opacity',
            opacity: 0.3 + Math.random() * 0.7
        });

        if (type === 'cube') {
            Object.assign(shape.style, {
                width: `${size}px`,
                height: `${size}px`,
                background: `linear-gradient(45deg, ${this.props.colors.cube[0]}, ${this.props.colors.cube[1]})`,
                boxShadow: `0 0 30px ${this.props.colors.cube[0]}`
            });
        } else if (type === 'pyramid') {
            Object.assign(shape.style, {
                width: '0',
                height: '0',
                borderLeft: `${size/2}px solid transparent`,
                borderRight: `${size/2}px solid transparent`,
                borderBottom: `${size}px solid ${this.props.colors.pyramid}`
            });
        } else if (type === 'comet') {
            Object.assign(shape.style, {
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(${this.props.colors.comet}, transparent)`,
                borderRadius: '50%'
            });
        }

        shape._animation = {
            angle,
            speed,
            time: 0,
            maxTime: 5 + Math.random() * 10
        };
    }

    animate() {
        animationFrame = requestAnimationFrame(() => this.animate());
        this.updateShapes();
    }

    updateShapes() {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

        this.shapes.forEach(shape => {
            if (!shape._animation) return;

            shape._animation.time += 0.016;
            const progress = shape._animation.time / shape._animation.maxTime;
            
            if (progress > 1) {
                this.setShapeProperties(shape, ['cube', 'pyramid', 'comet']);
                return;
            }

            const distance = progress * maxDistance * 1.5;
            const x = Math.cos(shape._animation.angle) * distance;
            const y = Math.sin(shape._animation.angle) * distance;
            const scale = 0.5 + progress * 0.5;
            const opacity = 1 - progress;

            Object.assign(shape.style, {
                transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${progress * 360}deg)`,
                opacity: opacity.toString()
            });
        });
    }

    setupEventListeners() {
        this.clickHandler = (e) => this.createRipple(e);
        this.container.addEventListener('click', this.clickHandler);
        window.addEventListener('resize', this.handleResize);
    }

    createRipple(e) {
        const ripple = document.createElement('div');
        Object.assign(ripple.style, {
            position: 'absolute',
            border: `2px solid ${this.props.colors.ripple}`,
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            animation: 'ripple 1s ease-out',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
        });
        this.container.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    }

    handleResize = () => {
        this.shapes.forEach(shape => this.setShapeProperties(shape, ['cube', 'pyramid', 'comet']));
    }

    destroy() {
        cancelAnimationFrame(animationFrame);
        this.container.removeEventListener('click', this.clickHandler);
        window.removeEventListener('resize', this.handleResize);
    }
}

onMounted(() => {
    const spaceAnimation = new SpaceAnimation(spaceContainer.value, props);
    onUnmounted(() => spaceAnimation.destroy());
});
</script>

<style>
.space-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
    top: 0;
    left: 0;
    /* background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); */
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

@keyframes ripple {
    0% {
        transform: scale(1) translate(-50%, -50%);
        opacity: 1;
    }
    100% {
        transform: scale(20) translate(-50%, -50%);
        opacity: 0;
    }
}
</style>