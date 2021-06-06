Vue.component('button-bre-play', {
  props: ['href'],
  methods: {
    play() {
    	var loader = document.getElementById('loader');
    	loader.style.visibility = "visible";
    	var audio = new Audio(this.href);
		audio.addEventListener("canplaythrough", event => {
		  loader.style.visibility = "hidden";
		  audio.play();
		});
    },
  },  
  template: `
  	<button type="button" @click="play" class="btn btn-primary btn-sm mt-1">
  	BrE <img src="/accomplishment/img/listen-icon.svg" alt="">
  	</button>
  `
});

Vue.component('button-ame-play', {
  props: ['href'],
  methods: {
    play() {
    	var loader = document.getElementById('loader');
    	loader.style.visibility = "visible";
    	var audio = new Audio(this.href);
		audio.addEventListener("canplaythrough", event => {
		  loader.style.visibility = "hidden";
		  audio.play();
		});
    },
  },  
  template: `
  	<button type="button" @click="play" class="btn btn-danger btn-sm mt-1">
  	AmE <img src="/accomplishment/img/listen-icon.svg" alt="">
  	</button>
  `
});


new Vue({ el: '#app' });