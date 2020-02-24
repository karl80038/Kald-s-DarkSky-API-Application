
class Darksky
{
    constructor()
    {
        this.latitude = "59.437222";
        this.longitude = "24.745278";
        this.api_address = "https://api.darksky.net/forecast/";
        this.api_key = "c17ddb7db5d237be2ffcce6db22480d7";
        this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    }

    async retrieveInformation()
    {
        let urlInfo = `${this.proxyUrl}${this.api_address}${this.api_key}/${this.latitude},${this.longitude}?units=si`;

        const infoResponse = await fetch (urlInfo);

        const info = await infoResponse.json();

        return {
            info
        }

    }
}