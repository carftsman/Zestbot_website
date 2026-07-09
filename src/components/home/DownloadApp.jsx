import { motion } from "framer-motion";
import "../../styles/DownloadApp.css";

import botImg from "../../assets/images/botimage.png";
import playStore from "../../assets/images/playstore.png";
import appStore from "../../assets/images/appstore.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery";

const APP_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery";

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const phoneVariant = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DownloadApp() {
  return (
    <section className="download">
      <div className="download-container">
        {/* Background Elements */}
        <div className="bg-z">Z</div>

        <div className="curve curve-1"></div>
        <div className="curve curve-2"></div>
        <div className="curve curve-3"></div>

        {/* LEFT CONTENT */}
        <motion.div
          className="download-left"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <h2>
            Download the
            <br />
            <span>Zestbot</span> App
          </h2>

          <p>
            Scan the QR code to get started and enjoy a smarter, faster experience.
          </p>

          <div className="store-buttons">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download from App Store"
            >
              <img
                src={appStore}
                alt="App Store"
              />
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download from Google Play"
            >
              <img
                src={playStore}
                alt="Google Play"
              />
            </a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="download-right"
          variants={phoneVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          {/* BOT */}
          <img
            src={botImg}
            alt="Robot"
            className="bot-image"
          />
        </motion.div>
      </div>
    </section>
  );
}