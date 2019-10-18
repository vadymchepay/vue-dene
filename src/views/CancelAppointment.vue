<template>
  <main class="page-main aside-page">
    <div class="container-fluid">
      <div class="row section-inner">
        <div class="col-md-12 col-lg-8">
          <div class="page-content">
            <section class="page-title">
              <div class="page-title-icon">
                <img src="../assets/img/icon_cancel-appointment.svg" alt="cancel_appointment" />
              </div>
              <h1 class="page-title-heading">Cancel Appointment</h1>
            </section>
            <div class="features">
              <div class="features-card active" data-nav="1">
                <div class="features-card-box">
                  <div class="features-card-icon icon-online"></div>
                  <div class="features-card-text">Online</div>
                </div>
              </div>
              <div class="features-card" data-nav="2">
                <div class="features-card-box">
                  <div class="features-card-icon icon-mail"></div>
                  <div class="features-card-text">WEBFORM</div>
                </div>
              </div>
            </div>
            <div class="page-nav">
              <select class="select nav-tabs-select">
                <option value="1" data-option="1" selected>Online</option>
                <option value="2" data-option="2">WEBFORM</option>
              </select>
            </div>
            <section class="page-tabs">
              <div class="page-tabs-item active" data-tab="1" data-name="online">
                <div class="services">
                  <div class="services-tab">
                    <div
                      class="services-tab-text"
                    >Please click on to one of the following buttons to log on to your GP Online Services and request a repeat prescription. You may also use other online service providers.</div>
                    <div
                      class="services-tab-link"
                      data-nav="2"
                    >Click here to use our online request form if you are not registered for Online Services</div>
                    <div class="services-tab-cards">
                      <div class="services-card card-pa">
                        <div class="services-card-icon icon-pa">
                          <img src="../assets/img/pa-logo.svg" alt="pa" />
                        </div>
                        <a
                          href=" https://www.patientaccess.com/"
                          class="services-card-button pa-button"
                          target="_blank"
                        >Sign In</a>
                        <a
                          href="https://app.patientaccess.com/registration/create"
                          class="services-card-link pa-link"
                          target="_blank"
                        >Register</a>
                      </div>
                      <div class="services-card card-evergreen">
                        <div class="services-card-icon icon-evergreen">
                          <img src="../assets/img/logo-grey-green.svg" alt="evergreen" />
                        </div>
                        <a
                          href=" https://e-life.co.uk/login"
                          class="services-card-button evergreen-button"
                          target="_blank"
                        >Sign In</a>
                        <a
                          href="https://e-life.co.uk/Signup"
                          class="services-card-link evergreen-link"
                          target="_blank"
                        >Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-tabs-item" data-tab="2" data-name="webform">
                <div class="base-form" id="page-form">
                  <h3 class="base-form-title">Cancel Appointment</h3>
                  <form action="#" class="form" id="form">
                    <div class="form-row">
                      <input
                        type="text"
                        hidden
                        class="user-input filled"
                        name="page"
                        value="cancel_appointment"
                        id="page"
                        required
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="name" class="form-label">First Name *</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-input user-input"
                          required
                        />
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                      <div class="form-input-group">
                        <label for="surname" class="form-label">Last Name *</label>
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          class="form-input user-input"
                          required
                        />
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="date" class="form-label">Date of Birth *</label>
                        <div class="multifield-input">
                          <input
                            type="text"
                            name="date"
                            id="date"
                            class="form-input short-input user-input num-input"
                            placeholder="dd"
                            maxlength="2"
                            required
                          />
                          <input
                            type="text"
                            name="month"
                            id="month"
                            class="form-input short-input user-input num-input"
                            placeholder="mm"
                            maxlength="2"
                            required
                          />
                          <input
                            type="text"
                            name="year"
                            id="year"
                            class="form-input short-input user-input num-input"
                            placeholder="yyyy"
                            maxlength="4"
                            required
                          />
                        </div>
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                      <div class="form-input-group">
                        <label for="location" class="form-label">Appointment Location *</label>
                        <select
                          name="location"
                          id="location"
                          class="form-select user-input"
                          required
                        >
                          <option value hidden></option>
                          <option value="farnham">Farnham</option>
                          <option value="lower_bourne">Lower Bourne</option>
                        </select>
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="ap_date" class="form-label">Appointment Date *</label>
                        <input
                          type="text"
                          name="ap_date"
                          id="ap_date"
                          class="form-input date-input user-input"
                          autocomplete="off"
                          required
                        />
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                      <div class="form-input-group">
                        <label for="hours" class="form-label">Appointment Time *</label>
                        <div class="multifield-input">
                          <select
                            name="hours"
                            id="hours"
                            class="form-select time-select user-input"
                            required
                          >
                            <option value hidden>hours</option>
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                          </select>
                          <select
                            name="mins"
                            id="mins"
                            class="form-select time-select user-input"
                            required
                          >
                            <option value hidden>mins</option>
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                          </select>
                        </div>
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                        <div class="form-info shown">
                          <span>Your appointment time is within 4hrs. You are required to call the practice</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="type" class="form-label">Type of Appointment *</label>
                        <select name="type" id="type" class="form-select user-input" required>
                          <option value hidden></option>
                          <option value="online">Online</option>
                          <option value="in_person">In Person</option>
                          <option value="by_post">By post</option>
                        </select>
                        <div class="form-validation">
                          <span>This field is required</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <input type="submit" class="form-submit" id="submit" value="Submit" />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="submit-success" id="sucess">
                  <div class="submit-success-icon">
                    <img src="../assets/img/icon-sucess.svg" alt="sucess" />
                  </div>
                  <div
                    class="submit-success-text"
                  >Your form has been successfully submitted. We’ll get back to you within 24 hours.</div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="page-aside" id="page-aside">
            <div id="faqs"></div>
            <div id="online-form">
              <div class="page-aside-title">Form Instructions</div>
              <div class="page-aside-cards">
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div class="aside-card-header-text">Repeat Prescriptions Request</div>
                    <div class="aside-card-header-trigger expand"></div>
                  </div>
                  <div class="aside-card-body expand">
                    <div class="aside-card-body-text">
                      <ul>
                        <li>Ensure that you have included your full name and address and a contact telephone number.</li>
                        <li>Be precise with medication</li>
                        <li>Detail exactly the strengths</li>
                        <li>Indicate if you intend to collect your prescriptions from the surgery (indicate which site) or a chemist.</li>
                        <li>Allow 72 hours for your prescription to be processed</li>
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
  </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "cancel-appointment"
};
</script>