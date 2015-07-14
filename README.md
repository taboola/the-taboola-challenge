# the #taboolachallenge
Welcome to the Taboola TelAviv 2015 challenge.

## The Challenge 
The challenge is to create a real time data visualisation worthy of the big screen at Taboola's enterance across all offices worldwide.

The winning team members will be offered a summer internship at Taboola. 

## What you get:
#### Data
* we prepared a server that reports clicks done in the taboola network in the last minute.
the click data is returned in [json](https://en.wikipedia.org/wiki/JSON) format fron this the following url http://10.150.20.141:8080/stats/clicks.
* new data is generated every minute, so calling the url again will return the same data.
* data format
```javascript
{
    generated: 1436868484956, //last updated epoch time, this will change once a minute.
    data : [
        {
            sourcePublisher: "tehrantimes", //publisher from which the click originated from
            eventTime: 1436867819000, //event epoch time
            targetItemId: -992066647354435200,  //id of the clicked item.
            targetPublisher: "mossad-il", //publisher which is the target of the click (the advertizer)
            countryName: "Iran, Islamic Republic of",
            countryCode: "IR",
            region: "17",
            city: "Tehran",
            latitude: 35.72928,
            longitude: 50.98589
        },
        {
            sourcePublisher: "usatoday",
            //...
        },
        //...
    ]
}

```
> [epoch time](https://en.wikipedia.org/wiki/Unix_time)
* the server supports an optional ```after``` parameter, which when called with an epoch time, will only return results generated after that time, so if you add the value from the ```generated``` field to the url, you will only get new data after it was generated (otherwise you get an ampty list of clicks instead ```[]``` )
example: http://10.150.20.141:8080/stats/clicks?after=1436871060323 vs http://10.150.20.141:8080/stats/clicks?after=1536871060323
#### Project template
go ahead an clone this repo, then open ```index.html``` in your browser. 

## The Rules
1. You have 24 hours
2. Teams of up to 4 need to sign up by 12:00 with Lichen
3. Each team will present ther work tomorrow at 10:00AM sharp!
4. Projects will be judged based on: Correctness, Coherence, User Experience, and Cool Factor. 
5. Technical stuff: Please wear a name badge when in the office, No smoking in the balcony (you can go on the roof), Please keep the noise level reasonable. 







