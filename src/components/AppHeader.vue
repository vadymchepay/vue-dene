<template>
  <!-- <header class="page-header">
              <div class="section-inner">
            <nav class="navbar  navbar-expand-md">
                <div class="navbar-header">
                    <a href="" class="navbar-brand navbar-logo"> <span class="navbar-brand-main">
                    <img src="../assets/img/farnham-dene-logo.svg" alt="logo"> </span> <span class="navbar-brand-partner">
                        <img src="../assets/img/NHS-Logo.svg" alt="nhs">
                    </span> </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#locations"> <span class="hamburger">
                        <span class="icon-bar"></span> </span>
                    </button>
                </div>
                <div class="navbar-collapse" id="locations">
                    <div class="nav navbar-nav navbar-right">
                        <ul class="locations-list">
                            <h6>Locations:&nbsp;</h6>
                            <li><span @click="$router.push({ path: 'locations:farnham' })">Farnham Centre for Health</span></li>
                            <li><span>&nbsp;|&nbsp;</span></li>
                            <li><span @click="$router.push({ path: 'locations:bourne' })">Lower Bourne</span> </li>
                        </ul>
                        <ul class="info-list">
                            <li>
                                <span @click="$router.push({ path: 'openinghours' })"> <img src="../assets/img/time.svg" alt="time-icon">&nbsp;<span>Opening Hours</span></span>
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
  </header>-->
  <header class="page-header">
    <div class="section-inner">
      <b-navbar toggleable="md">
        <div class="navbar-header">
          <b-navbar-brand href="#" class="navbar-logo">
            <span class="navbar-brand-main">
              <img src="../assets/img/farnham-dene-logo.svg" alt="logo" />
            </span>
            <span class="navbar-brand-partner">
              <img src="../assets/img/NHS-Logo.svg" alt="nhs" />
            </span>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse">
            <span class="hamburger">
              <span class="icon-bar"></span>
            </span>
          </b-navbar-toggle>
        </div>
        <b-collapse class="navbar-collapse" id="nav-collapse" is-nav>
          <b-navbar-nav class="nav navbar-right">
            <ul class="locations-list">
              <h6>Locations:&nbsp;</h6>
              <li>
                <span @click="$router.push({ path: 'locations:farnham' })">Farnham Centre for Health</span>
              </li>
              <li>
                <span>&nbsp;|&nbsp;</span>
              </li>
              <li>
                <span @click="$router.push({ path: 'locations:bourne' })">Lower Bourne</span>
              </li>
            </ul>
            <ul class="info-list">
              <li>
                <span @click="$router.push({ path: 'openinghours' })">
                  <img src="../assets/img/time.svg" alt="time-icon" />&nbsp;
                  <span>Opening Hours</span>
                </span>
              </li>
              <li>
                <span>
                  <img src="../assets/img/call.svg" alt="call-icon" />&nbsp;
                  <span>01252 730 100</span>
                </span>
              </li>
            </ul>
            <div class="rating-block">
              <h6>CQC Rating</h6>
              <a
                href="https://www.cqc.org.uk/location/1-547710463"
                class="rating"
                target="_blank"
              >Good</a>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import { BNavbar } from "bootstrap-vue";
import { BCollapse } from "bootstrap-vue";
import { BNavbarNav } from "bootstrap-vue";
import { BNavbarToggle } from "bootstrap-vue";
import { BNavbarBrand } from "bootstrap-vue";

export default {
  name: "app-header",
  components: {
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavbarToggle,
    BNavbarBrand
  }
};
</script>