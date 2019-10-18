<template>
    <main class="page-main">
        <div class="section-inner">
            <section class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-icon"> <img src="../assets/img/time.svg" alt="hours"> </div>
                            <h1 class="page-title-heading">Opening Hours</h1>
                            <p class="page-title-text"> We are located over 2 sites – the Farnham Centre for Health in central Farnham as well as Lodge Hill Road, Lower Bourne. Both are recently built premises and the Farnham Centre for Health also provides radiography, physiotherapy, a renal dialysis unit and a pharmacy. </p>
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
                <div class="page-tabs-item active" data-tab="1">
                    <section class="opening-hours">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="opening-hours-table">
                                        <div class="table-heading">
                                            <div class="table-heading-text"> Today’s Opening Hours: 08:00 - 18:30 </div>
                                            <div class="table-heading-indicator indicator-open">Open now</div>
                                            <div class="table-heading-indicator indicator-close">Closed now</div>
                                        </div>
                                        <div class="table-body">
                                            <div class="table-cells">
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="1">Mon</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="2">Tue</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="3">Wed</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="4">Thu</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="5">Fri</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item disabled">
                                                    <div class="table-cells-item-day" data-day="6">Sat</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">closed</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item disabled">
                                                    <div class="table-cells-item-day" data-day="0">Sun</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">closed</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="additional-info"> <a href="javascript:void(0);" class=" closed-info">When we are closed?</a> </div>
                                        </div>
                                    </div>
                                    <div class="availability-table-trigger"> GP &amp; Nurse Availability Information </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="availability">
                        <div class="container">
                            <div class="availability-table">
                                <div class="availability-table-header">
                                    <div class="availability-table-header-col col-stuff">
                                        <div class="cell-top"> <span>Doctors</span>
                                            <select class="select day-select">
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Friday</option>
                                                <option value="6">Saturday</option>
                                                <option value="0">Sunday</option>
                                            </select>
                                        </div>
                                        <div class="cell-bottom"> </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-mon" data-table-day="1">
                                        <div class="cell-top"> Mon </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-tue" data-table-day="2">
                                        <div class="cell-top"> Tue </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-wed" data-table-day="3">
                                        <div class="cell-top"> Wed </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-thu" data-table-day="4">
                                        <div class="cell-top"> Thu </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-fri" data-table-day="5">
                                        <div class="cell-top"> Fri </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sat disabled" data-table-day="6">
                                        <div class="cell-top"> Sat </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sun disabled" data-table-day="0">
                                        <div class="cell-top"> Sun </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="availability-table-body">
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&fionalowen" class="stuff-name">
                                                Dr Fiona Lowen
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&jameswellham" class="stuff-name">
                                                Dr James Wellham
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&rebeccareynolds" class="stuff-name">
                                                Dr Rebecca Reynolds
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&clairebrown" class="stuff-name">
                                                Dr Claire Brown
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&clareodowd" class="stuff-name">
                                                Dr Clare O'Dowd
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&cassiesnadden" class="stuff-name">
                                                Dr Cassie Snadden
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&ebrahim" class="stuff-name">
                                                Dr Niloufer Ebrahim
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&davidbrown" class="stuff-name">
                                               Dr David Brown
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&alexandrastreeter" class="stuff-name">
                                                Dr Alexandra Streeter de Diego
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-table">
                                <div class="availability-table-header">
                                    <div class="availability-table-header-col col-stuff">
                                        <div class="cell-top"> <span>Nurses</span>
                                            <select class="select day-select">
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Friday</option>
                                                <option value="6">Saturday</option>
                                                <option value="0">Sunday</option>
                                            </select>
                                        </div>
                                        <div class="cell-bottom"> </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-mon" data-table-day="1">
                                        <div class="cell-top"> Mon </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-tue" data-table-day="2">
                                        <div class="cell-top"> Tue </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-wed" data-table-day="3">
                                        <div class="cell-top"> Wed </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-thu" data-table-day="4">
                                        <div class="cell-top"> Thu </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-fri" data-table-day="5">
                                        <div class="cell-top"> Fri </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sat disabled" data-table-day="6">
                                        <div class="cell-top"> Sat </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sun disabled" data-table-day="0">
                                        <div class="cell-top"> Sun </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="availability-table-body">
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&gabriellegreet" class="stuff-name">
                                                Gabby Greet
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&janethurston" class="stuff-name">
                                                Jane Thurston
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&lizrichardson" class="stuff-name">
                                                Liz Richardson
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="javascript:void(0);" class="stuff-name sub-title">
                                                Health Care Assistant
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&helenallaway" class="stuff-name">
                                                Helen Allaway
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="page-tabs-item" data-tab="2">
                    <section class="opening-hours">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="opening-hours-table">
                                        <div class="table-heading">
                                            <div class="table-heading-text"> Today’s Opening Hours: 08:00 - 18:30 </div>
                                            <div class="table-heading-indicator indicator-open">Open now</div>
                                            <div class="table-heading-indicator indicator-close">Closed now</div>
                                        </div>
                                        <div class="table-body">
                                            <div class="table-cells">
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="1">Mon</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="2">Tue</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="3">Wed</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="4">Thu</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item">
                                                    <div class="table-cells-item-day" data-day="5">Fri</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">8.00</div>
                                                        <div class="hours-to">18.30</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item disabled">
                                                    <div class="table-cells-item-day" data-day="6">Sat</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">closed</div>
                                                    </div>
                                                </div>
                                                <div class="table-cells-item disabled">
                                                    <div class="table-cells-item-day" data-day="0">Sun</div>
                                                    <div class="table-cells-item-hour">
                                                        <div class="hours-from">closed</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="additional-info"> <a href="javascript:void(0);">This surgery is closed between 1pm - 2pm for lunch</a> </div>
                                        </div>
                                    </div>
                                    <div class="availability-table-trigger"> GP &amp; Nurse Availability Information </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="availability">
                        <div class="container">
                            <div class="availability-table">
                                <div class="availability-table-header">
                                    <div class="availability-table-header-col col-stuff">
                                        <div class="cell-top"> <span>Doctors</span>
                                            <select class="select day-select">
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Friday</option>
                                                <option value="6">Saturday</option>
                                                <option value="0">Sunday</option>
                                            </select>
                                        </div>
                                        <div class="cell-bottom"> </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-mon" data-table-day="1">
                                        <div class="cell-top"> Mon </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-tue" data-table-day="2">
                                        <div class="cell-top"> Tue </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-wed" data-table-day="3">
                                        <div class="cell-top"> Wed </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-thu" data-table-day="4">
                                        <div class="cell-top"> Thu </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-fri" data-table-day="5">
                                        <div class="cell-top"> Fri </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sat disabled" data-table-day="6">
                                        <div class="cell-top"> Sat </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sun disabled" data-table-day="0">
                                        <div class="cell-top"> Sun </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="availability-table-body">
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&davidbrown" class="stuff-name">
                                                Dr David Brown
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&jameswellham" class="stuff-name">
                                                Dr James Wellham
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&rebeccareynolds" class="stuff-name">
                                                Dr Rebecca Reynolds
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&clareodowd" class="stuff-name">
                                                Dr Clare O'Dowd
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&cassiesnadden" class="stuff-name">
                                                Dr Cassie Snadden
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&fionahead" class="stuff-name">
                                                Dr Fiona Head
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pmd"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&clairebrown" class="stuff-name">
                                               Dr Claire Brown
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am "></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#doctors&alexandrastreeter" class="stuff-name">
                                               Dr Alexandra Streeter de Diego
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm oval"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="availability-table">
                                <div class="availability-table-header">
                                    <div class="availability-table-header-col col-stuff">
                                        <div class="cell-top"> <span>Nurses</span>
                                            <select class="select day-select">
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Friday</option>
                                                <option value="6">Saturday</option>
                                                <option value="0">Sunday</option>
                                            </select>
                                        </div>
                                        <div class="cell-bottom"> </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-mon" data-table-day="1">
                                        <div class="cell-top"> Mon </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-tue" data-table-day="2">
                                        <div class="cell-top"> Tue </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-wed" data-table-day="3">
                                        <div class="cell-top"> Wed </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-thu" data-table-day="4">
                                        <div class="cell-top"> Thu </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-fri" data-table-day="5">
                                        <div class="cell-top"> Fri </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sat disabled" data-table-day="6">
                                        <div class="cell-top"> Sat </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                    <div class="availability-table-header-col col-day col-sun disabled" data-table-day="0">
                                        <div class="cell-top"> Sun </div>
                                        <div class="cell-bottom">
                                            <div class="am">Am</div>
                                            <div class="pm">PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="availability-table-body">
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&lizrichardson" class="stuff-name">
                                                Liz Richardson
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&kateflowerdew" class="stuff-name">
                                                Kate Flowerdew
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&janethurston" class="stuff-name">
                                                Jane Thurston
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&gabriellegreet" class="stuff-name">
                                                Gabby Greet
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="comingsoon.html" class="stuff-name sub-title">
                                                Health Care Assistant
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                    <div class="body-row">
                                        <div class="body-col col-stuff"> <a href="pratice_team.html#nurses&helenallaway" class="stuff-name">
                                                Helen Allaway
                                                </a> </div>
                                        <div class="body-col col-day col-mon" data-table-day="1">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-tue" data-table-day="2">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-wed" data-table-day="3">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-thu" data-table-day="4">
                                            <div class="am checked"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-fri" data-table-day="5">
                                            <div class="am checked"></div>
                                            <div class="pm checked"></div>
                                        </div>
                                        <div class="body-col col-day col-sut disabled" data-table-day="6">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                        <div class="body-col col-day col-sun disabled" data-table-day="0">
                                            <div class="am"></div>
                                            <div class="pm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "openinghours",
  
};
</script>