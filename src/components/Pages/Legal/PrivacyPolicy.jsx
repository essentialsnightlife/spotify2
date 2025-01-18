/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function PrivacyPolicy() {
  return (
      <>
        <DefaultNavbar
            brand="Your Music Stats"
            routes={routes}
            action={{
              type: "internal",
              route: "/",
              label: "home",
              color: "primary",
            }}
            sticky
        />
        <MKBox component="section" pt={15} pb={12}>
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Card>
                  <MKBox
                      variant="gradient"
                      bgColor="dark"
                      borderRadius="lg"
                      coloredShadow="dark"
                      p={3}
                      mt={-3}
                      mx={2}
                  >
                    <MKTypography variant="h3" color="white">
                      Privacy Policy
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8}>
                      Last updated: January 18, 2025
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={2} pb={6} px={6}>
                    <MKTypography variant="body2" color="text">
                      This Privacy Notice for George Media Limited ("we", "us", or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                    <MKTypography variant="body2" color="text" ml={2}>
                    <ul>
                      <li>
                        Visit our website or any website of ours that links to this Privacy Notice.
                      </li>
                      <li>
                        Engage with us in other related ways, including any sales, marketing, or events.
                      </li>
                    </ul>
                    </MKTypography>
                    </MKTypography>

                    <MKTypography variant="body2" color="text" mt={3}>
                      Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at djedsd1@gmail.com.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      SUMMARY OF KEY POINTS
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      This summary provides key points from our Privacy Notice. You can find out more details about these topics by clicking the links provided below:
                      <MKTypography variant="body2" color="text" ml={2}>

                    <ul>
                      <li>What personal information do we process?</li>
                      <li>Do we process any sensitive personal information?</li>
                      <li>How do we process your information?</li>
                      <li>How do we keep your information safe?</li>
                      <li>What are your rights?</li>
                    </ul>
                    </MKTypography>
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      TABLE OF CONTENTS
                    </MKTypography>
                    <MKTypography variant="body2" color="text" ml={3} mt={6} mb={3}>
                    <ol>
                      <li>WHAT INFORMATION DO WE COLLECT?</li>
                      <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                      <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</li>
                      <li>WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</li>
                      <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                      <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                      <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                      <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                      <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                      <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                      <li>HOW CAN YOU CONTACT US?</li>
                    </ol>
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      1. WHAT INFORMATION DO WE COLLECT?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Personal information you disclose to us: We collect personal information that you voluntarily provide to us when you use our Services. All personal information you provide must be true, complete, and accurate.
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. Sensitive Information. We do not process sensitive information. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      2. HOW DO WE PROCESS YOUR INFORMATION?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We process your personal information to provide, improve, and administer our Services, communicate with you, and for security and fraud prevention. We may also process your information for other purposes with your consent.
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                      To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                      <MKTypography variant="body2" color="text" ml={2}>
                      <ul>
                        <li>
                          Consent. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.
                        </li>
                        <li>
                          Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                        </li>
                        <li>
                          Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                        </li>
                      </ul>
                    </MKTypography>
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We may need to share your personal information in the following situations:
                      Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      5. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                      <br />
                      When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      6. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                      <br />
                      Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      7. DO WE COLLECT INFORMATION FROM MINORS?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
                      <br />
                      If you become aware of any data we may have collected from children under age 18, please contact us at djedsd1@gmail.com.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      8. WHAT ARE YOUR PRIVACY RIGHTS?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.
                      <br />
                      We will consider and act upon any request in accordance with applicable data protection laws.
                      <br />
                      If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                      <br />
                      If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                      <br />
                      Withdrawing your consent: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.
                      <br />
                      However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                      <br />
                      If you have questions or comments about your privacy rights, you may email us at djedsd1@gmail.com.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      9. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
                      <br />
                      If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      10. DO WE MAKE UPDATES TO THIS NOTICE?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice.
                      <br />
                      If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      If you have questions or comments about this notice, you may email us at djedsd1@gmail.com or
                      contact us by post at:
                      <br/>
                      George Media Limited<br/>
                      68 Hastings Avenue<br/>
                      Ilford<br/>
                      IG6 1DU<br/>
                      United Kingdom<br/><br/>
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      If you are a resident in the United Kingdom, we are the 'data controller' of your personal information. We have appointed Ed to be our representative in the UK. You can contact them directly regarding our processing of your information, by email at djedsd1@gmail.com, or by post to:
                      <br />
                      68 Hastings Avenue<br/>
                      Ilford<br/>
                      IG6 1DU<br/>
                      United Kingdom<br/><br/>
                    </MKTypography>

                    <MKTypography variant="h5" mt={6} mb={3}>
                      12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                    </MKTypography>
                    <MKTypography variant="body2" color="text">
                      Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.
                      <br />
                      To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/notify/b4273158-051a-429d-b1e5-a62f94d3dbb8" target="_blank" rel="noopener noreferrer">data subject access request</a>.
                    </MKTypography>
                  </MKBox>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
  );
}

export default PrivacyPolicy;