<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - ホーム"/>
  <div class="cover">
    <img class="cover-pic" src="static/cover1.jpg">
  </div>

  <md-content>
    <div class="md-display-1 home-header">サンダーコマンドス</div>
    <div class="md-display-1 home-header">サバイバルゲーム</div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter md-alignment-top-center">

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h1.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">道具装備レンタル</div>
            <div class="md-subhead">レンタルサービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サバイバルゲームの道具や装備をお持ちでない方に対して、道具と装備品のレンタルサービスもご用意しております。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h2.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">定例会とは</div>
            <div class="md-subhead">ルール紹介</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            サンダーコマンドスは、土日や祝日に、常に定例会を開催しております。同じな趣味をお持ちの友達と出会えるかも。
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-media>
            <img class="trim-picture" src="static/h3.jpg">
          </md-card-media>
          <md-card-header>
            <div class="md-title">フィールド貸切</div>
            <div class="md-subhead">貸切サービス</div>
          </md-card-header>
          <md-card-actions>
            <md-button class="md-primary">詳しくはこちら</md-button>
          </md-card-actions>
          <md-card-content>
            親睦会戦、 リーグ戦、コスプレ撮影イベントなど、どんな目的でもフィールドを自由にご利用いただけます。
          </md-card-content>
        </md-card>
      </div>

    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 home-header">
      定例会・イベントのお知らせ
      <md-button class="md-fab md-primary more">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100" v-for="event in events" :key="event._id">
        <eventCard :manager="manager" :event="event"/>
      </div>
    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 home-header">
      定例会・イベントの写真
      <md-button class="md-fab md-primary more">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100" v-for="event in events" :key="event._id">
        <eventCard :manager="manager" :event="event"/>
      </div>
    </div>
  </md-content>

  <md-content>
    <div class="md-display-1 home-header">
      アクセス
      <md-button class="md-fab md-primary more" to="/access">
        <md-icon>more_horiz</md-icon>
      </md-button>
    </div>
    <div class="md-subheading home-sub-header">〒299-0231 千葉県袖ケ浦市上泉字下鎌田1135−1</div>
  </md-content>
  <md-content class="map-container">
    <gmap-map class="gmap" :center="center" :zoom="14">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        map-type-id='terrain'
        :options="{scrollwheel: scrollwheel}"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </md-content>
  <md-content class="map-container">

    <!--

    class="map-panel" @zoom_changed="update('zoom', $event)"
    @maptypeid_changed="update('mapType', $event)" @bounds_changed="update('bounds', $event)" -->
    <gmap-map class="gmap map-panel" :center="center" :zoom="zoom" :map-type-id="mapType" :options="{styles: mapStyles, scrollwheel: scrollwheel}"
    @rightclick="mapRclicked" @drag="drag++" @click="mapClickedCount++"
    @center_changed="update('reportedCenter', $event)">
      <!-- <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        map-type-id='terrain'
        :options="{scrollwheel: scrollwheel}"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker> -->
    <gmap-cluster :grid-size="gridSize" v-if="clustering">
      <gmap-marker v-if="m.enabled" :position="m.position" :opacity="m.opacity" :draggable="m.draggable" @click="m.clicked++" @rightclick="m.rightClicked++" @dragend="m.dragended++" @position_changed="updateChild(m, 'position', $event)" v-for="m in activeMarkers"
          :key="m.id">
        <gmap-info-window :opened="m.ifw">{{m.ifw2text}}</gmap-info-window>
      </gmap-marker>
    </gmap-cluster>
    <div v-if="!clustering">
      <gmap-marker v-if="m.enabled" :position="m.position" :opacity="m.opacity" :draggable="m.draggable" @click="m.clicked++" @rightclick="m.rightClicked++" @dragend="m.dragended++" @position_changed="updateChild(m, 'position', $event)" v-for="m in activeMarkers"
          :key="m.id">
        <gmap-info-window :opened="m.ifw">{{m.ifw2text}}</gmap-info-window>
      </gmap-marker>
    </div>

    <gmap-info-window :position="reportedCenter" :opened="ifw">
      To show you the bindings are working I will stay on the center of the screen whatever you do :)
      <br/> To show you that even my content is bound to vue here is the number of time you clicked on the map
      <b>{{mapClickedCount}}</b>
    </gmap-info-window>

    <gmap-info-window :position="reportedCenter" :opened="ifw2">{{ifw2text}}</gmap-info-window>

    <gmap-polyline v-if="plvisible" :path="plPath" :editable="pleditable" :draggable="true" :options="{geodesic:true, strokeColor:'#FF0000'}" @path_changed="updatePolylinePath($event)">
    </gmap-polyline>
    <gmap-polygon v-if="pgvisible" :paths="pgPath" :editable="true" :options="{geodesic:true, strokeColor:'#FF0000', fillColor:'#000000'}" @paths_changed="updatePolygonPaths($event)">
    </gmap-polygon>
    <gmap-circle v-if="displayCircle" :bounds="circleBounds" :center="reportedCenter" :radius="100000" :options="{editable: true}" @radius_changed="updateCircle('radius', $event)" @bounds_changed="updateCircle('bounds', $event)"></gmap-circle>
    <gmap-rectangle v-if="displayRectangle" :bounds="rectangleBounds" :options="{editable: true}" @bounds_changed="updateRectangle('bounds', $event)"></gmap-rectangle>
  </gmap-map>
  </md-content>
  <div class="cover">
    <img class="map-pic" src="static/map1.png">
    <img class="map-pic" src="static/map2.png">
  </div>
  <md-content class="company">
    <img class="resize-picture" src="@/assets/THUNDERCOMMANDOS.png">
  </md-content>
  <md-content class="md-primary company-link">
    <md-button class="company-button" to="/company">会社概要</md-button>
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
import eventCard from '@/components/shared/eventCard'
const _ = require('lodash')
export default {
  props: ['manager'],
  components: {
    eventCard
  },
  data: () => ({
    events: [
      {_id: 1, title: '3月7日 平日定例会', date: '2018年3月7日', cover: 'static/e1.png'},
      {_id: 2, title: '3月1日 定例会', date: '2018年3月1日', cover: 'static/e2.jpg'},
      {_id: 3, title: '2月22日 定例会', date: '2018年2月22日', cover: 'static/e3.jpg'},
      {_id: 4, title: '2月14日 定例会', date: '2018年2月14日', cover: 'static/e4.jpg'}
    ],
    center: {lat: 35.416645, lng: 140.042037},
    markers: [{
      position: {lat: 35.416645, lng: 140.042037}
    }],
    start: null,
    end: null,
    lastId: 1,
    // center: {
    //   lat: 48.8538302,
    //   lng: 2.2982161
    // },
    reportedCenter: {
      lat: 48.8538302,
      lng: 2.2982161
    },
    mapBounds: {},
    clustering: true,
    zoom: 7,
    gridSize: 50,
    mapType: 'terrain',
    // markers: [],
    markersEven: false,
    drag: 0,
    mapClickedCount: 0,
    ifw: true,
    ifw2: false,
    ifw2text: 'You can also use the content prop to set your modal',
    mapStyle: 'green',
    circleBounds: {},
    displayCircle: false,
    displayRectangle: false,
    rectangleBounds: {
      north: 33.685,
      south: 50.671,
      east: -70.234,
      west: -116.251
    },
    originalPlPath: [{
      lat: 37.772,
      lng: -122.214
    }, {
      lat: 21.291,
      lng: -157.821
    }, {
      lat: -18.142,
      lng: 178.431
    }, {
      lat: -27.467,
      lng: 153.027
    }],
    plPath: [{
      lat: 37.772,
      lng: -122.214
    }, {
      lat: 21.291,
      lng: -157.821
    }, {
      lat: -18.142,
      lng: 178.431
    }, {
      lat: -27.467,
      lng: 153.027
    }],
    pleditable: true,
    plvisible: false,
    pgvisible: false,
    pgPath: [
      [{
        lat: 38.872886,
        lng: -77.054720
      }, {
        lat: 38.872602,
        lng: -77.058046
      }, {
        lat: 38.870080,
        lng: -77.058604
      }, {
        lat: 38.868894,
        lng: -77.055664
      }, {
        lat: 38.870598,
        lng: -77.053346
      }],
      [{
        lat: 38.871684,
        lng: -77.056780
      }, {
        lat: 38.871867,
        lng: -77.055449
      }, {
        lat: 38.870915,
        lng: -77.054891
      }, {
        lat: 38.870113,
        lng: -77.055836
      }, {
        lat: 38.870581,
        lng: -77.057037
      }]
    ],
    opgPath: [
      [{
        lat: 38.872886,
        lng: -77.054720
      }, {
        lat: 38.872602,
        lng: -77.058046
      }, {
        lat: 38.870080,
        lng: -77.058604
      }, {
        lat: 38.868894,
        lng: -77.055664
      }, {
        lat: 38.870598,
        lng: -77.053346
      }],
      [{
        lat: 38.871684,
        lng: -77.056780
      }, {
        lat: 38.871867,
        lng: -77.055449
      }, {
        lat: 38.870915,
        lng: -77.054891
      }, {
        lat: 38.870113,
        lng: -77.055836
      }, {
        lat: 38.870581,
        lng: -77.057037
      }]
    ],
    scrollwheel: true
  }),
  computed: {
    activeMarkers () {
      if (this.markersEven) {
        return this.markers.filter(
          (v, k) => k % 2 === 0
        )
      } else {
        return this.markers
      }
    },
    mapStyles () {
      switch (this.mapStyle) {
        case 'normal':
          return []
        case 'red':
          return [{
            stylers: [{
              hue: '#890000'
            }, {
              visibility: 'simplified'
            }, {
              gamma: 0.5
            }, {
              weight: 0.5
            }]
          }, {
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }, {
            featureType: 'water',
            stylers: [{
              color: '#890000'
            }]
          }]
        default:
          return [{
            stylers: [{
              hue: '#899999'
            }, {
              visibility: 'on'
            }, {
              gamma: 0.5
            }, {
              weight: 0.5
            }]
          }, {
            featureType: 'road',
            stylers: [{
              visibility: 'off'
            }]
          }, {
            featureType: 'transit.line',
            stylers: [{
              color: '#FF0000'
            }]
          }, {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [{
              visibility: 'on'
            }, {
              weight: 10
            }]
          }, {
            featureType: 'water',
            stylers: [{
              color: '#8900FF'
            }, {
              weight: 9999900000
            } ]
          }]
      }
    }
  },
  methods: {
    changed (editor, content) {},
    preview () {
      console.log(this.content)
    },
    updateMapCenter (which, value) { // eslint-disable-line no-unused-vars
      this.center = _.clone(this.reportedCenter)
    },
    mapClicked (mouseArgs) {
      console.log('map clicked', mouseArgs) // eslint-disable-line no-console
    },
    mapRclicked (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
    },
    addMarker: function addMarker () {
      this.lastId++

      this.markers.push({
        id: this.lastId,
        position: {
          lat: 48.8538302,
          lng: 2.2982161
        },
        opacity: 1,
        draggable: true,
        enabled: true,
        clicked: 0,
        rightClicked: 0,
        dragended: 0,
        ifw: true,
        ifw2text: 'This text is bad please change me :( '
      })
      return this.markers[this.markers.length - 1]
    },
    resetPlPath () {
      this.plPath = this.originalPlPath
    },

    update (field, event) {
      if (field === 'reportedCenter') {
        // N.B. It is dangerous to update this.center
        // Because the center reported by Google Maps is not exactly
        // the same as the center you pass it.
        // Instead we update this.center only when the input field is changed.

        this.reportedCenter = {
          lat: event.lat(),
          lng: event.lng()
        }

        // If you wish to test the problem out for yourself, uncomment the following
        // and see how your browser begins to hang:
        // this.center = _.clone(this.reportedCenter)
      } else if (field === 'bounds') {
        this.mapBounds = event
      } else {
        this.$set(this, field, event)
      }
    },

    updateChild (object, field, event) {
      if (field === 'position') {
        object.position = {
          lat: event.lat(),
          lng: event.lng()
        }
      }
    },

    updatePolygonPaths (paths) { // eslint-disable-line no-unused-vars
      // TODO
    },

    updatePolylinePath (paths) { // eslint-disable-line no-unused-vars
      // TODO:
    },

    updateCircle (prop, value) {
      if (prop === 'radius') {
        this.radius = value
      } else if (prop === 'bounds') {
        this.circleBounds = value
      }
    },

    updateRectangle (prop, value) {
      if (prop === 'bounds') {
        this.rectangleBounds = value
      }
    },

    updatePlace (place) {
      if (place && place.geometry && place.geometry.location) {
        var marker = this.addMarker()
        marker.position.lat = place.geometry.location.lat()
        marker.position.lng = place.geometry.location.lng()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  // display: flex;
  // justify-content: center;
  // position: relative;
  text-align: center;
  .cover-pic {
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
  .map-pic {
    width: 100%;
    max-width: 1000px;
    height: 100%;
  }
}
.md-content {
  margin-top: 30px;
  padding: 20px;
}
.home-header {
  width: 100%;
  text-align: center;
}
.home-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.md-card {
  margin-bottom: 20px;
}
.trim-picture {
  width: 100%;
  height: auto;
  // object-fit: cover;
}
.more {
  float: right;
}
.map-container {
  display: flex;
  justify-content: center;
  padding: 0px;
}
.company {
  min-height: 180px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resize-picture {
  width: 240px;
}
.company-link {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
}
.company-button {
  color: #fff;
  font-weight: 450;
}

.app-panel {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
}

.map-panel {
  flex: 4 1 80%;
}

.settings-panel {
  overflow-y: scroll;
  flex: 1 0 500px;
}
.gmap{
  width: 100%;
  height: 600px;
}
gmap-map {
  width: 100%;
  height: 600px;
  // display: block;
}
</style>
