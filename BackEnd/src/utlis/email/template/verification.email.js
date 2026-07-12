export const verificationemail = ({ code } = {}) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Email Verification</title>
  </head>

  <body style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial, Helvetica, sans-serif;
  ">

    <table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">

          <table width="600px" style="
            background:#ffffff;
            margin-top:40px;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 4px 15px rgba(0,0,0,0.1);
          ">

            <!-- Header -->
            <tr>
              <td style="
                background:#2563eb;
                padding:30px;
                text-align:center;
                color:white;
              ">
                <h1 style="
                  margin:0;
                  font-size:28px;
                ">
                  Note App
                </h1>

                <p style="
                  margin:10px 0 0;
                  font-size:16px;
                ">
                  Secure your account
                </p>
              </td>
            </tr>


            <!-- Content -->
            <tr>
              <td style="
                padding:40px;
                text-align:center;
              ">

                <h2 style="
                  color:#111827;
                  margin-bottom:15px;
                ">
                  Verify Your Email
                </h2>


                <p style="
                  color:#6b7280;
                  font-size:16px;
                  line-height:24px;
                ">
                  Use the verification code below to confirm your email address.
                  This code will expire soon.
                </p>


                <div style="
                  margin:30px auto;
                  width:220px;
                  padding:15px;
                  background:#eff6ff;
                  border-radius:10px;
                  border:2px dashed #2563eb;
                ">

                  <span style="
                    font-size:32px;
                    font-weight:bold;
                    letter-spacing:8px;
                    color:#2563eb;
                  ">
                    ${code}
                  </span>

                </div>


                <p style="
                  color:#9ca3af;
                  font-size:14px;
                ">
                  If you did not request this email, you can safely ignore it.
                </p>

              </td>
            </tr>


            <!-- Footer -->
            <tr>
              <td style="
                background:#f9fafb;
                padding:20px;
                text-align:center;
                color:#6b7280;
                font-size:14px;
              ">

                <p style="margin:5px;">
                  © ${new Date().getFullYear()} Note App
                </p>

                <p style="margin:5px;">
                  Keep your notes safe and organized ✨
                </p>

              </td>
            </tr>


          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
