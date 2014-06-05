$.fn.speakIt = function(opts) {
  var def, options;
  if ('speechSynthesis' in window) {
    def = new SpeechSynthesisUtterance(this.text());
    def.rate = 1;
    def.voiceURI = 'native';
    def.volume = 1;
    def.pitch = 1;
    def.lang = "set-language";
    def.onstart = function(callback) {
      return callback;
    };
    def.onend = function(callback) {
      return callback;
    };
    def.onerror = function(callback) {
      return callback;
    };
    def.onmark = function(callback) {
      return callback;
    };
    def.onpause = function(callback) {
      return callback;
    };
    def.onresume = function(callback) {
      return callback;
    };
    def.onboundary = function(callback) {
      return callback;
    };
    options = $.extend(true, def, opts);
    return {
      speak: function() {
        console.log(window.speechSynthesis);
        window.speechSynthesis.speak(options);
        return this;
      },
      pause: function() {
        if (window.speechSynthesis.speaking) {
          return window.speechSynthesis.pause();
        }
      },
      resume: function() {
        if (window.speechSynthesis.paused) {
          return window.speechSynthesis.resume();
        }
      },
      voices: function(callback) {
        return window.speechSynthesis.onvoiceschanged = function() {
          return $.each(window.speechSynthesis.getVoices(), function(idx, val) {
            return callback(val);
          });
        };
      }
    };
  }
};
