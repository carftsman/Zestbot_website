import React from "react";
import "../../styles/ReturnPolicy.css"

const ReturnsPolicy = () => {
  return (
    <div className="returns-page">
      <div className="returns-container">

        <h1>Returns Policy</h1>

        {/* Returns Policy */}

        <section className="policy-section">
          <p>
            Returns, exchanges, replacements, and refunds are facilitated by the
            respective sellers in accordance with this Returns Policy and the
            applicable seller terms and conditions. Subject to the provisions
            contained herein, eligible products may qualify for exchange,
            replacement, refund, or such other remedies as may be determined by
            the respective seller in accordance with the applicable product
            policy.
          </p>

          <p>
            The Platform operates solely as an intermediary marketplace
            facilitating transactions between customers and independent
            third-party sellers. Unless expressly stated otherwise, all
            obligations and liabilities relating to product quality, condition,
            description, specifications, warranties, after-sales services,
            exchanges, replacements, refunds, and related claims shall rest
            solely with the respective seller.
          </p>

          <p>
            Notwithstanding the foregoing, the Platform may, at its sole
            discretion, assist customers and sellers in coordinating,
            processing, or resolving issues relating to returns,
            replacements, exchanges, refunds, or related disputes in
            accordance with this Returns Policy and applicable law.
          </p>

          <p>
            Please note that return eligibility may vary depending on the
            product category, seller policy, or nature of the product.
            Accordingly, all products listed under a particular category
            may not be subject to the same return conditions.
          </p>

          <p>
            For each product, the return or replacement policy displayed
            on the respective product page shall prevail over this general
            return policy in the event of any inconsistency. Customers are
            advised to carefully review the return or replacement
            conditions mentioned on the relevant product page before
            placing an order.
          </p>

          <p>
            For ease of understanding, this Return Policy is divided into
            three sections. Customers are requested to read all sections
            carefully to understand the circumstances, conditions, and
            procedures under which returns, exchanges, replacements, or
            refunds may be accepted.
          </p>
        </section>
{/* Conditions for Accepting Returns */}

<section className="policy-section">
  <h2>Conditions for Accepting Returns</h2>

  <p>
    Products eligible for return, replacement, or exchange must be
    returned in their original condition, together with all applicable
    accessories, manuals, tags, warranty cards, freebies, and original
    packaging. The product should not show signs of use, damage, or
    alteration beyond what is necessary for reasonable inspection.
  </p>

  <p>
    The Seller and/or the Platform reserve the right to inspect and
    verify the returned product before approving any request for return,
    replacement, exchange, or refund. If the returned product is found
    to be used, damaged, incomplete, or not in the same condition in
    which it was delivered, the return or refund request may be rejected
    or partially approved, at the sole discretion of the Seller or the
    Platform.
  </p>

  <p>
    The details regarding product categories, applicable return windows,
    and available actions (such as replacement, exchange, or refund) are
    provided in the table below.
  </p>
</section>
{/* Quick / Minutes Delivery Orders */}

<div className="policy-table-wrapper">
  <table className="policy-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Return Window</th>
        <th>Available Action</th>
        <th>Conditions</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          Quick / Minutes Delivery Orders
          <br />
          (Groceries, Fresh Produce, Dairy, Bakery, Ready-to-Eat items,
          etc.)
        </td>

        <td>Within 24 Hours of Delivery</td>

        <td>
          Refund / Replacement
          <br />
          (if applicable)
        </td>

        <td>
          Returns are only accepted if the product is damaged, spoiled,
          missing, expired, or incorrect at the time of delivery. Due to
          the perishable nature of these items, change-of-mind returns
          are not allowed.
        </td>
      </tr>
    </tbody>
  </table>
  
</div>

{/* Important Points */}
<section className="policy-section">
<h2>Important Points</h2>

<ul>
  <li>
    Return requests must be raised within the applicable return window
    through the Platform.
  </li>

  <li>
    Products must be returned with original packaging, accessories,
    manuals, and warranty cards, where applicable.
  </li>

  <li>
    The Seller or the Platform may inspect the returned product before
    approving replacement or refund.
  </li>

  <li>
    Only one replacement request per order may be permitted.
  </li>

  <li>
    For technical products, troubleshooting or service centre
    verification may be required before approving a replacement.
  </li>
</ul>
</section>
{/* Returns Pick-Up and Processing */}
<section className="policy-section">
<h2>Returns Pick-Up and Processing</h2>

<p>
  If a return pick-up is requested from a different address than the
  delivery address, the pick-up location may be changed only if
  pick-up service is available at the new address.
</p>

<p>
  At the time of return pick-up, the field executive may verify the
  product based on the following conditions:
</p>
</section>
<div className="policy-table-wrapper">
  <table className="policy-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Conditions</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td><strong>Correct Product</strong></td>
        <td>
          Product name, brand, image, IMEI/serial number/article
          number/barcode must match the order details and the MRP tag
          must be intact.
        </td>
      </tr>

      <tr>
        <td><strong>Complete Product</strong></td>
        <td>
          All accessories, manuals, chargers, cables, freebies, and
          bundled items must be returned.
        </td>
      </tr>

      <tr>
        <td><strong>Unused Product</strong></td>
        <td>
          Product must be unused, unwashed, and untampered. For devices
          such as mobiles, laptops, or tablets, the device must be
          formatted and the screen lock disabled.
        </td>
      </tr>

      <tr>
        <td><strong>Undamaged Product</strong></td>
        <td>
          Product must not have scratches, dents, tears, or physical
          damage.
        </td>
      </tr>

      <tr>
        <td><strong>Undamaged Packaging</strong></td>
        <td>
          Original packaging or box should be intact.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<section className="policy-section">
<p>
  The pick-up executive may refuse the return if the above conditions
  are not met.
</p>

<p>
  Refunds will be processed after the returned product is received and
  verified by the Seller or the Platform.
</p>
</section>
{/* General Rules for Successful Returns */}
<section className="policy-section">
<h2>General Rules for Successful Returns</h2>

<ol className="policy-list">
  <li>
    If a replacement cannot be processed due to stock unavailability or
    other reasons, a refund may be issued instead.
  </li>

  <li>
    If any accessory included in the product package is missing,
    damaged, or defective, the Seller may either provide a replacement
    of the accessory or issue an Electronic Gift Voucher (eGV)
    equivalent to the value of the accessory.
  </li>

  <li>
    For open box deliveries, Customers must verify the product during
    delivery. If a product is damaged or incorrect, an immediate refund
    or replacement may be provided. After accepting an open box
    delivery, returns will only be accepted for manufacturing defects.
  </li>

  <li>
    For products requiring installation by Zestbot or product-specific
    authorized service partners, Customers should not open the
    packaging themselves. Authorized personnel will perform the
    unboxing and installation.
  </li>

  <li>
    For furniture products, issues may first be inspected by authorized
    service personnel. Attempts may be made to resolve the issue by
    replacing defective parts. Full replacement may be provided only if
    repair is not possible.
  </li>

  <li>
    Zestbot reserves the right to restrict the number of return
    requests for a particular order or user after evaluation by its
    authorized representatives.
  </li>
</ol>
</section>
{/* Refund Process */}
<section className="policy-section">
<h2>Refund Process</h2>

<p>Once a return request is approved:</p>

<ul>
  <li>
    Refunds will be processed to the original payment method used for
    the order.
  </li>

  <li>
    In certain cases, refunds may be issued as wallet credit or
    Platform balance.
  </li>

  <li>
    Refund timelines may be subject to the timelines and policies of
    the respective bank, payment provider, card network, or financial
    institution.
  </li>
</ul>
</section>
{/* Replacement Policy */}
<section className="policy-section">
<h2>Replacement Policy</h2>

<p>If a product is eligible for replacement:</p>

<ul>
  <li>
    Only one replacement request per order may be allowed.
  </li>

  <li>
    Replacement is subject to product availability.
  </li>

  <li>
    If a replacement is unavailable, a refund may be issued instead.
  </li>
</ul>
</section>
{/* Return Shipping Responsibility */}
<section className="policy-section">
<h2>Return Shipping Responsibility</h2>

<p>
  If a return is approved due to damaged, defective, incorrect, or
  missing products, the return shipping or pick-up cost will be borne
  by the Seller or the Platform.
</p>

<p>
  If the return request is made for reasons not related to product
  defects or delivery errors, the Platform or Seller may charge the
  Customer for return logistics costs where applicable.
</p>

<p>
  If return pick-up is unavailable at the Customer’s location, the
  Customer may be requested to self-ship the product to the address
  provided by the Seller or the Platform.
</p>
</section>
{/* Fraud Prevention and Misuse of Returns */}
<section className="policy-section">
<h2>Fraud Prevention and Misuse of Returns</h2>

<p>
  Zestbot reserves the right to investigate and take appropriate action
  against any user found to be abusing or misusing the return,
  replacement, or refund process, including excessive returns,
  fraudulent claims, or returning incorrect products.
</p>

<p>
  In such cases, Zestbot may reject return requests, cancel orders,
  suspend accounts, or take other necessary actions as permitted by
  applicable policies and laws.
</p>
</section>
{/* Final Decision */}
<section className="policy-section">
<h2>Final Decision</h2>

<p>
  The Platform and the respective Sellers reserve the right to
  determine the eligibility of any return, replacement, or refund
  request after reviewing the claim and supporting evidence. The
  decision of the Platform or the Seller shall be final and binding.
</p>
</section>
{/* Policy Updates */}
<section className="policy-section">
<h2>Policy Updates</h2>

<p>
  Zestbot reserves the right to modify or update this Return &amp;
  Refund Policy at any time without prior notice. Changes will become
  effective once published on the Platform.
</p>
</section>
<p className="policy-footer">
  <strong>ZestBot Q-Commerce – HR &amp; Operations</strong>
</p>

<p className="policy-footer">
  This circular is effective from April 2026 and supersedes any prior
  incentive communication.
</p>

      </div>
      
    </div>
  );
};

export default ReturnsPolicy;