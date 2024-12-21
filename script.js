// Функция для запроса геоданных, камеры и микрофона
function requestPermissions() {
    // Запрос геоданных
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let geoData = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            console.log("GeoData:", geoData);

            // Сохраняем данные в localStorage
            localStorage.setItem('geoData', JSON.stringify(geoData));
        }, function(error) {
            console.error("Ошибка получения геоданных:", error);
        });
    } else {
        alert("Геолокация не поддерживается этим браузером.");
    }

    // Запрос доступа к камере и микрофону
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(function(stream) {
            console.log("Доступ к камере и микрофону получен.");
            // Можно здесь обработать поток данных, если нужно
        })
        .catch(function(error) {
            console.error("Ошибка получения доступа к камере и микрофону:", error);
        });

    // Проверка наличия JavaScript в браузере
    let jsSupport = typeof Storage !== "undefined";
    console.log("JavaScript доступен:", jsSupport);
    localStorage.setItem('jsSupport', jsSupport);

    // Пример сохранения данных для обработчиков платежей
    let paymentHandler = "Stripe";  // Просто для примера
    localStorage.setItem('paymentHandler', paymentHandler);
}

// Функция для воспроизведения видео
function playVideo(audioSrc) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}

// Запрашиваем все данные, когда пользователь заходит на сайт
requestPermissions();
