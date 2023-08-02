import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Template from "~/components/Template";
import { brand } from "~/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Chromatron Privacy Policy" },
    {
      name: "description",
      content: "Chromatron Privacy Policy",
    },
  ];
};

export default function Index() {
  return (
    <Template header>
      <section className="privacy-policy">
        <div className="container px-4 tablet:px-4">
          <h1 className="h2">Privacy Policy</h1>
          <div className="row">
            <div className="col-xs-12">
              <p>
                We take your privacy seriously. As such, below is our privacy
                policy.
              </p>
              <p>
                If you have any questions, would like to know what data we have
                about you, or would like to have us delete any data we have
                about you, please contact us at:{" "}
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
              <p>
                If you've signed up for e-mail updates through our website: We
                collect your name and e-mail address so we can contact you about
                news and product announcements related to{" "}
                <Link to="/">{brand.nameLegal}</Link> and{" "}
                <a href={brand.parentCompanyUrl}>{brand.parentCompanyLegal}</a>.
                This data is stored and processed by Mailchimp (
                <a
                  href="https://www.mailchimp.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://www.mailchimp.com
                </a>
                ), as well as on our own servers. You can unsubscribe at any
                time, and your data will be deleted.
              </p>
              <p>
                If you've purchased a product from us: In addition to collecting
                your e-mail for the purposes stated above, we also collect your
                mailing address and phone number so we can ship your orders to
                you. This data is stored on our own servers, as well as
                Stamps.com (www.stamps.com) and Tindie (
                <a
                  href="https://www.tindie.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  www.tindie.com
                </a>
                ). We will delete this data from all stored locations at your
                request.
              </p>
              <p>
                Additionally, if you purchased a product from us on Kickstarter,
                your name, e-mail address, phone number, and mailing information
                will also be stored on Kickstarter's servers (
                <a
                  href="https://www.kickstarter.com/projects/1286098094/chromatron-wifi-pixel-controller"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  www.kickstarter.com
                </a>
                ).
              </p>
              <p>
                We will only share your data with a 3rd party for the following
                reasons: 1) To faciliate the marketing and shipping activities
                described above. 2) To comply with lawful demands from
                government entities.
              </p>
              <p>We do not share or sell your data for any other purpose.</p>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}
