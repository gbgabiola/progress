# Working with API's

## Objectives

#### Intro to API's
Web API's (Generally communicate via HTTP)
- **Twitter API**, give me all the tweets that mention "ice cream"
- **Facebook API**, send me the current user's profile picture
- **Weather API**, what is the weather in Missoula Montana?
- **Reddit API**, what is the current top post?
- **GooglePlaces API**, what gas stations are near the user?
- **YELP API**, give me 10 restaurants in the zipcode 94110

#### JSON and XML
- XML (Extended Markup Language)
  - is a syntacticly similar to HTML but it does not describe presentation like HTML does
- JSON (JavaScript Object Notation)
  - JSON looks exactly like JavaScript objects, but everything is a string.

```xml
<person>
    <age>21</age>
    <name>Travis</name>
    <city>Los Angeles</city>
</person>
````

```json
{
  "person": {
    "age": "21",
    "name": "Travis",
    "city": "Los Angeles"
  }
}
```


## Learned
- API's (Application Program(ming) Interface) are interfaces for code/computers to talk to one another
- Main reason JSON is more popular nowadays that XML is because a lot of times when making API calls we use JavaScript
- When we get the data back, we can't extract anthing from it, because it's all one string using `JSON.parse()` we turned it into objects so we can access the data from it