# The #taboolachallenge
Welcome to the Taboola TelAviv 2015 challenge.

## The Challenge 
The challenge is to create a real time data visualisation worthy of the big screen at Taboola's enterance across all offices worldwide.

The winning team members will be offered a summer internship at Taboola. 

## What You Get:
#### Data
* We've prepared a server that reports clicks done in the Taboola network over the last minute.
The click data is returned in [JSON](https://en.wikipedia.org/wiki/JSON) format fron this the following URL http://52.11.153.209:8080/stats/clicks
* New data is generated every minute, so calling the URL again will return the same data.
* Data format example:
```javascript
{
    generated: 1436868484956, //last updated [epoch time](https://en.wikipedia.org/wiki/Unix_time), this will change once a minute.
    data : [
        {
            sourcePublisher: "tehrantimes", //publisher from which the click originated from
            eventTime: 1436867819000, //event [epoch time](https://en.wikipedia.org/wiki/Unix_time)
            targetItemId: -992066647354435200,  //id of the clicked item.
            targetPublisher: "mossad-il", //publisher which is the target of the click (the advertizer)
            title: "The Mossad wants you!", //the title of the clicked url.
            thumbnailUrl: "http://cdn.timesofisrael.com/uploads/2012/11/Mossad_seal.png",//the url of the target page thumbnail
            url: "http://www.timesofisrael.com/the-mossad-wants-you/",  //a url to the clicked page
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

```
> [epoch time](https://en.wikipedia.org/wiki/Unix_time)

* The server supports an optional ```after``` parameter, which when called with an epoch time, will only return results generated since that time, so if you add the value from the ```generated``` field to the URL, you will only get new data from after it was generated (otherwise you get an empty list of clicks instead ```[]``` )
example: http://52.11.153.209:8080/stats/clicks?after=1436871060323 vs http://52.11.153.209:8080/stats/clicks?after=1536871060323

#### Project Template

Go ahead and clone this repo, then open ```index.html``` in your browser. 

## The Rules
1. You have 24 hours
2. Teams of up to 4 need to sign up by 12:00 with Lichen
3. Each team will present ther work tomorrow at 10:00AM sharp!
4. Projects will be judged based on: Correctness, Coherence, User Experience, and Cool Factor. 
5. Technical stuff: Please wear a name badge while in the office, No smoking in the balcony (you can go on the roof), Please keep the noise level reasonable. 







