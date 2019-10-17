<template>
  <div class="layout-main">
    <header class="page-header">
      <div class="section-inner">
        <nav class="navbar navbar-expand-md">
          <div class="navbar-header">
            <a href class="navbar-brand navbar-logo">
              <span class="navbar-brand-main">
                <img src="../assets/img/farnham-dene-logo.svg" alt="logo" />
              </span>
              <span class="navbar-brand-partner">
                <img src="../assets/img/NHS-Logo.svg" alt="nhs" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
    <main class="page-main">
      <router-view />
    </main>
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
                      <p class="footer-info-text mt-0" id="e-trigger">&#60;click to reveal&#62;</p>
                      <p class="footer-info-text mt-0 hidden" id="e-hiden">admin.farnhamdene@nhs.net</p>
                    </div>
                    <div class="footer-info">
                      <h4 class="footer-info-title">Telephone</h4>
                      <p class="footer-info-text mt-0" id="t-trigger">&#60;click to reveal&#62;</p>
                      <p class="footer-info-text mt-0 hidden" id="t-hiden">01252 730 100</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 pratice-custom-px">
                  <div class="footer-column">
                    <h3 class="footer-column-title">Locations</h3>
                    <a href="locations.html" class="footer-info">
                      <h4 class="footer-info-title">Farnham Centre for Health</h4>
                      <p class="footer-info-text mb-0">
                        Hale Road
                        <br />Farnham
                        <br />Surrey
                        <br />GU9 9QS
                      </p>
                    </a>
                    <a href="locations.html" target="_blank" class="footer-info">
                      <h4 class="footer-info-title">Lower Bourne</h4>
                      <p class="footer-info-text mb-0">
                        Lodge Hill Road
                        <br />Farnham
                        <br />Surrey
                        <br />GU10 3RB
                      </p>
                    </a>
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
                        <a href="comingsoon.html">GP Earnings</a>
                      </li>
                      <li class="footer-column-links-item">
                        <a href="comingsoon.html">Job Vacancies</a>
                      </li>
                      <li class="footer-column-links-item">
                        <a href="comingsoon.html">Join the Practice</a>
                      </li>
                      <li class="footer-column-links-item">
                        <a href="feedback.html">Give Feedback</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pratice-custom-px">
                  <div class="footer-column ml-10">
                    <h3 class="footer-column-title">ABOUT US</h3>
                    <ul class="footer-column-links">
                      <li class="footer-column-links-item">
                        <a href="locations.html">Find Us</a>
                      </li>
                      <li class="footer-column-links-item">
                        <a href="opening_hours.html">Opening hours</a>
                      </li>
                      <li class="footer-column-links-item">
                        <a href="pratice_team.html">Practice Team</a>
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
                  <a href="javascript:void(0);">Terms of Use</a>
                </li>
                <li class="footer-credids-links-item">
                  <a href="javascript:void(0);">Privacy Policy</a>
                </li>
                <li class="footer-credids-links-item">
                  <a href="javascript:void(0);">Cookies Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
</script>  