let app = new Vue({
  el: '#app',
    created() {
    this.searchSimilarArtists();
  },
  data: {
    message: 'Insert the name of your favorite Petrus Castrus song below and get some recomendations of similar songs!',
    artist: 'Insert Artist',
    track: 'Insert track',
    valuesdontexist: false,
    similarartists: [],
    similartracks: [],
    current: {
      name: '',
      mbid: '',
      image: '',
      text: '',
      error: null,
      message: '',
      url: '',
    },
  },
  methods: {
   async searchArtist() {
      let albumname;
      
      trackname = this.track;
      
    
    const response = await axios.get('http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&api_key=e3415c5769bab929c165b63803833934&autocorrect=1&limit=10&artist=Petrus+Castrus&track=' +trackname + '&format=json');
    this.current = response.data;
    
    if (this.current.error != undefined)
    {
      valuesdontexist = true;
    }
    else
    {
      // this.current.image = response.data.similartracks.track.image[5]["#text"];
      this.similartracks = response.data.similartracks.track;
    }
    
    },
    
   async searchSimilarArtists()
    {
      const response = await axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=5&artist=Petrus+Castrus&api_key=e3415c5769bab929c165b63803833934&format=json');
      this.similarartists = response.data.similarartists.artist;
      
    }
  }
});

