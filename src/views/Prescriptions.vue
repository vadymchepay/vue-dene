<template>
  <main class="page-main aside-page">
    <div class="container-fluid">
      <div class="row section-inner">
        <div class="col-md-12 col-lg-8">
          <div class="page-content">
            <section class="page-title">
              <div class="page-title-icon">
                <img src="../assets/img/Prescriptions.svg" alt="prescriptions" />
              </div>
              <h1 class="page-title-heading">Prescriptions</h1>
              <div
                class="page-title-info"
              >If your medication does not appear on your prescription request list, then the doctor has not deemed it appropriate for long term repeat use. You would therefore need to speak to reception to arrange a telephone consultation with the doctor.</div>
              <p
                class="page-title-text"
              >The best way to request a repeat prescription is Online. Our Online Services can help you request repeat medication at your convenience with automated delivery of your prescription to your preferred pharmacy. You may also drop your request slip at the practice or post it to us.</p>
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
              <div class="features-card" data-nav="3">
                <div class="features-card-box">
                  <div class="features-card-icon icon-clinic"></div>
                  <div class="features-card-text">IN PERSON</div>
                </div>
              </div>
            </div>
            <div class="page-nav">
              <select class="select nav-tabs-select">
                <option value="1" data-option="1" selected>Online</option>
                <option value="2" data-option="2">WEBFORM</option>
                <option value="3" data-option="3">IN PERSON</option>
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
              <div class="page-tabs-item" data-tab="3" data-name="in_person">
                <div class="in_person">
                  <div class="in_person-row">
                    <h3
                      class="in_person-title"
                    >Please follow the following guidelines when requesting your prescription.</h3>
                  </div>
                  <div class="in_person-row">
                    <div class="features-col features-left">
                      <div class="in_person-features">
                        <div class="in_person-feature">
                          <div class="in_person-feature-icon icon-right">
                            <img src="../assets/img/icon-list.svg" alt="list" />
                          </div>
                          <p class="in_person-feature-text t-right">Be precise with medication</p>
                        </div>
                        <div class="in_person-feature">
                          <div class="in_person-feature-icon icon-right">
                            <img src="../assets/img/icon-details.svg" alt="details" />
                          </div>
                          <p class="in_person-feature-text t-right">Detail exactly the strengths</p>
                        </div>
                        <div class="in_person-feature">
                          <div class="in_person-feature-icon icon-right">
                            <img src="../assets/img/icon-processing.svg" alt="processing" />
                          </div>
                          <p
                            class="in_person-feature-text t-right"
                          >Allow 72 hours for your prescription to be processed</p>
                        </div>
                      </div>
                    </div>
                    <div class="recipt-col">
                      <div class="in_person-recipt">
                        <div class="in_person-recipt-row">
                          <h4 class="in_person-recipt-title">Prescription Request</h4>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-item">Date</div>
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-item">Patient’s full name</div>
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-item">Date of Birth</div>
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-item">Medication required</div>
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-item">Chemist to be send to (if required)</div>
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <div class="in_person-recipt-line"></div>
                        </div>
                        <div class="in_person-recipt-row">
                          <p class="in_person-recipt-text">Please allow 72 hours for processing</p>
                        </div>
                        <div class="in_person-recipt-row">
                          <p
                            class="in_person-recipt-text underline"
                          >If your medication review is overdue, your medication will not be issued - please make an appointment with the doctor or nurse</p>
                        </div>
                      </div>
                    </div>
                    <div class="features-col features-right">
                      <div class="in_person-features">
                        <div class="in_person-feature">
                          <div class="in_person-feature-icon icon-left">
                            <img src="../assets/img/icon-person.svg" alt="person" />
                          </div>
                          <p
                            class="in_person-feature-text t-left"
                          >Ensure that you have included your full name and address and a contact telephone number.</p>
                        </div>
                        <div class="in_person-feature">
                          <div class="in_person-feature-icon icon-left">
                            <img src="../assets/img/icon-medcine.svg" alt="medcine" />
                          </div>
                          <p
                            class="in_person-feature-text t-left"
                          >Indicate if you intend to collect your prescriptions from the surgery (indicate which site) or a chemist.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-tabs-item" data-tab="2" data-name="webform">
                <div class="base-form" id="page-form">
                  <h3 class="base-form-title">Repeat Prescription Request</h3>
                  <p
                    class="base-form-text"
                  >If you do not have a Patient Access account, you can use this form to request any repeat prescriptions from the Practice. If you need to order acute medications, please contact the surgery.</p>
                  <p
                    class="base-form-text"
                  >Please allow 2 working days before collecting your prescription.</p>
                  <p
                    class="base-form-text"
                  >In future you may wish to consider registering for our Online Services. The Online Services system remembers which medications you are on and makes requesting repeat prescriptions faster and easier.</p>
                  <form class="form" id="form">
                    <div class="form-row">
                      <input
                        type="text"
                        hidden
                        class="user-input filled"
                        name="page"
                        value="prescriptions"
                        id="page"
                        required
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="name" class="form-label">Full Name *</label>
                        <input
                          type="text"
                          class="form-input user-input"
                          name="name"
                          id="name"
                          required
                        />
                        <div class="form-validation">This field is required</div>
                      </div>
                      <div class="form-input-group">
                        <label for="birth" class="form-label">Date of birth *</label>
                        <input
                          type="text"
                          class="form-input date-input user-input"
                          name="birth"
                          id="birth"
                          autocomplete="off"
                          required
                        />
                        <div class="form-validation">This field is required</div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="phone" class="form-label">Phone Number *</label>
                        <input
                          type="text"
                          class="form-input user-input"
                          name="phone"
                          id="phone"
                          required
                        />
                        <div class="form-validation">This field is required</div>
                      </div>
                      <div class="form-input-group">
                        <label for="email" class="form-label">Email Address *</label>
                        <input
                          type="email"
                          class="form-input mail-input user-input"
                          name="email"
                          id="email"
                          required
                        />
                        <div class="form-validation">Please enter valid email</div>
                      </div>
                    </div>
                    <h4 class="form-title">Medication Required</h4>
                    <div class="form-list">
                      <div class="form-row medication-row">
                        <div class="form-label description-label">Item Description</div>
                        <div class="form-label strength-label">Strength</div>
                        <div class="form-label quantity-label">Quantity</div>
                      </div>
                      <div class="form-row medication-row">
                        <input
                          type="text"
                          class="form-input input-description user-input"
                          name="description_1"
                          id="description_1"
                        />
                        <input
                          type="text"
                          class="form-input input-strength user-input"
                          name="strength_1"
                          id="strength_1"
                        />
                        <input
                          type="text"
                          class="form-input input-quantity user-input"
                          name="quantity_1"
                          id="quantity_1"
                        />
                      </div>
                      <div class="form-row medication-row">
                        <input
                          type="text"
                          class="form-input input-description user-input"
                          name="description_2"
                          id="description_2"
                        />
                        <input
                          type="text"
                          class="form-input input-strength user-input"
                          name="strength_2"
                          id="strength_2"
                        />
                        <input
                          type="text"
                          class="form-input input-quantity user-input"
                          name="quantity_2"
                          id="quantity_2"
                        />
                      </div>
                      <div class="form-row medication-row">
                        <input
                          type="text"
                          class="form-input input-description user-input"
                          name="description_3"
                          id="description_3"
                        />
                        <input
                          type="text"
                          class="form-input input-strength user-input"
                          name="strength_3"
                          id="strength_3"
                        />
                        <input
                          type="text"
                          class="form-input input-quantity user-input"
                          name="quantity_3"
                          id="quantity_3"
                        />
                      </div>
                      <div class="form-row medication-row">
                        <input
                          type="text"
                          class="form-input input-description user-input"
                          name="description_4"
                          id="description_4"
                        />
                        <input
                          type="text"
                          class="form-input input-strength user-input"
                          name="strength_4"
                          id="strength_4"
                        />
                        <input
                          type="text"
                          class="form-input input-quantity user-input"
                          name="quantity_4"
                          id="quantity_4"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group add-group">
                        <div class="form-add" id="form-add">
                          <div class="form-add-button"></div>
                          <div class="form-add-label">Add additional row</div>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-textarea-group">
                        <label for="comments" class="form-label">Additional Comments</label>
                        <textarea
                          name="comments"
                          id="comments"
                          class="form-textarea user-input"
                          cols="30"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-input-group">
                        <label for="chemist" class="form-label">Chemist to be sent to (if required)</label>
                        <input
                          type="text"
                          class="form-input chemist-input user-input"
                          name="chemist"
                          id="chemist"
                        />
                      </div>
                    </div>
                    <div class="form-row checkbox-row">
                      <div class="form-checkbox">
                        <input
                          class="form-checkbox-hidden user-input"
                          id="checkbox_1"
                          type="checkbox"
                          name="checkbox_1"
                          value="checkbox_1"
                          required
                        />
                        <label for="checkbox_1">
                          <span
                            class="form-checkbox-label"
                          >I have nominated a pharmacy and will arrange my collection from the pharmacy.</span>
                        </label>
                      </div>
                    </div>
                    <div class="form-row checkbox-row">
                      <div class="form-checkbox">
                        <input
                          class="form-checkbox-hidden user-input"
                          id="checkbox_2"
                          type="checkbox"
                          name="checkbox_2"
                          value="checkbox_2"
                          required
                        />
                        <label for="checkbox_2">
                          <span
                            class="form-checkbox-label"
                          >I have nominated a pharmacy and will arrange my collection from the pharmacy.</span>
                        </label>
                      </div>
                    </div>
                    <p class="prescription-form-text">
                      Your Prescription will be ready for collection from your chosen pharmacy
                      <span>after 12.00pm on Tuesday.</span>
                    </p>
                    <div class="form-row">
                      <input type="submit" class="form-submit" id="submit" value="Submit" />
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
            <div id="faqs">
              <div class="page-aside-title">FAQs</div>
              <div class="page-aside-cards">
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div
                      class="aside-card-header-text"
                    >Do I need to Register every time I request a prescription?</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div
                      class="aside-card-body-text"
                    >No, this only needs to be done the first time that you use the service. When collecting login details please bring a form of ID with you</div>
                  </div>
                </div>
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div
                      class="aside-card-header-text"
                    >Will I receive an email confirming receipt of my request?</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div
                      class="aside-card-body-text"
                    >No, you will not receive an email, but the system stores a history of everything you ordered.</div>
                  </div>
                </div>
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div
                      class="aside-card-header-text"
                    >Can I use my email address for more than one family member?</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div
                      class="aside-card-body-text"
                    >To keep patient's records secure each patient will need their own login and password.</div>
                  </div>
                </div>
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div
                      class="aside-card-header-text"
                    >Why can I not see all my medication on the repeat medication list?</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div
                      class="aside-card-body-text"
                    >The doctor who prescribed your medication will decide whether it will be listed as a repeat medication on your records. This is a safety issue to ensure you are reviewed appropriately before any further medication is prescribed for you. If it is appropriate for you to order further prescriptions of the medication online it will be available for you to see and order when you login.</div>
                  </div>
                </div>
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div
                      class="aside-card-header-text"
                    >How long will my prescription take to be issued</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div
                      class="aside-card-body-text"
                    >We do ask that you allow 72 hours for prescription requests.</div>
                  </div>
                </div>
                <div class="aside-card">
                  <div class="aside-card-header">
                    <div class="aside-card-header-text">Prescriptions Charges and Exemptions</div>
                    <div class="aside-card-header-trigger"></div>
                  </div>
                  <div class="aside-card-body">
                    <div class="aside-card-body-text">
                      <p>The NHS prescription charge is a flat-rate amount which successive Governments have thought it reasonable to charge for those who can afford to pay for their medicines. Prescription prepayment certificates (PPCs) offer real savings for people who need extensive medication</p>
                      <h4>From 1 April 2019, the charges are:</h4>
                      <ul>
                        <li>Prescription (per item): £9.00</li>
                        <li>12-month prepayment certificate (PPC): £104.00</li>
                        <li>3-month PPC: £29.10</li>
                      </ul>
                      <p>If you will have to pay for four or more prescription items in three months, or more than 14 items in 12 months, you may find it cheaper to buy a PPC.</p>
                      <ul>
                        <li>
                          Telephone advice and order line
                          <br />
                          <span>0845 850 0030</span>
                        </li>
                        <li>
                          General Public -
                          <a
                            href="https://apps.nhsbsa.nhs.uk/ppc-online/patient.do"
                            target="_blank"
                          >Buy or Renew a PPC On-line</a>
                        </li>
                      </ul>
                      <p>
                        There is further information about prescription exemptions and fees on the
                        <a
                          href="https://www.nhs.uk/using-the-nhs/help-with-health-costs/get-help-with-prescription-costs/"
                          target="_blank"
                        >NHS website</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "prescriptions"
};
</script>