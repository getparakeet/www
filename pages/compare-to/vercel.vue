<template>
  <div class="vercel">
    <navbar />
    <div class="container p-40">
    <div class="container max-w-prose mx-96">
        <h1 class="font-sans md:font-sans text-5xl font-extrabold">
            What makes Parakeet a great Vercel alternative
        </h1>
        <p>
            Many website owners and startups reach for Vercel as soon as they launch.
            However, there are a few reasons why you should consider using
            Parakeet instead. Here's why
        </p>
        <div class="border-gray-500 border p-4 mx-6">
            <ol class="m-0 ml-2">
                <li>
                    <a href="#whataposthediff">What's the difference, anyways?</a>
                    <ol class="p-6">
                        <li>
                            <a href="#ease-of-use" class="link">Easy and clear to use</a>
                        </li>
                        <li>
                            <a href="#privacy" class="link">User Privacy</a>
                        </li>
                        <li>
                            <a href="#speed" class="link">Fast and responsive</a>
                        </li>
                        <li>
                            <a href="#carbon-neutral" class="link">Carbon Neutral vs. Carbon Emitting</a>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
        <h2 class="font-sans md:font-sans text-4xl font-extrabold" id="whataposthediff">What's the difference, anyways?</h2>
        <h2 class="font-sans md:font-sans text-2xl font-extrabold" id="ease-of-use">Easy and clear to use</h2>
        <p>
            Parakeet's goal is to make it easy to deploy and manage your website. You can literally deploy your website in 3 clicks. Vercel, however has a learning
            curve and is not as easy to use as Parakeet. There are multiple sidebars and a lot of configuration options, but Parakeet is a lot more intuitive and easy to use.
            This is an example of Vercel's deploy page:
        </p>
        <img src="https://parakeetassets.parakeet-cdn.co/assets/vercel-deploy-example.png" alt="An image of the Vercel deploy page" />
        <p>
            Parakeet's deploy page is much more intuitive and easy to use. Here's an example of Parakeet's deploy page:
        </p>
        <img src="https://parakeetassets.parakeet-cdn.co/assets/parakeet-deploy-example.png" alt="An image of the Parakeet deploy page" />
        <h2 class="font-sans md:font-sans text-2xl font-extrabold" id="privacy">User Privacy</h2>
        <p>
            Vercel collects user data and logs it. Parakeet collects only basic user data and data you enter into the Parakeet dashboard.
        </p>
            <blockquote>
                <p class="focus main-quote">
                    <strong>
                        <q>
                            When you download, use or interact with the Site, even if you do not have an account, we, or authorized third parties engaged by us, may automatically collect information about your use of the Site via your device, some of which is considered personal information. "Device and Usage Information" that we collect consists of:
                            Information About your Device: information about the devices and software you use to access the Site — primarily the internet browser or mobile device that you use, the website or source that linked or referred you to the Site, your IP address or device ID (or other persistent identifier that uniquely identifies your computer or mobile device on the Internet), the operating system of your computer or mobile device, device screen size, and other similar technical information.
                        </q>
                    </strong>
                    <br />
                     - Vercel's Privacy Policy
                </p>
            </blockquote>
        <p>
            Vercel also uses Google Analytics, Segment, and other behemoth privacy-invading analytics to collect data about your use of the Site. We, on the other hand,
            use <a href="https://plausible.io" class="link">Plausible</a>, a small privacy-friendly startup to collect data about your use of the Site.
        </p>
        <h2 class="font-sans md:font-sans text-2xl font-extrabold" id="speed">Fast and responsive</h2>
        <p>
            Vercel uses the massive AWS infrasctructure to host your website. This means bandwidth is limited and latency is high. Parakeet, however, is built on the
            Innatical and Hetzner infrastructure and deployed to a global edge CDN. This means that your website is hosted on the fastest and highest performing servers that load in milliseconds.
        </p>
        <h2 class="font-sans md:font-sans text-2xl font-extrabold" id="carbon-neutral">Carbon Neutral vs. Carbon Emitting</h2>
        <p>
            Vercel's carbon footprint is high. Parakeet is built on the Innatical and Hetzner infrastructure, which are both carbon neutral. You can check your carbon footprint at <a href="https://websitecarbon.com">websitecarbon.com</a>. This is our website carbon rating:
        </p>
        <CarbonBadge></CarbonBadge>
    </div>
    </div>
    <ftr />
  </div>
</template>

<script>
import ftr from '~/components/ftr.vue';
import navbar from '~/components/navbar.vue';

export default {
  components: { ftr },

}
</script>

<style>
ol {
    list-style: decimal;
}
.main-quote {
    border-left: 2px solid #000;
    padding: 15px;
}
.link {
    color: rgba(52, 171, 235, 1);
    text-decoration: underline;
}
.link:link {
    color: rgba(52, 171, 235, 1);
    text-decoration: underline;
}
.link:visited {
    color: rgba(52, 171, 235, 1);
    text-decoration: underline;
}
</style>