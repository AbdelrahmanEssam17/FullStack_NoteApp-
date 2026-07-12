import cron from "node-cron";
import pool from "../DB/db.connection.js";
export const otpCleanupCron = () => {
  // Runs every minute
  cron.schedule("* * * * *", async () => {
    try {
      const result = await pool.query(
        `
        UPDATE users
        SET otp = NULL,
            otp_expire = NULL
        WHERE otp_expire < NOW()
        `,
      );

      console.log(`${result.rowCount} expired OTPs deleted`);
    } catch (error) {
      console.log("OTP cleanup cron error:", error);
    }
  });
};
