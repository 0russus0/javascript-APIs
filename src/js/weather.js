const lat = 44.83339;
const lon = -0.61551;
const key = `654fe30faf595ab977787808c42965c6`;

fetch(
	'https://api.openweathermap.org/data/2.5/weather?lat=' +
		lat +
		'&lon=' +
		lon +
		'&appid=' +
		key
)
	.then((reponse) => reponse.json())
	.then((data) => {
		console.log(data);
		let town = data.name;
		let temperature = Math.floor(data.main.temp - 273.15);
		let weather = data.weather[0].main;
		let icon = data.weather[0].icon;
		let wind = Math.floor(data.wind.speed * 1, 609344);
		let date = new Date();
		let currentTime = date.getHours() + ' : ' + date.getMinutes();

		let weatherDiv = `
            <section class="vh-100" style="background: linear-gradient(to left top, #3b82ed, #df6fdc, #ff6c97, #ffa445, #ebe712);">
                <div class="container py-5 h-100">

                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-8 col-lg-6 col-xl-4">

                        <div class="card" style="color: #4B515D; border: none; border-radius: 35px; background: rgba( 255, 255, 255, 0.25 );
                        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                        backdrop-filter: blur( 9.5px );
                        -webkit-backdrop-filter: blur( 9.5px );
                        border-radius: 10px;
                        border: 1px solid rgba( 255, 255, 255, 0.18 );">
                        <div class="card-body p-4">

                            <div class="d-flex">
                            <h6 class="flex-grow-1">${town}</h6>
                            <h6>${currentTime}</h6>
                            </div>

                            <div class="d-flex flex-column text-center mt-5 mb-4">
                            <h6 class="display-4 mb-0 font-weight-bold" style="color: #fff;">${temperature}°C </h6>
                            <span class="medium" style="color: #fff">${weather}</span>
                            </div>

                            <div class="d-flex align-items-center">
                            <div class="flex-grow-1" style="font-size: 1rem;">
                                <div><i class="bi bi-wind" style="color: #fff;"></i> <span class="ms-1"> ${wind} km/h
                                </span></div>
                                <div><i class="bi bi-moisture" style="color: #fff;"></i> <span class="ms-1"> 84% </span>
                                </div>
                                <div><i class="bi bi-sun" style="color: #fff;"></i> <span class="ms-1"> 0.2h </span>
                                </div>
                            </div>
                            <div>
                                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                            </div>
                            </div>

                        </div>
                        </div>

                    </div>
                    </div>

                </div>
            </section>
        `;
		document.getElementById('weather').innerHTML = weatherDiv;
	});
