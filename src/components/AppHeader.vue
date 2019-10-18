<template>
  <header class="page-header">
              <div class="section-inner">
            <nav class="navbar  navbar-expand-md">
                <div class="navbar-header">
                    <a href="" class="navbar-brand navbar-logo"> <span class="navbar-brand-main">
                    <img src="../assets/img/farnham-dene-logo.svg" alt="logo"> </span> <span class="navbar-brand-partner">
                        <img src="../assets/img/NHS-Logo.svg" alt="nhs">
                    </span> </a>
                    <button type="button" class="navbar-toggler show" @click="onCollapse" :class="{ collapse: !collapse }"> <span class="hamburger" :class="{ active: collapse }">
                        <span class="icon-bar"></span> </span>
                    </button>
                </div>
                <div class="navbar-collapse" :class="{ show: collapse }">
                    <div class="nav navbar-nav navbar-right">
                        <ul class="locations-list">
                            <h6>Locations:&nbsp;&nbsp;</h6>
                            <li><span @click="onNavigate('/locations/farnham')">Farnham Centre for Health</span></li>
                            <li><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span></li>
                            <li><span @click="onNavigate('/locations/bourne')">Lower Bourne</span> </li>
                        </ul>
                        <ul class="info-list">
                            <li>
                                <span @click="onNavigate('/openinghours')"> <img src="../assets/img/time.svg" alt="time-icon">&nbsp;<span>Opening Hours</span></span>
                            </li>
                            <li>
                                <span> <img src="../assets/img/call.svg" alt="call-icon">&nbsp;<span>01252 730 100</span></span>
                            </li>
                        </ul>
                        <div class="rating-block">
                            <h6>CQC Rating</h6> <a href="https://www.cqc.org.uk/location/1-547710463" class="rating" target="_blank"> Good </a> </div>
                    </div>
                </div>
            </nav>
        </div>
  </header>
  
</template>

<script>

export default {
  name: "app-header",
  data: function(){
    return {
      collapse: false
    }
  },
  methods: {
      onCollapse: function(){
        this.collapse = !this.collapse;
      },
      onNavigate: function(path){
        this.$router.push({ path: path }, ()=>{
          if(window.innerWidth < 768){
            this.onCollapse();
          }
        })
      }
  }
};
</script>