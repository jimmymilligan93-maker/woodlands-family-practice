import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal information."
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-dm text-base font-semibold text-navy">Introduction</h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The objective of this privacy notice is to provide you, our patient, with
          clear information on how your personal information is collected and used
          within the practice. Occasionally we also need to share your personal
          information to involve others in your healthcare and this policy outlines
          when, how, and why we share your information.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          1. Who can I contact about this policy?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          For enquiries concerning this policy, you can contact our practice team by
          email{" "}
          <a
            href="mailto:reception@wfpwa.com.au"
            className="text-terra underline-offset-2 hover:underline"
          >
            reception@wfpwa.com.au
          </a>{" "}
          or calling 9446 2010.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          2. When and why is your consent necessary?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          When you register as a patient of this practice, you provide consent for the
          GPs and practice staff to access and use your personal information to
          facilitate the delivery of healthcare. Access to your personal information is
          restricted to practice team members who require it for your care. If we were
          to ever use your personal information for purposes other than healthcare
          provision, we would obtain additional consent from you.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          It is important to us that as our patient, you understand why we collect and
          use your personal information.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          3. Why do we collect, use, store, and share your personal information?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice collects, uses, stores, and shares your personal information
          primarily to manage your health safely and effectively. This includes
          providing healthcare services, managing medical records, and ensuring accurate
          billing and payments. Additionally, we may utilise your information for
          internal quality and safety improvement processes such as practice audits,
          accreditation purposes, and staff training to maintain high-quality service
          standards.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          4. What personal information is collected?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The information we will collect about you includes your:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-dm text-sm leading-relaxed text-slate">
          <li>
            names, date of birth, addresses, contact details
          </li>
          <li>
            medical information including medical history, medicines, allergies, and
            adverse reactions immunisations, social history, family history and risk
            factors
          </li>
          <li>Medicare number (where available) for identification and claiming purposes</li>
          <li>healthcare identifier numbers</li>
        </ul>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          5. Can you deal with us anonymously?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          You can deal with us anonymously or under a pseudonym unless it is
          impracticable for us to do so or unless we are required or authorised by law
          to only deal with identified individuals.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          6. How is personal information collected?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice may collect your personal information in several different ways:
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          When you make your first appointment, the practice team will collect your
          personal and demographic information via your registration.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We may also collect your personal information when you visit our website, send
          us an email or SMS, telephone us, make an online appointment, or communicate
          with us using social media.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          In some circumstances, personal information may also be collected from other
          sources, including:
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          While providing medical services, further personal information may be
          collected via:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-dm text-sm leading-relaxed text-slate">
          <li>electronic prescribing</li>
          <li>My Health Record</li>
          <li>online appointments</li>
        </ul>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Various types of images may be collected and used, including:
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Photos and medical images: These can be taken using personal devices for
          medical purposes, following the guidelines outlined in our guide on using
          personal devices for medical images.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          7. When, why and with whom do we share your personal information?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We sometimes share your personal information:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-dm text-sm leading-relaxed text-slate">
          <li>
            with third parties for business purposes, such as accreditation agencies or
            information technology providers – these third parties are required to
            comply with APPs and this policy
          </li>
          <li>with other healthcare providers (e.g. In referral letters)</li>
          <li>
            when it is required or authorised by law (e.g. court subpoenas)
          </li>
          <li>
            when it is necessary to lessen or prevent a serious threat to a patient’s
            life, health or safety or public health or safety, or it is impractical to
            obtain the patient’s consent
          </li>
          <li>to assist in locating a missing person</li>
          <li>to establish, exercise or defend an equitable claim</li>
          <li>for the purpose of confidential dispute resolution process</li>
          <li>
            When it is a statutory requirement to share certain personal information
            (e.g. some diseases require mandatory notification)
          </li>
          <li>
            When it is provision of medical services, through electronic prescribing, My
            Health Record (e.g. via Shared Health Summary, Event Summary).
          </li>
        </ul>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Only people who need to access your personal information will be able to do
          so. Other than providing medical services or as otherwise described in this
          policy, the practice will not share personal information with any third party
          without your consent.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We do not share your personal information with anyone outside Australia (unless
          under exceptional circumstances that are permitted by law) without your
          consent.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          8. Will your information be used for marketing purposes?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice will not use your personal information for marketing any goods or
          services directly to you without your expressed consent. If you do consent,
          you may opt out of direct marketing at any time by notifying the practice in
          writing.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          9. How is your information used to improve services?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice may use your personal information to improve the quality of the
          services offered to patients through research, analysis of patient data for
          quality improvement and for training activities with the practice team.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We may provide de-identified data to other organisations to improve population
          health outcomes. The information is secure, patients cannot be identified, and
          the information is stored within Australia. You can let reception staff know if
          you do not want your information included.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          10. How are document automation technologies used?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Document automation is where systems use existing data to generate electronic
          documents relating to medical conditions and healthcare.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice uses document automation technologies to create documents such as
          referrals, which are sent to other healthcare providers. These documents
          contain only your relevant medical information.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          These document automation technologies are used through secure medical software
          – Best Practice.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          All users of the medical software have their own unique user credentials and
          password and can only access information that is relevant to their role in the
          practice team.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice complies with the Australian privacy legislation and APPs to
          protect your information.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          All data, both electronic and paper are stored and managed in accordance with
          the Royal Australian College of General Practitioners{" "}
          <a
            href="https://www.racgp.org.au/running-a-practice/security/managing-practice-information/privacy-of-health-information"
            className="text-terra underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy and managing health information guidance.
          </a>
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          11. How is your personal information stored and protected?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Your personal information may be stored in electronic records, paper records,
          (we are on our way to no paper records though by 2027) visual records (scans,
          x-rays, videos and photos) and audio recordings.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice stores all personal information securely.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Electronic records are password protected. Different levels of authority are
          assigned to each staff member and doctors as to what information can be
          accessed. The doctors have full accessed whereas clerical staff have limited
          access. Our IT environment has antivirus software and several fire walls in
          place and undertakes continuous monitoring our IT service provider to protect
          the information we have stored.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Hard Copy formats are stored within a secure environment. Records are not left
          in public or unauthorised areas of the Practice. Hard copy records are only
          retrieved by authorised Practice staff and are secured when the practice is
          closed.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Some information such as mailed correspondence, faxed correspondence, etc. may
          be held as a ‘hard copy’ record which is stored in a secure area prior to being
          scanned to an electronic record. This paper record is held in a secure area for
          a maximum duration of 1 month after which it is destroyed by secure shredding.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Doctors and staff working at Woodlands Family Practice are required to sign a
          confidentiality agreement at the commencement of working within the practice,
          the agreement states that it is an immediate dismissal if there is a breach of
          privacy. Doctors &amp; staff are also given training in this area at induction,
          so that they understand how to protect your privacy.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          12. How can you access and correct your personal information at the practice?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          You have the right to request access to, and correction of, your personal
          information.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice acknowledges patients may request access to their medical records.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We prefer you to put this request in writing on a ‘request for personal health
          information’ form and our practice will respond within a reasonable time (30
          days). An administration fee may be associated with providing this information
          ifapplicable (e.g. a large printed file) – these must not be excessive. Patients
          will not be charged for making a request – only for the costs of complying with
          the request.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          The practice will take reasonable steps to correct your personal information
          where the information is not accurate or up to date. Sometimes, we will ask you
          to verify your personal information held by the practice is correct and current.
          You may request we correct or update your information. To do this please lodge
          your requests in writing to the Privacy Officer/Practice Manager, Clarissa
          Connors:{" "}
          <a
            href="mailto:clarissa@wfpwa.com.au"
            className="text-terra underline-offset-2 hover:underline"
          >
            clarissa@wfpwa.com.au
          </a>{" "}
          or to your treating doctor.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          13. How can you lodge a privacy-related complaint, and how will the complaint be
          handled at the practice?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          We take complaints and concerns regarding privacy seriously. You should express
          any privacy concerns you may have. We will then attempt to resolve it in
          accordance with our resolution procedure. We encourage you to include your
          preferred mailing address and contact number to allow a response to be received
          within 30 days, as per our complaint handling process.
        </p>
        <div className="mt-6 rounded-xl bg-mist p-6 font-dm text-sm leading-relaxed text-slate">
          <p className="font-semibold text-navy">Mail:</p>
          <p className="mt-2">
            The Privacy Officer
            <br />
            Woodlands Family Practice
            <br />
            82 Rosewood Avenue
            <br />
            Woodlands WA 6018
          </p>
          <p className="mt-4 font-semibold text-navy">Or</p>
          <p className="mt-2">
            If you do not feel we have resolved your issue you may also contact the
            Office of the Australian Information Commissioner. The Office of the
            Australian Information Commissioner will require you to give them time to
            respond before they investigate. For further information visit{" "}
            <a
              href="https://www.oaic.gov.au/"
              className="text-terra underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.oaic.gov.au
            </a>{" "}
            or call the OAIC (Office of the Australian Information Commissioner) on 1300
            363 992.
          </p>
          <p className="mt-4">
            You may also contact Health and Disability Services Complaints Office (HaDSCO)
            &amp; Enquiries Line: (08) 6551 7600 or 1800 813 583. Email:{" "}
            <a
              href="mailto:mail@hadsco.wa.gov.au"
              className="text-terra underline-offset-2 hover:underline"
            >
              mail@hadsco.wa.gov.au
            </a>
          </p>
        </div>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          14. How is privacy on the website maintained?
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          At Woodlands Family Practice, any personal information you share with us through
          website, email, and social media, is handled securely and confidentially. This
          practice uses analytics and cookies.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Our websites may contain links to other websites operated by third parties (e.g.
          Automed). We make no representations or warranties in relation to the privacy
          practices of any third party website and we are not responsible for the privacy
          policies or the content of any third party website. Third party websites are
          responsible for informing you about their own privacy practices.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          15. Emailing Woodlands Family Practice
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Your consent is implied when you initiate electronic communication with the
          practice, we will attempt to limit the information shared to non-confidential
          details due to the inherent security risks of unencrypted email. Sensitive
          medical information will always be discussed during a scheduled appointment.
          Please be aware that any emails sent to the practice may be monitored for
          quality assurance purposes and will be stored within your medical record.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Our practice has an automatic response email that states: ‘Thank you, your email
          has been received by Woodlands Family Practice. Please note this email is not
          monitored continually – If it is a matter of urgency, please phone the surgery
          on 08 9446 2010. Woodlands Family Practice strongly recommends no sensitive
          information is contained within any emails as we cannot guarantee confidentiality
          of information transferred. For all appointment bookings please call the surgery
          or book online.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">
          16. Policy review statement
        </h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Our privacy policy is regularly reviewed to ensure compliance with current
          obligations.
        </p>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">If any changes are made:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-dm text-sm leading-relaxed text-slate">
          <li>They will be reflected on the website.</li>
          <li>
            Significant changes may be communicated directly to patients via email or
            other means.
          </li>
        </ul>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          Please check the policy periodically for updates. If you have any questions,
          feel free to contact us.
        </p>

        <h2 className="mt-10 font-dm text-base font-semibold text-navy">17. Definitions</h2>
        <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
          In this document, the terms “we”, “our”, “us” or “Woodlands Family Practice”
          means any Independent Contractor providing services for Woodlands Family
          Practice.
        </p>
      </article>
      <Footer />
    </>
  );
}
