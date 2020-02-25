class UI {
    constructor()
    {
        this.weather = document.getElementById('weather')
    }

    showInfo(weatherData){
    var upper = weatherData.currently.icon.toUpperCase();
    this.weather.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="font-weight-bold text-info">Summary: ${weatherData.currently.summary}</h3>
                    <canvas id="icon1" width="128" height="128"></canvas>

                    <ul class="list-group mt-3">
                            <li class="list-group-item">Timezone: ${weatherData.timezone}</li>
                            <li class="list-group-item">Icon: ${upper}</li>
                            <li class="list-group-item">Temperature: ${weatherData.currently.temperature} ˚C</li>
                    </ul>
                </div>



            </div>
        </div>
    `;
    }
    setImage(weatherData){
        var skycons = new Skycons({"color": "gray"});
        var image = weatherData.currently.icon;
        var upper = weatherData.currently.icon.toUpperCase();
        
        skycons.set("icon1", upper);
        skycons.play();
    }
}