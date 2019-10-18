<template>
  <footer class="page-footer">
    <div class="section-inner">
      <div class="container">
        <div class="row pratice-row">
          <div class="col-12 col-lg-6 pratice-custom-px">
            <div class="row pratice-custom-px">
              <div class="col-12 col-md-6 pratice-custom-px">
                <div class="footer-column">
                  <div class="footer-logo">
                    <img src="../assets/img/farnham-dene-logo-white.png" alt="logo" />
                  </div>
                  <div class="footer-info">
                    <h4 class="footer-info-title">EMAIL</h4>
                    <p
                      class="footer-info-text mt-0"
                      id="mail"
                      :class="{ hidden: mailReveal }"
                      @click="onReveal($event)"
                    >&#60;click to reveal&#62;</p>
                    <p
                      class="footer-info-text mt-0"
                      :class="{ hidden: !mailReveal }"
                    >admin.farnhamdene@nhs.net</p>
                  </div>
                  <div class="footer-info">
                    <h4 class="footer-info-title">Telephone</h4>
                    <p
                      class="footer-info-text mt-0"
                      id="phone"
                      :class="{ hidden: phoneReveal }"
                      @click="onReveal($event)"
                    >&#60;click to reveal&#62;</p>
                    <p class="footer-info-text mt-0" :class="{ hidden: !phoneReveal }">01252 730 100</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 pratice-custom-px">
                <div class="footer-column">
                  <h3 class="footer-column-title">Locations</h3>
                  <span
                    @click="$router.push({ name: 'locations', params: { id: 'farnham' } })"
                    class="footer-info"
                  >
                    <h4 class="footer-info-title">Farnham Centre for Health</h4>
                    <p class="footer-info-text mb-0">
                      Hale Road
                      <br />Farnham
                      <br />Surrey
                      <br />GU9 9QS
                    </p>
                  </span>
                  <span
                    @click="$router.push({ name: 'locations', params: { id: 'bourne' } })"
                    class="footer-info"
                  >
                    <h4 class="footer-info-title">Lower Bourne</h4>
                    <p class="footer-info-text mb-0">
                      Lodge Hill Road
                      <br />Farnham
                      <br />Surrey
                      <br />GU10 3RB
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 pratice-custom-px">
            <div class="row justify-content-around pratice-custom-px">
              <div class="col-12 col-md-6 col-lg-4 pratice-custom-px">
                <div class="footer-column ml-10">
                  <h3 class="footer-column-title">Information</h3>
                  <ul class="footer-column-links">
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/comingsoon' })">GP Earnings</span>
                    </li>
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/comingsoon' })">Job Vacancies</span>
                    </li>
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/comingsoon' })">Join the Practice</span>
                    </li>
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/feedback' })">Give Feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 pratice-custom-px">
                <div class="footer-column ml-10">
                  <h3 class="footer-column-title">ABOUT US</h3>
                  <ul class="footer-column-links">
                    <li class="footer-column-links-item">
                      <span
                        @click="$router.push({ name: 'locations', params: { id: 'farnham' } })"
                      >Find Us</span>
                    </li>
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/openinghours' })">Opening hours</span>
                    </li>
                    <li class="footer-column-links-item">
                      <span @click="$router.push({ path: '/praticeteam' })">Practice Team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pratice-row footer-credids">
          <div class="col-12 col-lg-6 pratice-custom-px">
            <div class="footer-credids-copyright">© 2019 Farnham Dene Medical Centre</div>
          </div>
          <div class="col-12 col-lg-6 pratice-custom-px">
            <ul class="footer-credids-links">
              <li class="footer-credids-links-item">
                <span @click="$router.push({ path: '/comingsoon' })">Terms of Use</span>
              </li>
              <li class="footer-credids-links-item">
                <span @click="$router.push({ path: '/comingsoon' })">Privacy Policy</span>
              </li>
              <li class="footer-credids-links-item">
                <span @click="$router.push({ path: '/comingsoon' })">Cookies Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  data: function() {
    return {
      mailReveal: false,
      phoneReveal: false
    };
  },
  methods: {
    onReveal: function(event) {
      if (event.target.id === "mail") {
        this.mailReveal = !this.mailReveal;
      } else if (event.target.id === "phone") {
        this.phoneReveal = !this.phoneReveal;
      }
    }
  }
};
</script>