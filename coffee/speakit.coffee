
$.fn.speakIt = (opts) ->

  if 'speechSynthesis' of window
    def = new SpeechSynthesisUtterance(@.text())
    def.rate = 1
    def.voiceURI = 'native'
    def.volume = 1
    def.pitch = 1
    def.lang = "set-language"
    def.onstart = (callback) ->
      callback
    def.onend = (callback) ->
      callback
    def.onerror = (callback) ->
      callback
    def.onmark = (callback) ->
      callback
    def.onpause = (callback) ->
      callback
    def.onresume = (callback) ->
      callback
    def.onboundary = (callback) ->
      callback
    options = $.extend true, def, opts

    speak: ->
      console.log window.speechSynthesis
      window.speechSynthesis.speak(options);
      @

    pause: ->
      if window.speechSynthesis.speaking
        window.speechSynthesis.pause()

    resume: ->
      if window.speechSynthesis.paused
        window.speechSynthesis.resume()

    voices: (callback) ->
      window.speechSynthesis.onvoiceschanged = ->
        $.each window.speechSynthesis.getVoices(), (idx, val) ->
          callback val







