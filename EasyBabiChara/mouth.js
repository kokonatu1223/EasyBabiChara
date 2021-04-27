var context;
var mouth = document.getElementById('mouth');
          
window.addEventListener('load', init, false);
            async function init() {
                try {
                    window.AudioContext = window.AudioContext||window.webkitAudioContext;
                    context = new AudioContext();
                }
                catch(e) {
                    alert('Web Audio API is not supported in this browser');
                }
                const stream = await navigator.mediaDevices.getUserMedia({audio:true});
                var source = context.createMediaStreamSource(stream);
                var analyser = context.createAnalyser();
                source.connect(analyser);
                
                var frequencies = new Uint8Array(analyser.frequencyBinCount);
                
                 var changeMouth = function(){
                    let freq = Math.floor(getFrequency());
                    if(freq<8){
                    	mouth.style.backgroundImage = 'url(character/mouth_1.png)';
                    }else if(freq < 20){
                    	mouth.style.backgroundImage = 'url(character/mouth_2.png)';
                    }else{
                    	mouth.style.backgroundImage = 'url(character/mouth_3.png)';
                    }
                }
                
                setInterval(changeMouth,  20);
                
                var getFrequency = function(){
                    analyser.getByteFrequencyData(frequencies);
                    return frequencies.reduce(function(previous, current){
                        return previous+current;
                    })/analyser.frequencyBinCount;
                };
}
