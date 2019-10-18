<template>
  <main class="page-main locations-page">
    <div class="section-inner">
      <section class="page-title locations-title">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="page-title-icon">
                <img src="../assets/img/Locations.svg" alt="hours" />
              </div>
              <h1 class="page-title-heading">Locations</h1>
              <p
                class="page-title-text"
              >We are located over 2 sites – the Farnham Centre for Health in central Farnham as well as Lodge Hill Road, Lower Bourne. Both are recently built premises and the Farnham Centre for Health also provides radiography, physiotherapy, a renal dialysis unit and a pharmacy.</p>
              <div class="page-title-link">
                <a href="opening_hours.html">Opening Hours</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-nav">
        <div class="container">
          <div class="row pratice-row">
            <div class="col-12 pratice-custom-px">
              <ul class="nav-tabs-list open-hours">
                <li class="nav-tabs-list-item active" data-nav="1">Farnham</li>
                <li class="nav-tabs-list-item" data-nav="2">Lower Bourne</li>
              </ul>
              <select class="select nav-tabs-select">
                <option value="1" data-option="1" selected>Farnham</option>
                <option value="2" data-option="2">Lower Bourne</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section class="page-tabs">
        <div class="page-tabs-item active" data-tab="1" data-location="farnham">
          <div class="container">
            <div class="row pratice-row">
              <div class="col-12 pratice-custom-px">
                <div class="page-map">
                  <iframe
                    src="https://snazzymaps.com/embed/183798"
                    width="100%"
                    height="450px"
                    style="border:none;"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-tabs-item" data-tab="2" data-location="bourne">
          <div class="container">
            <div class="row pratice-row">
              <div class="col-12 pratice-custom-px">
                <div class="page-map">
                  <iframe
                    src="https://snazzymaps.com/embed/180343"
                    width="100%"
                    height="450px"
                    style="border:none;"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "locations"
};
</script>