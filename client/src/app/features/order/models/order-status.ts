export enum OrderStatus {
  PENDING = 'PENDING', // ? User started the checkout process but did not complete it. Incomplete orders are assigned a "Pending" status and can be found under the More tab in the ProductView Orders screen.
  AWAITING_PAYMENT = 'AWAITING_PAYMENT', // ? User has completed the checkout process, but payment has yet to be confirmed. Authorize only transactions that are not yet captured have this status.
  AWAITING_FULFILLMENT = 'AWAITING_FULFILLMENT', // ? User has completed the checkout process and payment has been confirmed.
  AWAITING_SHIPMENT = 'AWAITING_SHIPMENT', // ? Order has been pulled and packaged and is awaiting collection from a shipping provider.
  AWAITING_PICKUP = 'AWAITING_PICKUP', // ? Order has been packaged and is awaiting user pickup from a seller-specified location.
  PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED', // ? Only some items in the order have been shipped.
  IN_PROGRESS = 'IN_PROGRESS', // ? Order has been confirmed, and is being processed
  COMPLETED = 'COMPLETED', // ? Order has been shipped/picked up, and receipt is confirmed; client has paid for their digital item, and their file(s) are available for download.
  SHIPPED = 'SHIPPED', // ? Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items Actions. A listing of all orders with a "Shipped" status can be found under the More tab of the ProductView Orders screen.
  CANCELLED = 'CANCELLED', // ? Seller has cancelled an order, due to a stock inconsistency or other reasons. Stock levels will automatically update depending on your Inventory Settings. Cancelling an order will not refund the order. This status is triggered automatically when an order using an authorize-only payment gateway is voided in the control panel before capturing payment.
  DECLINED = 'DECLINED', // ? Seller has marked the order as declined.
  REFUNDED = 'REFUNDED', // ? Seller has used the Refund Actions to refund the whole order. A listing of all orders with a "Refunded" status can be found under the More tab of the ProductView Orders screen.
  DISPUTED = 'DISPUTED', // ?  User has initiated a dispute resolution process for the PayPal transaction that paid for the order or the seller has marked the order as a fraudulent order.
}
