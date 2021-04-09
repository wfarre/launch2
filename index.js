var dueDate = new Date(2021, 04, 08, 00, 00, 00);

var remainingTime = [];


console.log(dueDate);

function changeTime() {
    const todayDate = new Date();
    const diffDate = Math.abs(dueDate - todayDate);
    const totalSecs = Math.floor(diffDate / 1000);

    const days = Math.floor(totalSecs / (60 * 60 * 24));
    const hours = Math.floor((totalSecs % (60 * 60 * 24)) / (60 * 60));
    const mins = Math.floor(((totalSecs % (60 * 60 * 24)) % (60 * 60)) / (60));
    const secs = Math.floor((((totalSecs % (60 * 60 * 24)) % (60 * 60)) % (60)));

    const remainingTimeZ = [days, hours, mins, secs];

    const remainingTime0 = [];


    remainingTimeZ.forEach(function (time) {
        if (time < 10) {
            time = "0" + time;

        }
        remainingTime0.push(time);
    });

    const [d, h, m, s] = remainingTime0;

    document.querySelector(".days .time-box--time--text").innerHTML = d;
    document.querySelector(".hours .time-box--time--text").innerHTML = h;
    document.querySelector(".minutes .time-box--time--text").innerHTML = m;
    document.querySelector(".seconds .time-box--time--text").innerHTML = s;

    for (i = 0; i < remainingTimeZ.length; i++) {
        let time;
        if (remainingTime[i] !== remainingTimeZ[i]) {
            switch (i) {
                case 0:
                    time = "days";
                    var box = document.querySelector("." +time+ " .slide--up");
                    box.classList.add("slide--up--animation");
                    break;

                case 1:
                    time = "hours";
                    box = document.querySelector("." +time+ " .slide--up");
                    box.classList.add("slide--up--animation");

                    break;

                case 2:
                    time = "minutes";
                    box = document.querySelector("." +time+ " .slide--up");
                    box.classList.add("slide--up--animation");

                    break;
                case 3:
                    time = "seconds";
                    box = document.querySelector("." +time+ " .slide--up");
                    box.classList.add("slide--up--animation");

                    break;
                default:console.log(i);
                    break;
            }
        }
    }

    const arrayBoxUp = document.querySelectorAll(".slide--up");

    function remove() {
        arrayBoxUp.forEach(function (box) {
            box.classList.remove("slide--up--animation");
        })
    }

    setTimeout(remove, 900);



    return remainingTime = remainingTimeZ;





};


setInterval(changeTime, 1000);