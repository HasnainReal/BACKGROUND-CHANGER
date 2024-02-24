var index = 0;

function ChangeColors() {
    var colors = ["#ff6b81", "#ff6348", "#747d8c", "#2ed573", "#eccc68", "#ffa502", "#3742fa", "#cd84f1", "#4b4b4b", "#7efff5", "#2f3640", "#fcb69f", "#a6c1ee", "#96e6a1", "#a6c0fe"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }

}