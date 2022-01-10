<template>
    <footer class="app-footer">
        <div class="app-footer-container">
            <div class="footer-offset-container">
                <div class="footer-inner-container">
                    <div class="footer-brand">
                        <span class="link-wrapper">
                            <CLAWordmark/>
                        </span>
                        <ul class="footer-list">
                            <li>LATIS</li>
                            <li>110 Anderson Hall</li>
                            <li>257 19th Ave S</li>
                            <li>Mineapolis, MN, 55455</li>
                        </ul>
                    </div>
                    <div class="footer-connect">
                        <h2>Connect</h2>
                        <ul class="footer-list">
                            <li><a href="mailto:latistecharch@umn.edu">latistecharch@umn.edu</a></li>
                        </ul>
                    </div>
                    <div class="footer-text">

                    </div>
                    <div class="footer-giving">
                        <h2>Make a Gift</h2>
                        <ul class="footer-list">
                            <li><a href="https://cla.umn.edu/give/">Find information on ways to give to the College of
                                    Liberal Arts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="university-footer">


                <span class="copyright-wrapper">© 2022 Regents of the University of Minnesota. All rights reserved. The
                    University of Minnesota is an equal opportunity educator and employer.</span> <span
                    class="accessibility-wrapper">CLA is committed to making its digital resources accessible. <a
                        href="https://oit-drupal-prd-web.oit.umn.edu/indexAccess.php?ref_url=https://cla.umn.edu/history">Report
                        Web Disability-Related Issue</a></span>. <span class="privacy-wrapper"><a
                        href="https://twin-cities.umn.edu/privacy">Privacy</a></span>

            </div>

        </div>
    </footer>
</template>

<style scoped>
    .app-footer {
        color: var(--dark-gray);
        background-color: var(--light-gray);
        margin-top: -2rem;
    }

    .app-footer-container {
        max-width: 90em;
        margin-left: auto;
        margin-right: auto;
    }

    .app-footer a {
        color: var(--maroon);
        text-decoration-color: var(--medium-gray);
        text-decoration-thickness: 2px;
        text-decoration-style: dotted;
        text-underline-offset: 2px;
    }

    .university-footer {
        max-width: 54.375rem;
        margin: 0 auto;
        font-size: 0.8125rem;
        line-height: 1.1875rem;
        padding-bottom: 1rem;
        text-align: center;
    }

    .footer-inner-container h2 {
        display: inline-block;
        margin: 0;
        padding: .25rem 0;
        line-height: unset;
        font-size: .875rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    .footer-offset-container {
        line-height: 1.75rem;
        color: var(--dark-black);
        padding-top: 5rem;
    }

    .link-wrapper a {
        margin-top: 0.8rem;
        margin-bottom: 0.9rem;
    }

    @media (min-width: 56em) {
        .footer-inner-container {

            display: grid;
            grid-template-areas: "footer-brand footer-connect footer-text footer-giving";
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .footer-inner-container {
        text-align: unset;
    }

    .footer-inner-container div {
        padding-bottom: 1.25rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }


    .footer-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .footer-list a {
        text-decoration: none;
        color: var(--light-black);
        padding: .25rem;
        margin-left: -.25rem;
    }

    .footer-list a:hover {
        color: var(--dark-gray);
        background-color: var(--nav-item-active);
    }

    .footer-brand {
        grid-area: footer-brand;
    }

    .footer-connect {
        grid-area: footer-connect;
    }

    .footer-text {
        grid-area: footer-text;
    }

    .footer-giving {
        grid-area: footer-giving;
        text-align: center;
        margin: 0 auto;
        max-width: 31.25em
    }
</style>


<script>

import CLAWordmark from "./CLAWordmark.vue"
    export default {
        name: 'AppFooter',
        components: {
            CLAWordmark
        },
        props: {},
        setup(props) {
        },
    };
</script>