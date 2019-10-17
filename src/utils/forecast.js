const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/10ca2a8fd5cff3ee101886dbcf10dd35/' + latitude + ',' + longitude + '?units=si&lang=en'
    
    request({url, json: true}, (error, {body} ) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another one!', undefined)
        } else{
            callback(undefined, 
                body.daily.data[0].summary +
                     'It is currently ' + body.currently.temperature + ' degrees out.'
                     + 'There is a ' + body.currently.precipProbability + '% chance to rain.'
     
            )
        }
    })

}

module.exports = forecast