const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=d0f5a9983fdac9ca0c54970954ecf4fd&query=' + latitude + ',' + longitude 

    request({ url , json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'Weather is ' + body.current.weather_descriptions[0] + ', It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is at ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast