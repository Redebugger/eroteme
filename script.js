document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('connectionCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawLines();
    }

    function drawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const bubbles = [
            document.getElementById('bubble1'),
            document.getElementById('bubble2'),
            document.getElementById('bubble3'),
            document.getElementById('bubble4')
        ];

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(getCenter(bubbles[0]).x, getCenter(bubbles[0]).y);
        ctx.lineTo(getCenter(bubbles[1]).x, getCenter(bubbles[1]).y);
        ctx.lineTo(getCenter(bubbles[3]).x, getCenter(bubbles[3]).y);
        ctx.lineTo(getCenter(bubbles[2]).x, getCenter(bubbles[2]).y);
        ctx.closePath();
        ctx.stroke();
    }

    function getCenter(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Use the data to populate the bubbles or figure1 content as needed
            console.log(data);
        });
});
