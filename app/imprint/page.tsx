export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-rockuno-gradient px-6 py-16 text-rockuno-ink dark:text-white">
      <div className="mx-auto max-w-3xl rounded-3xl rockuno-border bg-white/80 p-10 shadow-soft dark:bg-white/5">
        <h1 className="text-3xl font-semibold text-rockuno-ink dark:text-white">Impressum</h1>
        
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Information pursuant to § 5 TMG</h2>
            <p className="text-black/70 dark:text-white/70">
              Rockuno<br />
              Owner: Oemer Kaya<br />
              Immermannstrasse 16<br />
              39108 Magdeburg<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Contact</h2>
            <p className="text-black/70 dark:text-white/70">
              Email: info@rockuno.com<br />
              Phone: +49 1573 7980556
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">VAT Information</h2>
            <p className="text-black/70 dark:text-white/70">
              In accordance with § 19 para. 1 UStG (Kleinunternehmerregelung), no value-added tax is charged.<br />
              Therefore, no VAT identification number pursuant to § 27a UStG is provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Responsible for Content</h2>
            <p className="text-black/70 dark:text-white/70">
              Responsible for content pursuant to § 55 para. 2 RStV:<br />
              <br />
              Oemer Kaya<br />
              Immermannstrasse 16<br />
              39108 Magdeburg<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Liability for Content</h2>
            <p className="text-black/70 dark:text-white/70">
              As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general laws.
              According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Obligations to remove or block the use of information in accordance with general laws remain unaffected. Liability in this respect is only possible from the time of knowledge of a specific legal infringement.
              Upon becoming aware of corresponding legal violations, we will remove such content immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Liability for Links</h2>
            <p className="text-black/70 dark:text-white/70">
              Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking.
              Permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation.
              Upon becoming aware of legal violations, we will remove such links immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 text-rockuno-ink dark:text-white">Copyright</h2>
            <p className="text-black/70 dark:text-white/70">
              The content and works created by the site operator on these pages are subject to German copyright law.
              Duplication, processing, distribution, or any form of exploitation outside the limits of copyright law require the prior written consent of the respective author or creator.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Downloads and copies of this website are permitted for private, non-commercial use only.
            </p>
            <p className="text-black/70 dark:text-white/70 mt-2">
              Insofar as content on this site was not created by the operator, the copyrights of third parties are respected. Such content is marked accordingly.
              Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
