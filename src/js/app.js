new Vue({
    el: '#footer', // Target the existing footer element
    data: {
        footerText: 'Tartu Ülikool, Computer Science 2024'
    },
    template: '<p>{{ footerText }}</p>' // Render the text using data property
})