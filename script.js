    let a;
            let data;
            let times;
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // console.log(times)
        setInterval(function () {
            a = new Date();
            data = a.toLocaleDateString(undefined,options);
            times = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            document.getElementById("time").innerText = times + " on " + data;
        }, 500);
