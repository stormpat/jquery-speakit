# jQuery speakIt

A simple jQuery wrapper for the [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)

### Warning!

The API is not standardized, yet. So i dont recommend using this in any application that depends on it,
business-logic wise. Its best used for small and non-serious stuff.

Also, [browser support](http://caniuse.com/web-speech) is minimal at this time.

Also not that some languages, and voices dont support various commands. Eg. Some voices do not support pitch,
volume and rate.

### Usage

Select the part you want "spoken" with a id or class.

```html
  <!-- somewhere in your html -->
  <p id="speak">I am a really sad panda-bear!</p>
```
Pump up the volume!
```js
$('#speak').speakIt({}).speak();
```

### Options

```js
var speaker = $('#speak').speakIt({

  rate: 0.5,
  pitch: 1,
  volume: 1,
  voiceURI = 'native',
  lang = "set-language", // See below for valid lang options

  // Events triggered
  onstart: function(speech) {
    // handle callback
  },
  onend: function(speech) {
    // handle callback
  },
  onpause: function(speech) {
    // handle callback
  },
  onresume: function(speech) {
    // handle callback
  },
  onerror: function(speech) {
    // handle callback
  },
  onboundary: function(speech) {
    // handle callback
  },
  onmark: function(speech) {
    // handle callback
  }
}).speak();
```

### Pause and Resume

You can pause the current speech and resume it. The above callbacks
are there to help.

```js
// Pause after 1 second, continue after 2
setTimeout(function() {
    speaker.pause();
    setTimeout(function() {
      speaker.resume();
    }, 2000);
}, 1000);
```

### Helpers

See the available languages on your system

```js
$('#speak').speakIt({}).speak().voices(function(options) {
  console.log(options);
});
```

