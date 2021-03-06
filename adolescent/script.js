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
  	<button type="button" @click="play" class="button-play btn btn-primary btn-sm">
  	BrE <img src="/allenglishclub/adolescent/img/listen-icon.svg" alt="">
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
  	<button type="button" @click="play" class="button-play btn btn-danger btn-sm">
  	AmE <img src="/allenglishclub/adolescent/img/listen-icon.svg" alt="">
  	</button>
  `
});

Vue.component('exercise', {
  props: ['sentence', 'hrefbre', 'hrefame'],
  data() {
    return {
      showinc: false,
      showcor: false,
      list: [],
    }
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },

    shuffle(array) {
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = array[i];
          array[i] = array[j];
          array[j] = x;
      }
      return array;
    },

    check() {
      if(this.list.join(" ") == this.sentence) {
        this.showcor = true;
        this.showinc = false;
      }
      else {
        this.showinc = true;
        this.showcor = false;
      }
    }    
  }, 
  mounted() {
    this.list = this.shuffle(this.sentence.split(" "));
  }, 
  template: `
  <div>
      <draggable class="list-inline border p-2 flex-fill my-2" :list="list" group="sentence" @change="log" style="min-height: 60px;">
        <div
          style="cursor: move;"
          class="list-inline-item btn btn-outline-primary my-1"
          v-for="word in list">
          {{ word }}
        </div>
      </draggable>

  <div class="d-flex justify-content-end align-items-baseline">
    <div v-if="showinc"><span class="my-0 me-2 text-danger">Incorrect!</span></div>
    <div v-if="showcor"><span class="my-0 me-2 text-success">Correct!</span>
    <button-bre-play :href="hrefbre"></button-bre-play>
    <button-ame-play :href="hrefame"></button-ame-play> 
    </div>
    <div><button type="button" class="btn btn-primary btn-sm ms-1" 
    @click="check">
    <img src="/allenglishclub/adolescent/img/check.svg" alt="">
    Check</button></div>
  </div> 
  </div>     
  `
});


new Vue({ 
el: '#app',
data: {
  cards: null,
  exercises: null
}, 
created(){
  axios
   .get('/allenglishclub/adolescent/cards.json')
   .then(response => (this.cards = response.data));

  axios
   .get('/allenglishclub/adolescent/exercises.json')
   .then(response => (this.exercises = response.data));   
}

});