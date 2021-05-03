<template>
  <div>

    <div>
      <!-- <GmapAutocomplete @place_changed='setPlace'/>
      <button @click='addMarker'>Add</button> -->
      <button @click="getRoute">Get Direction</button>
    </div>

    <br>

    <GmapMap ref = "mymap" :center='center' :zoom='12' style='width:100%;  height: 400px;'>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
      <!-- <DirectionsRenderer
        travelMode="DRIVING"
        :origin="center"
        :destination="destination"/> -->

        
      <!-- <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}"></gmap-polyline> -->
      
    </GmapMap>
      

    
  </div>
</template>

<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script> 
<script>

import DirectionsRenderer from '@/components/title-bar'
// import { MapElementFactory } from "vue2-google-maps";
// import {gmapApi} from 'vue2-google-maps'

export default {
  name: 'GoogleMap',
  props: ["cur_address"],
  components: {
    DirectionsRenderer,
  },
  data() {
    return {
      center: { lat: null, lng: null },
      currentPlace: null,
      markers: [],
      destination: null,
      location: null,
      path: [],
      start: { lat: null, lng: null },
    }
  },
  mounted() {
    this.geolocate();
    // if (google) {
        
    //     this.initMap();
  },
  

  // created(){
  //   navigator.geolocation.getCurrentPosition(position => {
  //       this.location = position;
  //       this.center = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //     });
  //     console.log("this.center",this.center);
  //     console.log("location",this.location);

  // },
  // beforeUpdate(){
  //   const marker = {
  //         lat: this.cur_address.geometry.location.lat(),
  //         lng: this.cur_address.geometry.location.lng(),
  //       };
  //   console.log("tiana",marker);
  //   this.markers.push({ position: marker });
  // },
  // mounted() {
  //   // this.geolocate();
  //   if (google) {  
  //     this.initMap();
  //   }
  // },
  methods: {
    getRoute() {
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      this.directionsDisplay.setMap(this.$refs.mymap.$mapObject)
      var vm = this
      vm.directionsService.route({
        origin: this.center,
        destination: this.destination,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          vm.directionsDisplay.setDirections(response)
        } else {
          console.log('Directions request failed due to ' + status)
        }
      })
    },

    // setPlace(place) {
    //   console.log("place",place);
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng(),
    //     };
    //     console.log("tiana1",marker);
    //     //this.destination = marker;
    //     this.path.push(marker);
    //     this.markers.push({ position: marker });
    //     this.destination = marker;
    //     console.log("markers",this.markers);
    //     // this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    geolocate: function() {
      console.log("hahaha",this.cur_address);
      this.destination = { lat: this.cur_address.latitude, lng: this.cur_address.longitude };
      this.markers.push({ position: this.destination });
      // this.markers.push({ position: this.center });
      navigator.geolocation.getCurrentPosition(position => {
        console.log("position",position);
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
         console.log("myposition",this.center);
      });
     
      // console.log("this.center",this.center);
      // console.log("location",this.location);
      // const marker = {
      //     lat: this.center[0].position,
      //     lng: this.currentPlace.geometry.location.lng(),
      //   };
      // this.markers.push({ position: this.center });
      // console.log("ooo",this.markers);
    },
  },
};
</script>