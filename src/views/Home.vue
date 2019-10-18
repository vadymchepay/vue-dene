<template>
  <main class="page-main">
    <section class="hero">
      <!--           Hero-carousel start -->
      <div id="mainBanner" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#mainBanner" data-slide-to="0" class="active"></li>
          <li data-target="#mainBanner" data-slide-to="1"></li>
          <!--                    <li data-target="#mainBanner" data-slide-to="2"></li>-->
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <a class="carousel-control carousel-control-prev" href="#mainBanner" data-slide="prev">
            <img src="../assets/img/left-arrow.svg" alt="left-arrow" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control carousel-control-next" href="#mainBanner" data-slide="next">
            <img src="../assets/img/right-arrow.svg" alt="right-arrow" />
            <span class="sr-only">Next</span>
          </a>
          <div class="carousel-item active">
            <div class="main-banner slide_1">
              <div class="welcome-banner">
                <p class="welcome-banner-top anim">WELCOME TO</p>
                <h2 class="welcome-banner-title anim">
                  Farnham Dene
                  <br />Medical Practice
                </h2>
                <p class="welcome-banner-bottom anim">NEW WEBSITE</p>
                <p
                  class="welcome-banner-note anim"
                >This website still has some pages under development and are not accessible. They will be available shortly.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="main-banner slide_2">
              <div class="banner">
                <div class="banner-icon">
                  <img src="../assets/img/eConsult-logo.svg" alt="logo" />
                </div>
                <h1 class="banner-title">Contact our doctors online</h1>
                <p
                  class="banner-text text_2"
                >Want advice from your doctor, self-help information or have an administrative request (such as a sick note or test results)?</p>
                <p
                  class="banner-text text_1"
                >Fill out a simple online form to get advice and treatment within 3 working day</p>
                <div class="banner-buttons">
                  <a
                    href="https://farnhamdene.webgp.com"
                    class="btn-red"
                    target="_blank"
                  >Get Started</a>
                  <a href="javascript:void(0);" class="btn-video">
                    <span class="btn-video-icon">
                      <img src="../assets/img/video-icon.svg" alt="play" />
                    </span>
                    <span>Watch the video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Left and right controls -->
        <a class="carousel-control carousel-control-prev" href="#mainBanner" data-slide="prev">
          <img src="../assets/img/left-arrow.svg" alt="left-arrow" />
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control carousel-control-next" href="#mainBanner" data-slide="next">
          <img src="../assets/img/right-arrow.svg" alt="right-arrow" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!--           Hero-carousel end -->
    </section>
    <!--        News-section-->
    <section class="news-section">
      <div class="section-inner">
        <div class="container">
          <div class="row ql-row">
            <div class="col-12 custom-px">
              <div class="breaking-news-ticker" id="newsTicker5">
                <div class="bn-news">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">New Website</a>
                      <span>Our new website offers a range of new online services for your convenience</span>
                    </li>
                    <li>
                      <a href="javascript:void(0)">eConsult</a>
                      <span>Contact our doctors online and get advice and treatment within 3 working days</span>
                    </li>
                    <li>
                      <span>This website still has some pages under development and are not accessible. They will be available shortly.</span>
                    </li>
                  </ul>
                </div>
                <div class="bn-controls">
                  <button>
                    <span class="bn-arrow bn-prev">
                      <img src="../assets/img/left-arrow-btn.svg" alt="left-arrow-btn" />
                    </span>
                  </button>
                  <button>
                    <span class="bn-arrow bn-next">
                      <img src="../assets/img/right-arrow-btn.svg" alt="right-arrow-btn" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--        News-section-->
    <!--        Quick links section-->
    <div class="section-inner">
      <section class="quick-links">
        <div class="container">
          <div class="row ql-row">
            <div class="col-12 custom-px">
              <h2 class="section-title">Quick Links</h2>
            </div>
          </div>
          <div class="row ql-row">
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="https://farnhamdene.webgp.com" class="mask d-block online" target="_blank">
                  <div class="mask-inline">Online Consultation</div>
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="appointments.html" class="mask d-block book">
                  <div class="mask-inline">Book Appointment</div>
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="prescriptions.html" class="mask d-block repeat">
                  <div class="mask-inline">Repeat Prescription</div>
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="locations.html" class="mask d-block cancel">
                  <div class="mask-inline">Find Us</div>
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="opening_hours.html" class="mask d-block join">
                  <div class="mask-inline">
                    Opening
                    <br />Hours
                  </div>
                </a>
              </div>
            </div>
            <div class="col-6 col-sm-4 col-md-4 col-lg-2 custom-px">
              <div class="prop-wrapper">
                <a href="https://www.beatdiabetes.org.uk" class="mask d-block beat" target="_blank">
                  <div class="mask-inline">
                    BEAT
                    <br />Diabetes
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--        Quick links section-->
      <!--        Pratice information-->
      <section class="pratice-information">
        <div class="container">
          <div class="row pratice-row">
            <div class="col-12 pratice-custom-px">
              <h2 class="section-title">Practice Information</h2>
            </div>
          </div>
          <div class="row pratice-row info-blocks-row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 tab-active pratice-custom-px">
              <a href="javascript:void(0)" class="info-card" id="query-trigger">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/reception.svg" alt="reception" class="auto-width" />
                  </div>
                </div>
                <h6 class="m-0">Reception Enquiries</h6>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 tab-active pratice-custom-px">
              <a href="appointments.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/appointement.svg" alt="appointement" />
                  </div>
                </div>
                <h6 class="m-0">Appointments</h6>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 tab-active pratice-custom-px">
              <a href="javascript:void(0)" class="info-card" id="clinic-trigger">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/clinics.svg" alt="clinics" />
                  </div>
                </div>
                <h6 class="m-0">CLINICS &amp; SERVICES</h6>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 tab-active pratice-custom-px">
              <a href="pratice_team.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/patient-group-icon.svg" alt="patient-group-icon" />
                  </div>
                </div>
                <h6 class="m-0">Practice Team</h6>
              </a>
            </div>
            <div class="col-12 pratice-custom-px hiden-block" id="query-wrapper">
              <div id="query" class="info-content-wrapper">
                <div class="row">
                  <div class="col-12 col-lg-4 custom-width">
                    <div class="info-data">
                      <h6>RECEPTION ENQUIRES</h6>
                      <p class="info-content">
                        You can get help with a wide variety of clinical and administrative requests through our website without the need to call or visit the practice.
                        <br />
                        <br />We strongly encourage our patients to use online services where possible. This helps us to operate more efficiently and deliver a better service to our patients.
                      </p>
                      <P class="info-content m-0">
                        <img src="../assets/img/combined-shape .svg" alt="help-icon" /> Need futher help ?
                        <a href="comingsoon.html" class="contact-us">Contact Us</a>
                      </P>
                    </div>
                  </div>
                  <div class="col-12 col-lg-8 custom-grow">
                    <div class="row">
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <div class="info-data">
                            <h6>Get help with</h6>
                            <ul class="data-list">
                              <li class="data-list-item">
                                <a
                                  href="https://farnhamdene.webgp.com/consult-administrative-help"
                                  target="_blank"
                                >Sick / Fit notes</a>
                              </li>
                              <li class="data-list-item">
                                <a
                                  href="https://farnhamdene.webgp.com/consult-administrative-help"
                                  target="_blank"
                                >Referrals</a>
                              </li>
                              <li class="data-list-item">
                                <a
                                  href="https://farnhamdene.webgp.com/consult-administrative-help"
                                  target="_blank"
                                >Test Results</a>
                              </li>
                              <li class="data-list-item">
                                <a
                                  href="https://farnhamdene.webgp.com/consult-administrative-help"
                                  target="_blank"
                                >Medical reports</a>
                              </li>
                            </ul>
                          </div>
                          <!--
                                                    <div class="info-data">
                                                        <h6>
                                                    New Patients
                                                </h6>
                                                        <ul class="data-list">
                                                            <li class="data-list-item"><a href="comingsoon.html">Join the practice</a></li>
                                                            <li class="data-list-item"><a href="comingsoon.html">Register for online services</a></li>
                                                        </ul>
                                                    </div>
                          -->
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <div class="info-data">
                            <h6>Appointments</h6>
                            <ul class="data-list">
                              <li class="data-list-item">
                                <a href="appointments.html">Book an appointment</a>
                              </li>
                              <li class="data-list-item">
                                <a
                                  href="https://farnhamdene.webgp.com/"
                                  target="_blank"
                                >Consult online</a>
                              </li>
                              <li class="data-list-item">
                                <a href="comingsoon.html">Cancel an appointment</a>
                              </li>
                            </ul>
                          </div>
                          <!--
                                                    <div class="info-data">
                                                        <h6>
                                                    Feedback
                                                </h6>
                                                        <ul class="data-list">
                                                            <li class="data-list-item"><a href="comingsoon.html">Friends &amp; Family test</a></li>
                                                            <li class="data-list-item"><a href="comingsoon.html">Make a complaint</a></li>
                                                        </ul>
                                                    </div>
                          -->
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <!--
                                                    <div class="info-data">
                                                        <h6>
                                                    Keep us updatet
                                                </h6>
                                                        <ul class="data-list">
                                                            <li class="data-list-item"><a href="comingsoon.html">Change of personal details</a></li>
                                                            <li class="data-list-item"><a href="comingsoon.html">Tell us if you a carer</a></li>
                                                        </ul>
                                                    </div>
                          -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 pratice-custom-px hiden-block" id="clinics-wrapper">
              <div id="clinics" class="info-content-wrapper">
                <div class="row">
                  <div class="col-12 col-lg-4 custom-width">
                    <div class="info-data">
                      <h6>Clinics &amp; Services</h6>
                      <p
                        class="info-content"
                      >In addition to general medical consultations, we run a range of specialist clinics and services for our patients. The services we provide are listed here. Please select one of the options for further details.</p>
                      <P class="info-content m-0">
                        <img src="../assets/img/combined-shape .svg" alt="help-icon" /> Need futher help ?
                        <a href="comingsoon.html" class="contact-us">Contact Us</a>
                      </P>
                    </div>
                  </div>
                  <div class="col-12 col-lg-8 custom-grow">
                    <div class="row">
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <div class="info-data">
                            <h6>
                              <a href="clinics.html#clinics">SPECIALIST CLINICS</a>
                            </h6>
                            <ul class="data-list">
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&asthma">Asthma</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&audiometry">Audiometry</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&blood">Blood Tests</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&chronic">Chronic Disease</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&diabetic">Diabetic Clinic</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#clinics&flu">Flu Clinics</a>
                              </li>
                            </ul>
                          </div>
                          <div class="info-data">
                            <h6>
                              <a href="clinics.html#travel&travel">Travel Services</a>
                            </h6>
                            <ul class="data-list"></ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <div class="info-data">
                            <h6>
                              <a href="clinics.html#maternity">MATERNITY &amp; CHILDREN</a>
                            </h6>
                            <ul class="data-list">
                              <li class="data-list-item">
                                <a href="clinics.html#maternity&antenatal">Antenatal</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#maternity&child">Child Health</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#maternity&planing">Family Planning</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#maternity&immunisations">Immunisations</a>
                              </li>
                              <li class="data-list-item">
                                <a
                                  href="clinics.html#maternity&menopause"
                                >Menopause Advice &amp; HRT Checks</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#maternity&teenage">Teenage Sexual Health</a>
                              </li>
                            </ul>
                          </div>
                          <div class="info-data">
                            <h6>
                              <a href="clinics.html#privete&private">Private Services</a>
                            </h6>
                            <ul class="data-list"></ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="col-wrapper">
                          <div class="info-data">
                            <h6>
                              <a href="clinics.html#screening">SCREENING TESTS</a>
                            </h6>
                            <ul class="data-list">
                              <li class="data-list-item">
                                <a href="clinics.html#screening&cervical">Cervical Smears</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#screening&chlamydia">Chlamydia Screening</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#screening&inr">INR Clinic</a>
                              </li>
                              <li class="data-list-item">
                                <a href="clinics.html#screening&spirometry">Spirometry Clinic</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pratice-row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 pratice-custom-px">
              <a href="comingsoon.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/carer-icon.svg" alt="caarer" />
                  </div>
                </div>
                <h6 class="m-0">Carer Information</h6>
              </a>
              <a href="feedback.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/feedback.svg" alt="Feedback" />
                  </div>
                </div>
                <h6 class="m-0">Feedback</h6>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 pratice-custom-px">
              <a href="https://www.nhs.uk/live-well" class="info-card big-card" target="_blank">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/health.svg" alt="health" class="auto-width" />
                  </div>
                </div>
                <h6 class="m-0 p-0">HEALTH &amp; WELLBEING</h6>
                <p>Advice, tips and tools to help you make the best choices about your health and wellbeing with complete guide to conditions, symptoms and treatments, including what to do and when to get help.</p>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 pratice-custom-px">
              <a href="https://farnhamdene.webgp.com" class="info-card big-card" target="_blank">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/logo-econsult-rgb-fillede.svg" alt="econsult" />
                  </div>
                </div>
                <h6 class="m-0 p-0">ONLINE CONSULTATION</h6>
                <p>Want advice from your doctor, self-help information or have an administrative request (such as a sick note or test results)? eConsult and get a response within three working days</p>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 pratice-custom-px">
              <a href="comingsoon.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/community-events.svg" alt="events" class="auto-width" />
                  </div>
                </div>
                <h6 class="m-0">Community Events</h6>
              </a>
              <a href="comingsoon.html" class="info-card">
                <div class="info-image">
                  <div class="img-wrapper">
                    <img src="../assets/img/forms-icon.svg" alt="forms" class="auto-width" />
                  </div>
                </div>
                <h6 class="m-0">Electronic Forms</h6>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--        Practice Information-->
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
};
</script>
