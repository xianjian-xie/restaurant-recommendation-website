
<script>

import { MapElementFactory } from "vue2-google-maps";

export default MapElementFactory({
  name: "directionsRenderer",

  ctr() {
    return google.maps.DirectionsRenderer;
  },

  events: ['directions_changed'],

  mappedProps: {},

  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String }
  },

  afterCreate(directionsRenderer) {
    let directionsService = new google.maps.DirectionsService();
    console.log("watch0");
    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        let { origin, destination, travelMode } = this;
        if (!origin || !destination || !travelMode) return;

        console.log("watch1");
        directionsService.route(
          {
            origin,
            destination,
            travelMode
          },
          (response, status) => {
            if (status !== "OK") return;
            console.log("watch2");
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  }
});
</script>