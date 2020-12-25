fetch('https://restcountries.eu/rest/v2/all')
    .then((data) => {
        return data.json()
    })
    .then((data2) => {

        data2.forEach(item => {

            var container = document.createElement('div');
            container.setAttribute("class", "container");

            var card = document.createElement('div');
            card.setAttribute("class", "card");
            card.style.width = '18rem';

            var cardimg = document.createElement('img');
            cardimg.setAttribute("src", item.flag)
            cardimg.setAttribute("class", "card-img-top")

            var cardbody = document.createElement('div');
            cardbody.setAttribute("class", "card-body");

            var cardtitle = document.createElement('h5');
            cardtitle.innerText = item.name;
            cardtitle.setAttribute("class", "card-title");

            var cardtext = document.createElement('p');
            cardtext.innerText = "Capital: " + item.capital;
            cardtext.setAttribute("class", "card-text");

            var cardtext1 = document.createElement('p');
            cardtext1.innerText = "Region: " + item.region;
            cardtext1.setAttribute("class", "card-text");

            var cardtext2 = document.createElement('p');
            cardtext2.innerText = "Code: " + item.alpha3Code;
            cardtext2.setAttribute("class", "card-text");

            var button = document.createElement('a');
            button.id = "btnn";
            button.innerText = "Click for weather";
            button.setAttribute("class", "btn btn-primary");
            button.addEventListener("click", function () {
                fetch('http://api.openweathermap.org/data/2.5/weather?q=' + item.name + '&appid=ad5859f1860607fc127f4754ff20b47e')
                    .then((data1) => {
                        return data1.json();
                    })
                    .then((data11) => {
                        alert(data11.weather[0].main)

                    })
            })

            cardbody.append(cardtitle, cardtext, cardtext1, cardtext2, button);
            card.append(cardimg, cardbody);

            container.append(card);
            document.body.append(card);

        })

    })
