//const transformed = window.getComputedStyle(currentSlide).getPropertyValue('transform').match(/(-?[0-9\.]+)/g) || [0, 0, 0, 0, 0, 0]
//const [scaleX, skewY, skewX, scaleY, translateX, translateY] = transformed


/*
slides.forEach((slide, i) => {
    const { clientWidth: slideWidth, clientHeight: slideHeight } = slide
    slide.style.position = 'absolute'

    containerWidth += slideWidth
    slide.style.left = (containerWidth - slideWidth) + 'px'

    maxWidth = Math.max(maxWidth, slideWidth)
    maxHeight = Math.max(maxHeight, slideHeight)
})
container.style.height = maxHeight + 'px'
view.style.width = maxWidth + margin + 'px'
*/


const view = document.querySelector('.view')
const container = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

// set style of container, slides and track

let lastSlideWidth
let firstSlideWidth
let containerWidth = 0

let margin = 20
let viewPadding = 30

const track = []
window.addEventListener('load', e => {
    let maxHeight = 0
    let maxWidth = 0

    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i]
        const slideWidth = slide.clientWidth + margin
        const slideHeight = slide.clientHeight

        maxHeight = Math.max(slideHeight)
        maxWidth = Math.max(slideWidth)

        track[i] = containerWidth
        slide.style.position = 'absolute'
        slide.style.left = containerWidth + 'px'

        containerWidth += slideWidth

        if (i === 0) {
            firstSlideWidth = slideWidth
        }

        if (i === slides.length - 1) {
            lastSlideWidth = slideWidth
        }
    }

    container.style.position = 'relative'
    container.style.width = containerWidth + 'px'
    container.style.height = maxHeight + 'px'

    track.push(containerWidth)
    track.unshift(-lastSlideWidth)

    if (autoplay) {
        moveLeft()
    }

    view.style.width = maxWidth + 2 * margin + 2 * viewPadding + 'px'
    container.style.left = (2 * viewPadding) + 'px'
    console.log(track)
})

// animation 

let timerId
let autoTimeout
let timestamp
let current = 1
let transformingX = 0
let beforeDestination = 0
let preventSkipping = false // true일 경우 duration 동안 다음 슬라이드로 스킵 불가능.
let autoplay = true;
let autoDelay = 2000
let autoDirection = 'right'


const DURATION = 400

const setLastImageToFirst = () => {
    slides[slides.length - 1].style.left = -lastSlideWidth + 'px'
}

const resetLastImage = () => {
    current = track.length - 2
    slides[slides.length - 1].style.left = track[track.length - 2] + 'px'
    container.style.transform = `translate3d(${-track[track.length - 2]}px,0,0)`
}


const moveRight = function (e) {
    if (autoplay && e) {
        clearTimeout(autoTimeout)
    }

    if (current === 0) {
        return;
    }

    if (this.isAnimating) {
        if (preventSkipping) {
            return;
        }
        current--
        beforeDestination = transformingX
        timestamp = undefined
        return
    }

    current--
    beforeDestination = track[current + 1]

    this.isAnimating = true

    const animate = (currentTime) => {

        if (timestamp === undefined) {
            timestamp = currentTime
        }

        const elapsed = currentTime - timestamp

        const currentDestination = track[current]
        const offset = currentDestination - beforeDestination

        transformingX = Math.max(beforeDestination + offset * elapsed / DURATION, currentDestination)

        container.style.transform = `translate3d(${-transformingX}px, 0,0)`

        if (transformingX < track[track.length - 2]) {
            slides[0].style.left = containerWidth + 'px'
        }

        if (transformingX <= track[2] && transformingX > track[0]) {
            slides[0].style.left = '0px'
        }

        if (transformingX <= track[1]) {
            setLastImageToFirst()
        }

        if (transformingX === track[0]) {
            resetLastImage()
        }


        if (elapsed < DURATION) {
            timerId = requestAnimationFrame(animate)
        } else if (elapsed >= DURATION) { // 애니메이션이 종료됐을 떄
            timestamp = undefined
            this.isAnimating = false
            if (autoplay) {
                autoTimeout = setTimeout(autoDirection === 'right' ? moveLeft : moveRight, autoDelay)
            }

            return
        }
    }

    timerId = requestAnimationFrame(animate)
}

const setFirstImageToLast = () => {
    slides[0].style.left = containerWidth + 'px'

}

const resetFirstImage = () => {
    current = 1
    slides[0].style.left = '0px'
    container.style.transform = `translate3d(0,0,0)`
}


const moveLeft = function (e) {

    if (autoplay && e) {
        clearTimeout(autoTimeout)
    }

    if (current === track.length - 1) {
        return;
    }

    if (this.isAnimating) {
        if (preventSkipping) {
            return;
        }
        current++
        beforeDestination = transformingX
        timestamp = undefined
        return
    }

    current++
    beforeDestination = track[current - 1]

    this.isAnimating = true

    const animate = (currentTime) => {

        if (timestamp === undefined) {
            timestamp = currentTime
        }

        const elapsed = currentTime - timestamp

        const currentDestination = track[current]
        const offset = currentDestination - beforeDestination

        transformingX = Math.min(beforeDestination + offset * elapsed / DURATION, currentDestination)
        container.style.transform = `translate3d(-${transformingX}px, 0,0)`

        if (transformingX >= track[2] && transformingX < track[track.length - 1]) {
            slides[slides.length - 1].style.left = track[track.length - 2] + 'px'
        } else {
            slides[slides.length - 1].style.left = track[0] + 'px'
        }

        if (transformingX > track[2] + viewPadding) {
            setFirstImageToLast()
        }
        if (transformingX === track[track.length - 1]) {
            resetFirstImage()
        }


        if (elapsed < DURATION) {
            timerId = requestAnimationFrame(animate)
        } else if (elapsed >= DURATION) { // 애니메이션이 종료됐을 떄
            timestamp = undefined
            this.isAnimating = false
            if (autoplay) {
                autoTimeout = setTimeout(autoDirection === 'right' ? moveLeft : moveRight, autoDelay)
            }
            return
        }
    }

    timerId = requestAnimationFrame(animate)
}


prev.addEventListener('click', moveRight)
next.addEventListener('click', moveLeft)


let transform = 0
let grabbedTime
let initialPosition
let grabbing = false

const grabStart = (e) => {
    grabbing = true
    switch (e.type) {
        case 'touchstart':
            initialPosition = e.touches[0].clientX
            break;
        case 'mousedown':
            initialPosition = e.pageX
            break;
    }

    grabbedTime = new Date()
}


let offset;
const grabMove = (e) => {
    if (grabbing) {
        let currentPosition;

        switch (e.type) {
            case 'touchmove':
                console.log('hi')
                currentPosition = e.touches[0].clientX
                console.log(e.touches[0].clientX)
                break;
            case 'mousemove':
                currentPosition = e.pageX
                break;
        }

        offset = currentPosition - initialPosition

        const timeOffset = new Date() - grabbedTime

        let accelerate = 0.6

        if (timeOffset < 100) {
            accelerate = 4
        } else if (timeOffset < 200) {
            accelerate = 3
        } else if (timeOffset < 300) {
            accelerate = 2
        } else if (timeOffset < 400) {
            accelerate = 1
        }

        offset = offset * accelerate;
    }
}

const grabEnd = (e) => {
    if (grabbing) {
        let offsetCount = Math.floor(Math.abs(offset) / 200) + 1 // 200 > friction으로 수정할 것
        if (offsetCount > track.length - 1) {
            offsetCount = track.length - 1
        }

        const move = offset < 0 ? moveLeft.bind(next, 'event') : moveRight.bind(prev, 'event')

        for (let i = 0; i < offsetCount; i++) {
            setTimeout(move, 100 * i)
        }

        grabbing = false

    }

}

if (window.pointerEvent) {

    view.addEventListener('pointerdown', grabStart)
    view.addEventListener('pointermove', grabMove)
    window.addEventListener('pointerup', grabEnd)
} else {

    view.addEventListener('mousedown', grabStart)
    view.addEventListener('mousemove', grabMove)
    window.addEventListener('mouseup', grabEnd)

    view.addEventListener('touchstart', grabStart)
    view.addEventListener('touchmove', grabMove)
    window.addEventListener('touchend', grabEnd)
}

prev.addEventListener('click', moveRight)
next.addEventListener('click', moveLeft)



