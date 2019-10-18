<template>
  <main class="page-main aside-page">
    <div class="container-fluid">
      <div class="row section-inner">
        <div class="col-md-12 col-lg-8">
          <div class="page-content">
            <section class="page-title">
              <div class="page-title-icon">
                <img src="../assets/img/feedback.svg" alt="cancel_appointment" />
              </div>
              <h1 class="page-title-heading">Feedback</h1>
              <p
                class="page-title-text"
              >Lorem ipsum dolor sit amet, consectet adipiscing. Lorem ipsum dolor sit amet, consectet adipiscing elit. Integer sagittis dapibus tincidunt. Vivamus sit amet turpis eros. Curabitur euismod, nulla eu ull congue, sapien elit lacinia tellus.</p>
              <a href="javascript:void(0);" class="page-title-link">Make a Complaint</a>
            </section>
            <section class="feedback-section">
              <div class="base-form feedback-form" id="page-form">
                <form action="#" class="form" id="form">
                  <div class="form-row">
                    <input
                      type="text"
                      hidden
                      class="user-input filled"
                      name="page"
                      value="feedback"
                      id="page"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-input-group rating-input-group">
                      <div class="form-rating">
                        <div
                          class="form-rating-title"
                        >How likely are you to recommend us to friends and family if they needed similar care or treatment? *</div>
                        <div class="form-rating-group">
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-1"
                              value="Extremely likely"
                            />
                            <label for="rating-1" class="rating-radio-label rating-1"></label>
                          </div>
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-2"
                              value="Good"
                            />
                            <label for="rating-2" class="rating-radio-label rating-2"></label>
                          </div>
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-3"
                              value="Okay"
                            />
                            <label for="rating-3" class="rating-radio-label rating-3"></label>
                          </div>
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-4"
                              value="Bad"
                            />
                            <label for="rating-4" class="rating-radio-label rating-4"></label>
                          </div>
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-5"
                              value="Worse"
                            />
                            <label for="rating-5" class="rating-radio-label rating-5"></label>
                          </div>
                          <div class="form-rating-item">
                            <input
                              type="radio"
                              class="form-radio user-input"
                              name="rating"
                              id="rating-6"
                              value="Don't know"
                            />
                            <label for="rating-6" class="rating-radio-label rating-6"></label>
                          </div>
                        </div>
                        <div class="form-rating-label">
                          <span class="form-rating-label-text"></span>
                          <span class="form-validation">This field is required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-textarea-group">
                      <label for="comments" class="form-label">Comments</label>
                      <textarea name="comments" id="comments" class="form-textarea user-input"></textarea>
                    </div>
                  </div>
                  <div class="about-you">
                    <h3 class="about-you-title">A little bit about you</h3>
                    <div class="form-row">
                      <div class="form-input-group radio-group">
                        <div class="form-label">Are you?</div>
                        <div class="form-radio-row">
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="role_1"
                              type="radio"
                              name="role"
                              value="patient"
                            />
                            <label for="role_1">
                              <span class="form-radio-label">The patient</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="role_2"
                              type="radio"
                              name="role"
                              value="parent or carer"
                            />
                            <label for="role_2">
                              <span class="form-radio-label">The parent or carer</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="role_3"
                              type="radio"
                              name="role"
                              value="patient parent carer"
                            />
                            <label for="role_3">
                              <span class="form-radio-label">The patient and parent/carer</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group radio-group">
                        <div class="form-label">Are you male or female?</div>
                        <div class="form-radio-row">
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="gender_1"
                              type="radio"
                              name="gender"
                              value="Male"
                            />
                            <label for="gender_1">
                              <span class="form-radio-label">Male</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="gender_2"
                              type="radio"
                              name="gender"
                              value="Female"
                            />
                            <label for="gender_2">
                              <span class="form-radio-label">Female</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group radio-group">
                        <div class="form-label">What age are you?</div>
                        <div class="form-radio-row">
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_1"
                              type="radio"
                              name="age"
                              value="0 - 15"
                            />
                            <label for="age_1">
                              <span class="form-radio-label">0 - 15</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_2"
                              type="radio"
                              name="age"
                              value="16 - 24"
                            />
                            <label for="age_2">
                              <span class="form-radio-label">16 - 24</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_3"
                              type="radio"
                              name="age"
                              value="25 - 34"
                            />
                            <label for="age_3">
                              <span class="form-radio-label">25 - 34</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_4"
                              type="radio"
                              name="age"
                              value="35 - 44"
                            />
                            <label for="age_4">
                              <span class="form-radio-label">35 - 44</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_5"
                              type="radio"
                              name="age"
                              value="45 - 54"
                            />
                            <label for="age_5">
                              <span class="form-radio-label">45 - 54</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_6"
                              type="radio"
                              name="age"
                              value="55 - 64"
                            />
                            <label for="age_6">
                              <span class="form-radio-label">55 - 64</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_7"
                              type="radio"
                              name="age"
                              value="65 - 74"
                            />
                            <label for="age_7">
                              <span class="form-radio-label">65 - 74</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_8"
                              type="radio"
                              name="age"
                              value="75 - 84"
                            />
                            <label for="age_8">
                              <span class="form-radio-label">75 - 84</span>
                            </label>
                          </div>
                          <div class="form-radio">
                            <input
                              class="form-radio-hidden user-input"
                              id="age_9"
                              type="radio"
                              name="age"
                              value="85+"
                            />
                            <label for="age_9">
                              <span class="form-radio-label">85+</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row checkbox-row">
                    <div class="form-checkbox">
                      <input
                        class="form-checkbox-hidden user-input"
                        id="checkbox_1"
                        type="checkbox"
                        name="public_comments"
                        value="public"
                      />
                      <label for="checkbox_1">
                        <span
                          class="form-checkbox-label"
                        >Please tick this box if you DO NOT wish your comments to be made public</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-input-group">
                      <input type="submit" class="form-submit" id="submit" value="Submit" />
                      <div class="validation-message">
                        <div class="form-validation">Please set the Rating before submit</div>
                      </div>
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
            </section>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="page-aside" id="page-aside">
            <div id="feedback-info">
              <div class="page-aside-title">Instructions</div>
              <div class="page-aside-cards">
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div class="aside-card-header-text">NHS Friends and Family Test</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div class="aside-card-body-text">
                      <p>We want you to have the best possible experience of care. The NHS Friends and Family Test is a way of gathering your feedback, so we can continually review our service.</p>
                      <p>Your feedback will help us learn more about what you think of your experience – what you like and what you think we could improve. Ultimately, you’re helping us to make changes that will ensure we can offer the best possible care.</p>
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
  name: "feedback"
};
</script>