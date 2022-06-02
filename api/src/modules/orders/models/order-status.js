"use strict";
exports.__esModule = true;
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderStatus["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    OrderStatus["AWAITING_SHIPMENT"] = "AWAITING_SHIPMENT";
    OrderStatus["AWAITING_PICKUP"] = "AWAITING_PICKUP";
    OrderStatus["PARTIALLY_SHIPPED"] = "PARTIALLY_SHIPPED";
    OrderStatus["IN_PROGRESS"] = "IN_PROGRESS";
    OrderStatus["COMPLETED"] = "COMPLETED";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["DECLINED"] = "DECLINED";
    OrderStatus["REFUNDED"] = "REFUNDED";
    OrderStatus["DISPUTED"] = "DISPUTED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
