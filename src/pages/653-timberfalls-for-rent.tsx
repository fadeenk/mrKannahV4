import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./house-for-rent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFilePen } from "@fortawesome/free-solid-svg-icons";
import Gallery from "@site/src/components/Gallery/Gallery";

import type { JSX } from "react";

export default function HouseForRent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // All house images from static/img/house directory
  const houseImages = [
    "/img/house/PXL_20250812_173625807.jpg",
    "/img/house/PXL_20250812_173637374.jpg",
    "/img/house/PXL_20250812_173705851.jpg",
    "/img/house/PXL_20250812_173716650.jpg",
    "/img/house/PXL_20250812_173733629.jpg",
    "/img/house/PXL_20250812_173813937.jpg",
    "/img/house/PXL_20250812_173918790.jpg",
    "/img/house/PXL_20250812_173936308.jpg",
    "/img/house/PXL_20250812_174049765.jpg",
    "/img/house/PXL_20250812_174203289.jpg",
    "/img/house/PXL_20250812_174231513.jpg",
    "/img/house/PXL_20250812_174249104.jpg",
    "/img/house/PXL_20250812_174300672.jpg",
    "/img/house/PXL_20250812_174309496.jpg",
    "/img/house/PXL_20250812_174318559.jpg",
    "/img/house/PXL_20250812_174454185.jpg",
    "/img/house/PXL_20250812_174505294.jpg",
    "/img/house/PXL_20250812_174524477.jpg",
    "/img/house/PXL_20250812_174541085.jpg",
    "/img/house/PXL_20250812_174550920.jpg",
    "/img/house/PXL_20250812_174651879.jpg",
    "/img/house/PXL_20250812_174711509.jpg",
    "/img/house/PXL_20250812_174733198.jpg",
    "/img/house/PXL_20250812_174743524.jpg",
    "/img/house/PXL_20250812_174752065.jpg",
    "/img/house/PXL_20250812_174811715.jpg",
    "/img/house/PXL_20250812_174902568.jpg",
    "/img/house/PXL_20250812_174908724.jpg",
    "/img/house/PXL_20250812_174921612.jpg",
    "/img/house/PXL_20250812_174934850.jpg",
    "/img/house/PXL_20250812_174948524.jpg",
    "/img/house/PXL_20250812_174959200.jpg",
    "/img/house/PXL_20250812_175637935.jpg",
    "/img/house/PXL_20250812_175845336.jpg",
    "/img/house/PXL_20250812_175856206.jpg",
    "/img/house/PXL_20250812_175907860.jpg",
    "/img/house/Screenshot 2025-11-07 151520.png",
  ].reverse();

  return (
    <Layout
      title={`House for Rent - 653 Timberfalls Ln`}
      description={`Beautiful single-story home for rent in Henderson, NV`}
    >
      <div className={styles.flyerContainer}>
        {/* Top Banner Section */}
        <div className={styles.topBanner}>
          <h1 className={styles.mainTitle}>HOUSE FOR RENT</h1>
          <div className={styles.rentInfo}>
            <p className={styles.rentPrice}>Rent: $2,600 per month</p>
            <p className={styles.address}>
              653 Timberfalls Ln, Henderson, NV 89015
            </p>
            <p className={styles.moreDetailsLabel}>
              A charming and well-maintained single story home located in a
              quiet gated Henderson community.
              <br />
              This property offers comfort, convenience, and a variety of
              upgrades to make everyday living enjoyable.
              <br />
              Accepts section 8 vouchers
            </p>
          </div>
        </div>

        {/* Main House Image Section */}
        <div className={styles.mainImageSection}>
          <img
            src="/img/house/PXL_20250812_175845336.jpg"
            alt="653 Timberfalls Ln, Henderson, NV"
            className={styles.mainHouseImage}
          />
        </div>

        {/* Interior Images and Descriptions Section with Property Specifications */}
        <div className={styles.interiorAndSpecsContainer}>
          <div className={styles.interiorSection}>
            <div
              className={styles.interiorItem}
              style={{ alignItems: "center" }}
            >
              <img
                src="/img/house/PXL_20250812_174505294.jpg"
                alt="Interior view"
                className={styles.interiorImage}
              />
              <div className={styles.interiorText}>
                <p>
                  Large kitchen, lots of cabinets, countertop stove, microwave,
                  double oven, large island, upgraded lighting <br />
                  Water softener and reverse osmosis filtration system
                </p>
              </div>
            </div>
            <div className={styles.interiorItem}>
              <img
                src="/img/house/PXL_20250812_173637374.jpg"
                alt="Bedroom view"
                className={styles.interiorImage}
              />
              <div className={styles.interiorText}>
                <p>
                  Spacious backyard with shed, gazebo, LED lighting, sound
                  system, misters, and ceiling fan
                </p>
              </div>
            </div>

            {/* More Details QR Code Section */}
            <div className={styles.moreDetailsQRContainer}>
              <p className={styles.moreDetailsLabel}>
                For more information (Pictures, Floor Plan, details, etc.)
                <br />
                / schedule a tour / apply for this house
                <br />
                Click or Scan the QR Code
              </p>
              <a
                href="#apply-for-this-house"
                className={styles.moreDetailsQRLink}
              >
                <img
                  src="/img/house/details-qr.png"
                  alt="QR Code for more details, scheduling tour, and applying"
                  className={styles.moreDetailsQR}
                  onError={(e) => {
                    // Fallback to generic QR code if specific one doesn't exist
                    e.currentTarget.src = "/img/qr.jpg";
                  }}
                />
              </a>
            </div>
          </div>

          {/* Property Specifications Section */}
          <div className={styles.specsSection}>
            <div className={styles.specsContent}>
              <ul className={styles.specsList}>
                <li>Bedrooms: 4</li>
                <li>Bathrooms: 3</li>
                <li>Square Feet: 2,100</li>
                <li>Year Built: 2020</li>
                <li>Type: Single-family home</li>
                <li>Garage: 2-car</li>
                <li>Floors: 1</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="images" className={styles.gallerySection}>
          <Gallery photos={houseImages} />
        </div>

        {/* Property Description Section */}
        <div className={styles.descriptionSection}>
          <div className={styles.featuresAndResponsibilities}>
            <div className={styles.featuresContainer}>
              <h3 className={styles.featuresTitle}>Key Features:</h3>
              <ul className={styles.featuresList}>
                <li>All-tile flooring throughout easy to clean and stylish</li>
                <li>Upgraded garage with water softener & filtration system</li>
                <li>Comes with washer and dryer included</li>
                <li>
                  Spacious backyard with shed, gazebo, LED lighting, sound
                  system, misters, and ceiling fan perfect for entertaining or
                  relaxing outdoors
                </li>
                <li>
                  Modern touches and thoughtful upgrades throughout the home
                </li>
              </ul>
            </div>
            <div className={styles.responsibilitiesContainer}>
              <h3 className={styles.featuresTitle}>Tenant Responsibilities</h3>
              <div className={styles.responsibilitiesContent}>
                <p>Tenant is responsible for the following utilities:</p>
                <ul className={styles.responsibilitiesList}>
                  <li>Water</li>
                  <li>Gas</li>
                  <li>Electricity</li>
                  <li>Trash</li>
                </ul>
                <p>
                  Tenant is responsible for any damages caused by misuse of
                  appliances and lack of proper maintenance.
                </p>
                <p>
                  This property is within an HOA and you must follow its rules.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.descriptionText}>
            This home combines practicality with lifestyle perks, offering
            plenty of indoor comfort and outdoor space to enjoy.
          </p>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h3 className={styles.mapTitle}>Location</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=653+Timberfalls+Ln,+Henderson,+NV+89015&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="653 Timberfalls Ln, Henderson, NV 89015"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Section */}
        <div id="apply-for-this-house" className={styles.contactSection}>
          <div className={styles.actionContainer}>
            <p className={styles.actionLabel}>Want to See It?</p>
            <a
              href="https://calendar.app.google/eM6SnS2xczyPqMdp9"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                className={styles.actionIcon}
              />
              <span>Schedule Tour</span>
            </a>
          </div>
          <div className={styles.actionContainer}>
            <p className={styles.actionLabel}>Ready to Apply?</p>
            <a
              href="https://www.apartments.com/apply-online/?token=negwzym&l=wdy2nkk&u=363kwjf&landlordInvite=true"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              <FontAwesomeIcon icon={faFilePen} className={styles.actionIcon} />
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
