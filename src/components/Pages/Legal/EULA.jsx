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

function EULA() {
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
                    End User License Agreement
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last modified: January 17 2025
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={6}>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    1. THE APPLICATION
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Your Music Stats ('Licensed Application') is a piece of
                    software created to show users insights from activity on
                    their favorite music streaming services — and customized for
                    mobile devices ('Devices'). It is used to show users their
                    favorite songs and artists on Spotify.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    2. SCOPE OF LICENSE
                  </MKTypography>
                  <MKTypography variant="body2" color="text" ml={4}>
                    <ol>
                      <li>
                        You may not share or make the Licensed Application
                        available to third parties (unless to the degree allowed
                        by the Usage Rules, and with George Media Limited's
                        prior written consent), sell, rent, lend, lease or
                        otherwise redistribute the Licensed Application.
                      </li>
                      <li>
                        You may not reverse engineer, translate, disassemble,
                        integrate, decompile, remove, modify, combine, create
                        derivative works or updates of, adapt, or attempt to
                        derive the source code of the Licensed Application, or
                        any part thereof (except with George Media Limited's
                        prior written consent).
                      </li>
                      <li>
                        You may not copy (excluding when expressly authorized by
                        this license and the Usage Rules) or alter the Licensed
                        Application or portions thereof. You may create and
                        store copies only on devices that You own or control for
                        backup keeping under the terms of this license, the
                        Usage Rules, and any other terms and conditions that
                        apply to the device or software used. You may not remove
                        any intellectual property notices. You acknowledge that
                        no unauthorized third parties may gain access to these
                        copies at any time. If you sell your Devices to a third
                        party, you must remove the Licensed Application from the
                        Devices before doing so.
                      </li>
                      <li>
                        Violations of the obligations mentioned above, as well
                        as the attempt of such infringement, may be subject to
                        prosecution and damages.
                      </li>
                      <li>
                        Licensor reserves the right to modify the terms and
                        conditions of licensing.
                      </li>
                      <li>
                        Nothing in this license should be interpreted to
                        restrict third-party terms. When using the Licensed
                        Application, You must ensure that You comply with
                        applicable third-party terms and conditions.
                      </li>
                    </ol>
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    3. TECHNICAL REQUIREMENTS
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Details about the technical requirements of the application
                    may be added here.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    4. NO MAINTENANCE OR SUPPORT
                  </MKTypography>
                  <MKTypography variant="body2" color="text" ml={4}>
                    <ol>
                      <li>
                        George Media Limited is not obligated, expressed or
                        implied, to provide any maintenance, technical, or other
                        support for the Licensed Application.
                      </li>
                      <li>
                        George Media Limited and the End-User acknowledge that
                        the Services have no obligation whatsoever to furnish
                        any maintenance and support services with respect to the
                        Licensed Application.
                      </li>
                    </ol>
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    5. USER-GENERATED CONTRIBUTIONS
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The Licensed Application does not offer users the ability to
                    submit or post content. However, any opportunity to create,
                    submit, or share content must comply with outlined
                    regulations.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    6. CONTRIBUTION LICENSE
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    By submitting suggestions or feedback, you agree to let us
                    use them without compensation. Users retain full ownership
                    of their contributions but are solely responsible for their
                    content.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    7. LIABILITY
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    N/A
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    8. WARRANTY
                  </MKTypography>
                  <MKTypography variant="body2" color="text" ml={4}>
                    <ol>
                      <li>
                        Licensor warrants that the Licensed Application is free
                        of spyware, trojan horses, viruses, or any other malware
                        at the time of Your download. Licensor warrants that the
                        Licensed Application works as described in the user
                        documentation.
                      </li>
                      <li>
                        No warranty is provided for the Licensed Application
                        that is not executable on the device, that has been
                        unauthorisedly modified, handled inappropriately or
                        culpably, combined or installed with inappropriate
                        hardware or software, used with inappropriate
                        accessories, regardless if by Yourself or by third
                        parties, or if there are any other reasons outside of
                        George Media Limited's sphere of influence that affect
                        the executability of the Licensed Application.
                      </li>
                      <li>
                        You are required to inspect the Licensed Application
                        immediately after installing it and notify George Media
                        Limited about issues discovered without delay by email
                        provided in Contact Information. The defect report will
                        be taken into consideration and further investigated if
                        it has been emailed within a period of ninety (90) days
                        after discovery.
                      </li>
                      <li>
                        If we confirm that the Licensed Application is
                        defective, George Media Limited reserves a choice to
                        remedy the situation either by means of solving the
                        defect or substitute delivery.
                      </li>
                      <li>
                        In the event of any failure of the Licensed Application
                        to conform to any applicable warranty, You may notify
                        the Services Store Operator, and Your Licensed
                        Application purchase price will be refunded to You. To
                        the maximum extent permitted by applicable law, the
                        Services Store Operator will have no other warranty
                        obligation whatsoever with respect to the Licensed
                        Application, and any other losses, claims, damages,
                        liabilities, expenses, and costs attributable to any
                        negligence to adhere to any warranty.
                      </li>
                      <li>
                        If the user is an entrepreneur, any claim based on
                        faults expires after a statutory period of limitation
                        amounting to twelve (12) months after the Licensed
                        Application was made available to the user. The
                        statutory periods of limitation given by law apply for
                        users who are consumers.
                      </li>
                    </ol>
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    9. PRODUCT CLAIMS
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    George Media Limited and the End-User acknowledge that
                    George Media Limited, and not the Services, is responsible
                    for addressing any claims of the End-User or any third party
                    relating to the Licensed Application or the End-User’s
                    possession and/or use of that Licensed Application,
                    including, but not limited to:
                    <MKTypography variant="body2" color="text" ml={4}>
                      <ul>
                        <li>Product liability claims;</li>
                        <li>
                          Any claim that the Licensed Application fails to
                          conform to any applicable legal or regulatory
                          requirement;
                        </li>
                        <li>
                          Claims arising under consumer protection, privacy, or
                          similar legislation.
                        </li>
                      </ul>
                    </MKTypography>
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    10. LEGAL COMPLIANCE
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    You represent and warrant that You are not located in a
                    country that is subject to a US Government embargo, or that
                    has been designated by the US Government as a 'terrorist
                    supporting' country; and that You are not listed on any US
                    Government list of prohibited or restricted parties.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    11. CONTACT INFORMATION
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    For general inquiries, complaints, questions or claims
                    concerning the Licensed Application, please contact: Ed,
                    Hastings Avenue, Ilford, IG6 1DU England / djedsd1@gmail.com
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    12. TERMINATION
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The licence is valid until terminated by George Media
                    Limited or by You. Your rights under this licence will
                    terminate automatically and without notice from George Media
                    Limited if You fail to adhere to any term(s) of this
                    licence. Upon Licence termination, You shall stop all use of
                    the Licensed Application, and destroy all copies, full or
                    partial, of the Licensed Application.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    13. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    George Media Limited represents and warrants that George
                    Media Limited will comply with applicable third-party terms
                    of agreement when using Licensed Application. In Accordance
                    with Section 9 of the 'Instructions for Minimum Terms of
                    Developer's End-User Licence Agreement', subsidiaries shall
                    be third-party beneficiaries of this End User Licence
                    Agreement and upon Your acceptance of the terms and
                    conditions of this Licence Agreement, will have the right
                    (and will be deemed to have accepted the right) to enforce
                    this End User Licence Agreement against You as a third-party
                    beneficiary thereof.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    14. INTELLECTUAL PROPERTY RIGHTS
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    George Media Limited and the End-User acknowledge that, in
                    the event of any third-party claim that the Licensed
                    Application or the End-User's possession and use of that
                    Licensed Application infringes on the third party's
                    intellectual property rights, George Media Limited, and not
                    the Services, will be solely responsible for the
                    investigation, defence, settlement, and discharge or any
                    such intellectual property infringement claims.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    15. APPLICABLE LAW
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    This Licence Agreement is governed by the laws of the United
                    Kingdom, excluding its conflicts of law rules.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    16. MISCELLANEOUS
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    <ol>
                      <ul>
                        16.1 - If any of the terms of this agreement should be
                        or become invalid, the validity of the remaining
                        provisions shall not be affected. Invalid terms will be
                        replaced by valid ones formulated in a way that will
                        achieve the primary purpose.
                      </ul>
                      <ul>
                        16.2 - Collateral agreements, changes and amendments are
                        only valid if laid down in writing. The preceding clause
                        can only be waived in writing.
                      </ul>
                    </ol>
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

export default EULA;
