const darksky = new Darksky;
const ui = new UI;

darksky.retrieveInformation()
.then(data => {
    console.log(data.info);
    ui.showInfo(data.info);
    ui.setImage(data.info);
})