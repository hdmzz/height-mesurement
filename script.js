function main()
{
    window.addEventListener( "deviceorientation", onOrientationChange );

    navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}}).then((signal) => {
        const video = document.getElementById("myVideo");
        video.srcObject = signal;
        video.play();
    })
    .catch((err) => {
        alert(err);
    })
};

function onOrientationChange( e )
{
    let angle = e.beta - 90;

    if ( angle < 0 ) {
        angle = 0;
    };

    const distToTree = document.getElementById("mySlider").value;
    document.getElementById("myLabel").innerText = "distance to aim: " + distToTree + " m;";
    const height = Math.tan( angle * Math.PI / 180 ) * distToTree;
    document.getElementById("heightInfo").innerText = height.toFixed(1) + "m (" + angle.toFixed(1) + " deg;)";    
};
